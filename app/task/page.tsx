'use client';

import { Task } from '../models/Task';
import Card from '@/components/Card';
import styles from './Task.module.css';
import Header from '@/components/Header';

export default function Tasks() {
  const tasks = Task.getTasks();

  return (
    <>
      <header className={`${styles.hero} w-full dark-accent rounded-lg`}>
        <Header />
        <div className="container mx-auto px-6 lg:px-20 py-3">
          Hero
        </div>
      </header>
      <main>
        <div className="mt-7 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-0s xl:gap-3 justify-items-center">
          {tasks.map((task, i) => <Card index={i} task={task} key={task.slug} />)}
        </div>
      </main>
    </>
  )
}
