"use client";

import { FC } from 'react';
import { useInView } from 'react-intersection-observer';
import styles from './TaskBlock.module.css';
import Link from 'next/link';
import { Button } from '@mui/material';

const TaskBlock: FC = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <section ref={ref} className="relative bg-gray-100 p-5 rounded-lg mt-5 relative">
      <h3 className={`text-2xl font-bold text-gray-800 mb-4 ${inView ? styles.title_animated : styles.title}`}>Tasks</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
            <Button className="accent hover:bg-emerald-800 text-white font-semibold py-2 sm:py-3 px-4 sm:px-6 shadow">
              <Link href={'/task'}>Start Now</Link>
            </Button><br />
            or<br />
            <h4>Choose the difficulty level:</h4>
            <Button className="bg-white dark-accent__text hover:bg-gray-200 font-semibold py-1 px-3 mr-2 shadow">
              <Link href="/task?level=easy" className={`${styles.link} ${styles.easy}`}>
                Easy
              </Link>
            </Button>
            <Button className="bg-white dark-accent__text hover:bg-gray-200 font-semibold py-1 px-3 mr-2 shadow">
              <Link href="/task?level=medium" className={`${styles.link} ${styles.medium}`}>
                Medium
              </Link>
            </Button>
            <Button className="bg-white dark-accent__text hover:bg-gray-200 font-semibold py-1 px-3 shadow">
              <Link href="/task?level=hard" className={`${styles.link} ${styles.hard}`}>
                Hard
              </Link>
            </Button>
        </div>
      </div>
    </section>
  );
}

export default TaskBlock;
