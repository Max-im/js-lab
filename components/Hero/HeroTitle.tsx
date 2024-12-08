"use client"

import { FC } from 'react';
import { Button } from '@mui/material';
import Link from 'next/link';
import { SlideRight } from '../AnimationBox';

const HeroTitle: FC = () => {
  return (
    <SlideRight>
      <div className='z-10 relative'>
        <p className="mb-5 text-white text-left text-2xl md:text-3xl">
          <b className="text-3 animate-pulse">3</b> part of <b className="accent__text">success</b> are:
        </p>
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight text-left">
          LUCK <br />
          <span className="animate-pulse accent__text text-5xl sm:text-7xl">PRACTICE</span> <br />
          and COFFEE
        </h1>
        <div className="flex flex-row space-y-0 space-x-4 items-center">
          <Button className="accent hover:bg-emerald-800 text-white font-semibold py-2 sm:py-3 px-4 sm:px-6 shadow">
            <Link href={'/task'}>Start Now</Link>
          </Button>
          {/* <Button className="bg-white dark-accent__text hover:bg-gray-200 font-semibold py-2 sm:py-3 px-4 sm:px-6 shadow">
            Read More
          </Button> */}
        </div>
      </div>
    </SlideRight>
  );
}

export default HeroTitle;
