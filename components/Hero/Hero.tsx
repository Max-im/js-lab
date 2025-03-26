"use client";

import { FC } from 'react';
import HeroTitle from './HeroTitle';
import HeroAsideDecor from '../Common/HeroAsideDecor';
import HeroBgDecor from './HeroBgDecor';
import HeroDevice from './HeroDevice';

const Hero: FC = () => {
  return (
    <section className="relative overflow-hidden text-white h-screen dark-accent rounded-lg z-10">
      <div className='relative flex items-center justify-center pt-[20%] md:pt-[10%]'>
        <div className="container mx-auto px-6 lg:px-20 flex flex-wrap items-center justify-between">
          <div className="w-full lg:w-1/2">
            <HeroTitle />
          </div>
          <div className="w-full lg:w-1/2 relative flex justify-center items-center">
            <HeroDevice />
          </div>
        </div>
        <HeroBgDecor />
      </div>
      <HeroAsideDecor text="JS-Lab: Code Checking Platform" />

    </section>
  );
}

export default Hero;
