"use client";

import Hero from "@/components/Hero";
import TaskCard from "@/components/TaskCard";
import { Task } from "./models/Task";
import { ITask, ITaskLevel } from "@/types";
import { useState } from "react";
import FilterLabels from "@/components/FilterLabels";
import Header from "@/components/Header";

export default function Home() {
  const tasksData = Task.getTasks();
  const levelsData = Task.getLevels();
  const [tasks, setTasks] = useState<ITask[]>(tasksData);
  const [levels, setLevels] = useState<ITaskLevel[]>(levelsData);
  
  const onFilter = (level: ITaskLevel) => {
    if (level.current) return;

    if (level.name === 'all') {
      setTasks(tasksData);
      setLevels(levels.map(l => ({...l, current: l.name === 'all'})));
    } else {
      setTasks(tasksData.filter(task => task.levelName === level.name.toLowerCase()));
      setLevels(levels.map(l => ({...l, current: l.name === level.name})));
    }
  };

  return (
    <>
      <Hero />
      <FilterLabels levels={levels} handleClick={onFilter} />
      <ul className="flex mt-5 flex-wrap justify-between">
        {tasks.map(task => <TaskCard key={task.index} task={task} />)}
      </ul>
    </>
  );
}
