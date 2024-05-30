import dotenv from "dotenv";
dotenv.config({ path: ".env.local" });
// Configure dotenv before other imports
import { DirectoryLoader } from "langchain/document_loaders/fs/directory";
import { PDFLoader } from "@langchain/community/document_loaders/fs/pdf";

import { RecursiveCharacterTextSplitter } from "langchain/text_splitter";
import { Pinecone } from "@pinecone-database/pinecone";
import { OpenAIEmbeddings } from "@langchain/openai";
import { PineconeStore } from "@langchain/pinecone";

const loadVectorDB = async () => {
  console.log("starting.....");

  const pinecone = new Pinecone();
  const pineconeIndex = pinecone.Index(process.env.PINECONE_INDEX!);

  console.log("loading.....");

  const directoryLoader = new DirectoryLoader("docs/BCSC/", {
    ".pdf": (path: string) => new PDFLoader(path),
  });

  const docs = await directoryLoader.load();

  console.log("sppliting.....");

  /* Additional steps : Split text into chunks with any TextSplitter. You can then use it as context or save it to memory afterwards. */
  const textSplitter = new RecursiveCharacterTextSplitter({
    chunkSize: 1000,
    chunkOverlap: 200,
  });

  const splitDocs = await textSplitter.splitDocuments(docs);

  console.log("ingesting.....");

  await PineconeStore.fromDocuments(
    splitDocs,
    new OpenAIEmbeddings({ modelName: "text-embedding-3-small" }),
    {
      pineconeIndex,
      maxConcurrency: 5, // Maximum number of batch requests to allow at once. Each batch is 1000 vectors.
    }
  );
};

loadVectorDB();
