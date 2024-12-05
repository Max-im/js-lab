"use client"

import { FC } from 'react';
import HeroTitle from './HeroTitle';
import HeroAsideDecor from './HeroAsideDecor';
import HeroBgDecor from './HeroBgDecor';
import HeroDevice from './HeroDevice';
import Header from '../Header';

const Hero: FC = () => {
  return (
    <section className="relative overflow-hidden text-white h-screen dark-accent rounded-lg">
      <Header />
      <div className='relative flex items-center justify-center'>
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

      <HeroAsideDecor />
    </section>
  );
}

export default Hero;
