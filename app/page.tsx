"use client";

import Hero from "@/components/Hero";
import { Task } from "./models/Task";
import About from "@/components/About";
import TaskBlock from "@/components/TasksBlock";
import Head from "next/head";

const title = "JS-Lab | Home";
const description = "A platform for checking and reviewing code. The most popular interview questions and tasks.";

export default function Home() {
  const tasks = Task.getTasks();
  
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "name": {title},
            "description": {description},
            "url": "https://js-laboratory.vercel.app"
          })}
        </script>
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:url" content="https://js-laboratory.vercel.app" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://js-laboratory.vercel.app/og-image.jpg" />
      </Head>
      <Hero />
      <About />
      <TaskBlock num={tasks.length} />
    </>
  );
}
