import dotenv from "dotenv";
dotenv.config({ path: ".env" });

import { Pinecone } from "@pinecone-database/pinecone";
import { OpenAIEmbeddings } from "@langchain/openai";
import { PineconeStore } from "@langchain/pinecone";
import { Document } from "langchain/document";
import fs from "fs";
import csv from "csv-parser";

const loadVectorDB = async () => {
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

    console.log("Loading CSV data...");
    const docs: Document[] = [];

    await new Promise((resolve, reject) => {
      fs.createReadStream("uveitis_abstracts_final4.csv")
        .pipe(csv())
        .on("data", (row) => {
          docs.push(
            new Document({
              pageContent: row.abstract,
              metadata: {
                pmid: row.pmid,
                title: row.title,
                citation_count: row.citation_count,
                authors: row.authors,
              },
            })
          );
        })
        .on("end", () => {
          console.log(`Loaded ${docs.length} documents.`);
          resolve(null);
        })
        .on("error", reject);
    });

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
};

loadVectorDB().catch((error) => {
  console.error("An unexpected error occurred:", error);
});