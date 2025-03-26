import { Metadata } from 'next';
import { Task } from '../models/Task';
import { SlideDown, SlideRight } from '@/components/AnimationBox';
import LevelFilter from '@/components/LevelFilter';
import HeroBgDecor from '@/components/Hero/HeroBgDecor';
import HeroAsideDecor from '@/components/Common/HeroAsideDecor';
import BreadCrumbs from '@/components/BreadCrumbs';
import LabelsFilter from '@/components/LabelsFilter';
import CardList from '@/components/Card';
import Counter from '@/components/Counter';

const title = 'JS-Lab | Programming Tasks for Interview Preparation';
const description = 'Master your coding skills with expert-designed programming tasks. Perfect for interview preparation and sharpening problem-solving abilities.';

export const metadata: Metadata = {
  title,
  description,
  alternates: {
    canonical: 'https://js-laboratory.vercel.app/task',
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
  },
  other: {
    "script:ld+json": JSON.stringify({
      "@context": "https://schema.org",
      "@type": "WebPage",
      "name": title,
      "description": description,
      "url": `https://js-laboratory.vercel.app/task/`,
      "potentialAction": {
        "@type": "SearchAction",
        "target": "https://js-laboratory.vercel.app/search?level={search_term}",
        "query-input": "required name=search_term"
      }
    }),
  }
};

export default async function Tasks(props: { searchParams: Promise<URLSearchParams> }) {
  const searchParams = await props.searchParams;
  const tasks = Task.getFilteredTasks(searchParams);

  return (
    <>
      <header className={`h-[500px] w-full overflow-hidden dark-accent rounded-lg relative text-white`}>
        <div className='relative flex items-center justify-center'>
          <div className="container mx-auto px-6 flex flex-wrap items-center justify-between relative z-10">
            <div className="w-full lg:w-1/2">
              <SlideRight>
                <div className="container mx-auto px-0 lg:px-14 py-3 mt-16">
                  <h1 className="text-5xl sm:text-6xl mb-2" itemProp="headline">Tasks</h1>
                  <p className="text-xl items-end flex sm:text-2xl">Available: <b className="ml-2 text-6xl accent__text"><Counter num={tasks.length} className="" /></b></p>
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
        <LabelsFilter searchParams={searchParams} />
        <CardList tasks={tasks} />
      </main>
    </>
  );
}

