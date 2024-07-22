import { ChatOpenAI } from "@langchain/openai";
import { HumanMessage, AIMessage, ChatMessage } from "@langchain/core/messages";
import type { Message as VercelChatMessage } from "ai";
import { loadEmbeddingsModel, loadVectorStore } from "@/utils/pinecone";
import { createRAGChain } from "@/utils/ragChain";
import { Document } from "@langchain/core/documents";

const formatVercelMessages = (message: VercelChatMessage) => {
  if (message.role === "user") {
    return new HumanMessage(message.content);
  } else if (message.role === "assistant") {
    return new AIMessage(message.content);
  } else {
    console.warn(
      `Unknown message type passed: "${message.role}". Falling back to generic message type.`
    );
    return new ChatMessage({ content: message.content, role: message.role });
  }
};

export const runtime = "edge";

export async function POST(req: Request) {
  try {
    console.log("Starting POST request processing");

    const body = await req.json();
    const messages = body.messages ?? [];

    if (!messages.length) {
      throw new Error("No messages provided.");
    }

    console.log(`Processing ${messages.length} messages`);

    const formattedPreviousMessages = messages
      .slice(0, -1)
      .map(formatVercelMessages);

    const currentMessage = messages[messages.length - 1].content;

    console.log("Initializing ChatOpenAI model");
    const chatModel = new ChatOpenAI({
      modelName: "gpt-4",  // Changed from "gpt-4o" to "gpt-4"
      streaming: true,
      maxTokens: 4000,
    });

    console.log("Loading embeddings model");
    const embeddings = loadEmbeddingsModel();

    console.log("Loading vector store");
    const vectorstore = loadVectorStore({
      embeddings,
    });

    let resolveWithDocuments: (value: Document[]) => void;
    const documentPromise = new Promise<Document[]>((resolve) => {
      resolveWithDocuments = resolve;
    });

    console.log("Setting up retriever");
    const retriever = (await vectorstore).asRetriever({
      k: 20,
      callbacks: [
        {
          handleRetrieverEnd(documents) {
            console.log(`Retrieved ${documents.length} documents`);
            resolveWithDocuments(documents);
          },
        },
      ],
    });

    console.log("Creating RAG chain");
    const ragChain = await createRAGChain(chatModel, retriever);

    console.log("Streaming response");
    const stream = await ragChain.stream({
      input: currentMessage,
      chat_history: formattedPreviousMessages,
    });

    console.log("Waiting for documents");
    const documents = await documentPromise;
    const serializedSources = Buffer.from(
      JSON.stringify(
        documents.map((doc) => {
          return {
            pageContent: doc.pageContent,
            metadata: doc.metadata,
          };
        })
      )
    ).toString("base64");

    console.log("Converting to byte stream");
    const byteStream = stream.pipeThrough(new TextEncoderStream());

    console.log("Sending response");
    return new Response(byteStream, {
      headers: {
        "x-message-index": (formattedPreviousMessages.length + 1).toString(),
        "x-sources": serializedSources,
      },
    });
  } catch (error) {
    console.error("Error in POST function:", error);
    return new Response(
      JSON.stringify({ 
        error: "Internal server error", 
        details: error instanceof Error ? error.message : String(error)
      }), 
      { 
        status: 500, 
        headers: { "Content-Type": "application/json" } 
      }
    );
  }
}