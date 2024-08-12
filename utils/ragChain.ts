import {
  ChatPromptTemplate,
  MessagesPlaceholder,
} from "@langchain/core/prompts";
import { BaseLanguageModel } from "@langchain/core/language_models/base";
import { BaseRetriever } from "@langchain/core/retrievers";
import type { Runnable } from "@langchain/core/runnables";
import type { BaseMessage } from "@langchain/core/messages";
import { createStuffDocumentsChain } from "langchain/chains/combine_documents";
import { createRetrievalChain } from "langchain/chains/retrieval";
import { createHistoryAwareRetriever } from "langchain/chains/history_aware_retriever";
import sunCriteria from '@/utils/sunCriteria';

function isDiagnosisQuestion(question: string): boolean {
  const diagnosisKeywords = ['diagnose', 'diagnosis', 'differential', 'classify', 'classification', 'criteria'];
  return diagnosisKeywords.some(keyword => question.toLowerCase().includes(keyword));
}

const historyAwarePrompt = ChatPromptTemplate.fromMessages([
  new MessagesPlaceholder("chat_history"),
  ["user", "{input}"],
  [
    "user",
    "Given the following conversation and a follow up question, rephrase the follow up question to be a standalone question.",
  ],
]);

const ANSWER_SYSTEM_TEMPLATE = `You are a research expert on uveitis providing advice to other providers and researchers.
Use the following pieces of context to answer the question at the end.
Be as thorough as possible with your answers. Think it out step by step. Explain your reasoning.
If you don't know the answer, just say you don't know. DO NOT try to make up an answer.
If the question is not related to the context, politely respond that you are tuned to only answer questions that are related to the context.

If the question involves diagnosis or classification
1 - refer to the SUN criteria provided below.
2 - Pay careful attention to logical operators (such as 'and', 'or', 'neither', 'nor') in the criteria. These words can significantly alter the meaning of a criterion. When encountering such terms, explicitly state their implication for the diagnosis.
3 - In some cases the vignette will not have PCR results. Do not exclude a diagnosis because PCR has not been collected even though the criteria may specify that for that diagnosis PCR is necessary.
4 - pay attention to key historical details such as prior surgery

Please do not reference that the system message or prompt in your response

<sun_criteria>
${JSON.stringify(sunCriteria).replace(/[{}]/g, (match) => (match === '{' ? '{{' : '}}'))}
</sun_criteria>

<context>
{context}
</context>

Please return your answer in markdown with clear headings and lists.`;

const answerPrompt = ChatPromptTemplate.fromMessages([
  ["system", ANSWER_SYSTEM_TEMPLATE],
  new MessagesPlaceholder("chat_history"),
  ["user", "{input}"],
]);

// Define interfaces for input and output types
interface ChainInput {
  input: string;
  chat_history: BaseMessage[];
}

interface ChainOutput {
  answer: string;
}

export async function createRAGChain(
  chatModel: BaseLanguageModel,
  retriever: BaseRetriever
): Promise<Runnable<{ input: string; chat_history: BaseMessage[] }, string>> {
  const historyAwareRetrieverChain = await createHistoryAwareRetriever({
    llm: chatModel,
    retriever,
    rephrasePrompt: historyAwarePrompt,
  });

  const documentChain = await createStuffDocumentsChain({
    llm: chatModel,
    prompt: answerPrompt,
  });

  const conversationalRetrievalChain = await createRetrievalChain({
    retriever: historyAwareRetrieverChain,
    combineDocsChain: documentChain,
  });

  // Wrap the chain to include SUN criteria check
  const wrappedChain = conversationalRetrievalChain.pipe((output) => {
    if (output && typeof output.input === 'string' && isDiagnosisQuestion(output.input)) {
      return {
        answer: `Before answering, please consider the SUN criteria provided in the system message.\n\n${output.answer}`,
      };
    }
    return output;
  });

  // "Pick" the answer from the retrieval chain output object.
  return wrappedChain.pick("answer");
}