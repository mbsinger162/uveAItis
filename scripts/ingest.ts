import { Pinecone } from "@pinecone-database/pinecone";
import { OpenAIEmbeddings } from "@langchain/openai";
import { PineconeStore } from "@langchain/pinecone";
import { Document } from "langchain/document";

// This function could be called from an API route or during the build process
export async function loadVectorDB() {
  console.log("Starting...");

  // Check environment variables
  const requiredEnvVars = ['PINECONE_API_KEY', 'PINECONE_INDEX', 'OPENAI_API_KEY'];
  for (const varName of requiredEnvVars) {
    if (!process.env[varName]) {
      throw new Error(`Missing required environment variable: ${varName}`);
    }
    console.log(`${varName} is set to: ${varName === 'PINECONE_API_KEY' ? '[REDACTED]' : process.env[varName]}`);
  }

  try {
    console.log("Initializing Pinecone client...");
    const pinecone = new Pinecone({
      apiKey: process.env.PINECONE_API_KEY!,
    });

    console.log(`Accessing Pinecone index: ${process.env.PINECONE_INDEX}`);
    const index = pinecone.Index(process.env.PINECONE_INDEX!);

    console.log("Loading data...");
    // Instead of reading from a CSV, you might fetch this data from an API or database
    const docs: Document[] = [
      // Your document data here
      // Example:
      // new Document({
      //   pageContent: "Sample abstract",
      //   metadata: {
      //     pmid: "12345",
      //     title: "Sample Title",
      //     authors: "Author 1, Author 2",
      //     citation_count: "10",
      //   },
      // }),
    ];

    console.log(`Loaded ${docs.length} documents.`);

    console.log("Ingesting documents...");
    const embeddings = new OpenAIEmbeddings({ modelName: "text-embedding-3-small" });

    await PineconeStore.fromDocuments(docs, embeddings, {
      pineconeIndex: index,
      maxConcurrency: 5,
    });

    console.log("Ingestion complete!");
  } catch (error) {
    console.error("An error occurred:");
    if (error instanceof Error) {
      console.error(error.message);
      console.error(error.stack);
    } else {
      console.error(error);
    }
  }
}

// If you want to run this as a script during build time:
// if (require.main === module) {
//   loadVectorDB().catch((error) => {
//     console.error("An unexpected error occurred:", error);
//     process.exit(1);
//   });
// }