import dotenv from 'dotenv';
dotenv.config();

import { Pinecone } from "@pinecone-database/pinecone";
import { OpenAIEmbeddings } from "@langchain/openai";
import { PineconeStore } from "@langchain/pinecone";
import { Document } from "langchain/document";
import * as fs from 'fs';
import * as path from 'path';
import { parse } from 'csv-parse/sync';

// This function could be called from an API route or during the build process
export async function loadSunCriteriaVectorDB() {
  console.log("Starting Sun Criteria ingestion...");

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

    console.log("Loading data from CSV file...");
    const csvFilePath = path.join(process.cwd(), 'sun_criteria.csv');
    const fileContent = fs.readFileSync(csvFilePath, { encoding: 'utf-8' });
    const records = parse(fileContent, {
      columns: true,
      skip_empty_lines: true
    });

    console.log(`Loaded ${records.length} rows from CSV.`);

    const docs: Document[] = records.map((row: any, index: number) => new Document({
      pageContent: row.Content,
      metadata: {
        source: row.Source,
        id: `sun_criteria_${index}`,
      },
    }));

    console.log(`Prepared ${docs.length} documents for ingestion.`);

    console.log("Ingesting documents...");
    const embeddings = new OpenAIEmbeddings({ modelName: "text-embedding-3-small" });

    await PineconeStore.fromDocuments(docs, embeddings, {
      pineconeIndex: index,
      maxConcurrency: 5,
    });

    console.log("Sun Criteria ingestion complete!");
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
if (require.main === module) {
  loadSunCriteriaVectorDB().catch((error) => {
    console.error("An unexpected error occurred:", error);
    process.exit(1);
  });
}