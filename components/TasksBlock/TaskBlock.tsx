"use client";

import Link from 'next/link';
import { useInView } from 'react-intersection-observer';
import { Button } from '@mui/material';
import BlockTitle from '../Common/BlockTitle';
import { SlideUp } from '../AnimationBox';
import CountUp from 'react-countup';

const TaskBlock = ({ num }: { num: number }) => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <SlideUp>
      <section className="relative bg-gray-100 p-5 md:px-10 rounded-lg mt-5">
        <BlockTitle title="Tasks" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <p className="mb-2">
              Dive into our extensive library of tasks designed to enhance your skills and prepare you for real-world challenges.
            </p>
            <p className="mb-4">
              Choose from three levels of complexity: <b className="accent__text">Easy</b>, <b className="accent__text">Medium</b>, and <b className="accent__text">Hard</b>, and progress at your own pace!
            </p>
            <Button className="hidden md:block accent hover:bg-emerald-800 text-white font-semibold py-2 sm:py-3 px-6 shadow">
              <Link href={'/task'}>Get Started</Link>
            </Button>
          </div>
          <div ref={ref} className="text-center">
            <h4 className="text-lg font-semibold">Available Tasks:</h4>
            <div className="text-slate-400 text-9xl font-bold">
              {inView && <CountUp start={0} end={num} duration={2.5} />}
            </div>
            <Button className="md:hidden accent hover:bg-emerald-800 text-white font-semibold py-2 sm:py-3 px-6 shadow">
              <Link href={'/task'}>Get Started</Link>
            </Button>
          </div>
        </div>
      </section>
    </SlideUp>
  );
}

export default TaskBlock;
