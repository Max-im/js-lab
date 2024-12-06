"use client";

import Hero from "@/components/Hero";
import { Task } from "./models/Task";
import About from "@/components/About";
import TaskBlock from "@/components/TasksBlock";

export default function Home() {
  const tasks = Task.getTasks();
  
  return (
    <>
      <Hero />
      <About />
      <TaskBlock />
    </>
  );
}
