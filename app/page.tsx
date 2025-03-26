import { Metadata } from "next";
import Hero from "@/components/Hero";
import { Task } from "./models/Task";
import About from "@/components/About";
import TaskBlock from "@/components/TasksBlock";

const title = "JS-Lab | Home";
const description = "A platform for checking and reviewing code. The most popular interview questions and tasks.";
 
export const metadata: Metadata = {
  title,
  description,
  alternates: {
    canonical: "https://js-laboratory.vercel.app",
  },
  openGraph: {
    title,
    description,
    images: [
      {
        url: "https://js-laboratory.vercel.app/og-image.jpg",
        width: 1200,
        height: 630,
        alt: `Interview Tasks OG Image`,
      },
    ],
    url: `https://js-laboratory.vercel.app/task`,
    type: 'website',
    siteName: 'JS-Lab',
    locale: 'en_US',
  },
  other: {
    "script:ld+json": JSON.stringify({
      "@context": "https://schema.org",
      "@type": "WebPage",
      "name": title,
      "description": description,
      "url": `https://js-laboratory.vercel.app/`,
    }),
  }
};

export default function Home() {
  const tasks = Task.getTasks();
   
  return (
    <>
      <Hero />
      <About />
      <TaskBlock num={tasks.length} />
    </>
  );
}
