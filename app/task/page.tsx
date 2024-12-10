'use client';

import { Task } from '../models/Task';
import Card from '@/components/Card';
import styles from './Task.module.css';
import Header from '@/components/Header';
import BreadCrumbs from '@/components/BreadCrumbs';
import { SlideRight } from '@/components/AnimationBox';
import HeroAsideDecor from '@/components/Common/HeroAsideDecor';
import HeroBgDecor from '@/components/Hero/HeroBgDecor';
import { useSearchParams } from 'next/navigation';

export default function Tasks() {
  const searchParams = useSearchParams();
  const level = searchParams.get('level');
  const tasks = level ? Task.getTasksByLevel(level) : Task.getTasks();

  return (
    <>
      <header className={`${styles.hero} w-full dark-accent rounded-lg h-screen relative`}>
        <Header />
        <div className='relative flex items-center justify-center'>
          <div className="container mx-auto px-6 lg:px-20 flex flex-wrap items-center justify-between relative z-10">
            <div className="w-full lg:w-1/2">
              <SlideRight>
                <div className="container mx-auto px-6 lg:px-20 py-3">
                  <h1 className="text-5xl sm:text-6xl mb-2">Tasks</h1>
                  <p className="text-xl sm:text-2xl">Manage your tasks efficiently</p>
                </div>
              </SlideRight>
            </div>
            <div className="w-full lg:w-1/2 relative flex justify-start">
              <div className="mt-8 rounded-lg bg-white w-full lg:w-1/2 p-4 relative z-1">

              </div>
            </div>
          </div>
          <HeroBgDecor />
        </div>

        <HeroAsideDecor text="Select a Task" />
      </header>
      <div className="mt-1 ml-2">
        <BreadCrumbs path={[{ name: 'Tasks', path: '/task' }]} />
      </div>
      <main>
        <div className="mt-7 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-2 xl:gap-3 justify-items-center">
          {tasks.map((task, i) => <Card index={i} task={task} key={task.slug} />)}
        </div>
      </main>
    </>
  )
}
