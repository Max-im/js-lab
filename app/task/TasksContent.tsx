'use client';

import { Task } from '../models/Task';
import Header from '@/components/Header';
import BreadCrumbs from '@/components/BreadCrumbs';
import { SlideDown, SlideRight } from '@/components/AnimationBox';
import HeroAsideDecor from '@/components/Common/HeroAsideDecor';
import HeroBgDecor from '@/components/Hero/HeroBgDecor';
import { useSearchParams } from 'next/navigation';
import CountUp from 'react-countup';
import CardList from '@/components/Card';
import LabelsFilter from '@/components/LabelsFilter';
import LevelFilter from '@/components/LevelFilter';

export default function TasksContent() {
    const searchParams = useSearchParams();
    const tasks = Task.getFilteredTasks(searchParams);
    
    return (
      <>
        <header className={`h-[500px] w-full overflow-hidden dark-accent rounded-lg relative text-white`}>
          <Header />
          <div className='relative flex items-center justify-center'>
            <div className="container mx-auto px-6 flex flex-wrap items-center justify-between relative z-10">
              <div className="w-full lg:w-1/2">
                <SlideRight>
                  <div className="container mx-auto px-0 lg:px-14 py-3">
                    <h1 className="text-5xl sm:text-6xl mb-2" itemProp="headline">Tasks</h1>
                    <p className="text-xl items-end flex sm:text-2xl">Available: <b className="ml-2 text-6xl accent__text"><CountUp start={0} end={tasks.length} duration={2.5} /></b></p>
                  </div>
                </SlideRight>
              </div>
              <div className="w-full md:w-1/2 relative flex justify-start">
                <div className="mt-3 md:mt-8 w-full lg:w-1/2 relative z-1">
                  <SlideDown>
                    <LevelFilter />
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
          <LabelsFilter />
          <CardList tasks={tasks} />
        </main>
      </>
    );
  }
  