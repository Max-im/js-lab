'use client';

import { Task } from '../models/Task';
import Header from '@/components/Header';
import BreadCrumbs from '@/components/BreadCrumbs';
import { SlideDown, SlideRight } from '@/components/AnimationBox';
import HeroAsideDecor from '@/components/Common/HeroAsideDecor';
import HeroBgDecor from '@/components/Hero/HeroBgDecor';
import { useSearchParams } from 'next/navigation';
import CountUp from 'react-countup';
import Link from 'next/link';
import { FaTasks, FaSmile, FaMeh, FaFrown } from 'react-icons/fa';
import CardList from '@/components/Card';

export default function TasksContent() {
    const searchParams = useSearchParams();
    const level = searchParams.get('level');
    const tasks = level ? Task.getTasksByLevel(level) : Task.getTasks();
  
    return (
      <>
        <header className={`h-[500px] w-full dark-accent rounded-lg relative text-white`}>
          <Header />
          <div className='relative flex items-center justify-center'>
            <div className="container mx-auto px-6 flex flex-wrap items-center justify-between relative z-10">
              <div className="w-full lg:w-1/2">
                <SlideRight>
                  <div className="container mx-auto px-0 lg:px-14 py-3">
                    <h1 className="text-5xl sm:text-6xl mb-2" itemProp="headline">Tasks</h1>
                    <p className="text-xl sm:text-2xl">Available: <b className="text-3xl accent__text"><CountUp start={0} end={tasks.length} duration={2.5} /></b></p>
                  </div>
                </SlideRight>
              </div>
              <div className="w-full md:w-1/2 relative flex justify-start">
                <div className="mt-3 md:mt-8 w-full lg:w-1/2 relative z-1">
                  <SlideDown>
                    <div className="rounded-lg bg-white w-full p-4 relative z-1 text-black flex flex-col space-y-2">
                      <Link href="/task?level=all" className="flex items-center space-x-2 p-2 bg-gray-200 rounded accent__text-hover" itemProp="url">
                        <FaTasks />
                        <span>All</span>
                      </Link>
                      <Link href="/task?level=easy" className="flex items-center space-x-2 p-2 bg-green-200 rounded accent__text-hover" itemProp="url">
                        <FaSmile />
                        <span>Easy</span>
                      </Link>
                      <Link href="/task?level=medium" className="flex items-center space-x-2 p-2 bg-yellow-200 rounded accent__text-hover" itemProp="url">
                        <FaMeh />
                        <span>Medium</span>
                      </Link>
                      <Link href="/task?level=hard" className="flex items-center space-x-2 p-2 bg-red-200 rounded accent__text-hover" itemProp="url">
                        <FaFrown />
                        <span>Hard</span>
                      </Link>
                    </div>
                  </SlideDown>
                </div>
              </div>
            </div>
            <HeroBgDecor />
          </div>
  
          <HeroAsideDecor text="Select a Task" />
        </header>
        <BreadCrumbs path={[{ name: 'Tasks', path: '/task' }]} />
        <main>
          <CardList tasks={tasks} />
        </main>
      </>
    );
  }
  