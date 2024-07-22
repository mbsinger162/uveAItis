"use client";

import { useChat } from "ai/react";
import Image from "next/image";
import styles from "@/styles/Home.module.css";
import { useEffect, useRef, useState } from "react";
import ReactMarkdown from "react-markdown";
import LoadingDots from "@/components/ui/LoadingDots";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Document } from "@langchain/core/documents";

function extractFileName(path: string) {
  const fileNameWithExtension = path?.split(/[/\\]/).pop() || "";
  const fileNameWithoutExtension = fileNameWithExtension
    .split(".")
    .slice(0, -1)
    .join(".");

  return fileNameWithoutExtension;
}

export default function Home() {
  const [sourcesForMessages, setSourcesForMessages] = useState<
    Record<string, any>
  >({});

  const messageListRef = useRef<HTMLDivElement>(null);
  const textAreaRef = useRef<HTMLTextAreaElement>(null);
  const {
    messages,
    input,
    handleInputChange,
    handleSubmit,
    isLoading,
    error,
    setInput,
  } = useChat({
    streamMode: "text",
    onResponse(response) {
      const sourcesHeader = response.headers.get("x-sources");
      const sources = sourcesHeader ? JSON.parse(atob(sourcesHeader)) : [];
  
      const messageIndexHeader = response.headers.get("x-message-index");
      if (sources.length && messageIndexHeader !== null) {
        const sourcesWithMetadata = sources.map((source: any) => ({
          ...source,
          pmid: source.metadata.pmid,
          title: source.metadata.title,
          authors: source.metadata.authors,
        }));
  
        setSourcesForMessages({
          ...sourcesForMessages,
          [messageIndexHeader]: sourcesWithMetadata,
        });
  
        console.log(sourcesForMessages);
      }
    },
  });

  useEffect(() => {
    if (messageListRef.current) {
      messageListRef.current.scrollTop = messageListRef.current.scrollHeight;
    }
  }, [input]);

  //prevent empty submissions
  const handleEnter = (e: any) => {
    if (e.key === "Enter" && input) {
      handleSubmit(e);
    } else if (e.key == "Enter") {
      e.preventDefault();
    }
  };

  return (
    <div className="mx-auto flex flex-col gap-4">
      <h1 className="text-2xl font-bold leading-[1.1] tracking-tighter text-center">
        uveAItis: The Uveitis AI Chatbot
      </h1>
      <main className={styles.main}>
        <div className={styles.cloud}>
          <div ref={messageListRef} className={styles.messagelist}>
            <div className={styles.apimessage}>
              <Image
                src="/UveAItis2.png"
                alt="AI"
                width="40"
                height="40"
                className={styles.boticon}
                priority
              />
              <div className={styles.markdownanswer}>
                <ReactMarkdown>
                  Hi, what question do you have about uveitis care?
                </ReactMarkdown>
              </div>
            </div>
            {messages.map((message, index) => {
              let icon;
              let className;
              const sources = sourcesForMessages[index] || undefined;

              if (message.role === "assistant") {
                icon = (
                  <Image
                    key={index}
                    src="/UveAItis2.png"
                    alt="AI"
                    width="40"
                    height="40"
                    className={styles.boticon}
                    priority
                  />
                );
                className = styles.apimessage;
              } else {
                icon = (
                  <Image
                    key={index}
                    src="/usericon.png"
                    alt="Me"
                    width="30"
                    height="30"
                    className={styles.usericon}
                    priority
                  />
                );
                className =
                  isLoading && index === messages.length - 1
                    ? styles.usermessagewaiting
                    : styles.usermessage;
              }
              return (
                <>
                  <div key={`chatMessage-${index}`} className={className}>
                    {icon}
                    <div className={styles.markdownanswer}>
                      <ReactMarkdown>{message.content}</ReactMarkdown>
                    </div>
                  </div>

                  {sources && (
                    <div className="p-5" key={`sourceDocsAccordion-${index}`}>
                      <Accordion
                        type="single"
                        collapsible
                        className="flex-col text-black"
                      >
                        {sources.map((doc: Document, index: number) => (
                          <div key={`messageSourceDocs-${index}`}>
                            <AccordionItem value={`item-${index}`}>
                              <AccordionTrigger>
                                <h3>Source {index + 1}</h3>
                              </AccordionTrigger>
                              <AccordionContent>
                                <ReactMarkdown>{doc.pageContent}</ReactMarkdown>
                                <p className="mt-2">
                                <b>PMID: </b>
                                {doc.pmid}
                              </p>
                              <p>
                                <b>Title: </b>
                                {doc.title}
                              </p>
                              <p>
                                <b>Authors: </b>
                                {doc.authors}
                              </p>
                              </AccordionContent>
                            </AccordionItem>
                          </div>
                        ))}
                      </Accordion>
                    </div>
                  )}

                </>
              );
            })}
          </div>
        </div>
        <div className={styles.center}>
          <div className={styles.cloudform}>
            <form onSubmit={handleSubmit}>
              <textarea
                disabled={isLoading}
                ref={textAreaRef}
                autoFocus={false}
                value={input}
                onChange={handleInputChange}
                onKeyDown={handleEnter}
                rows={1}
                maxLength={2000}
                id="userInput"
                name="userInput"
                placeholder={
                  isLoading
                    ? "Waiting for response..."
                    : "Type question here..."
                }
                className={styles.textarea}
              />
              <button
                type="submit"
                disabled={isLoading}
                className={styles.generatebutton}
              >
                {isLoading ? (
                  <div className={styles.loadingwheel}>
                    <LoadingDots color="#000" />
                  </div>
                ) : (
                  <svg
                    viewBox="0 0 20 20"
                    className={styles.svgicon}
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z"></path>
                  </svg>
                )}
              </button>
            </form>
          </div>
        </div>
        {error && (
          <div className="border border-red-400 rounded-md p-4">
            <p className="text-red-500">{error.message}</p>
          </div>
        )}
      </main>
    </div>
  );
}
