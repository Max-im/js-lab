"use client"

import { FC } from 'react';
import { Box, Button, Typography } from '@mui/material';
import Link from 'next/link';
import Image from 'next/image';
import styles from './Hero.module.css';


const Hero: FC = () => {
  return (
    <section className="relative overflow-hidden text-white h-screen flex items-center justify-center dark-accent rounded-lg">
      <Image
        src="/hero-device.svg"
        alt="Device"
        width={600}
        height={300}
        objectFit="contain"
        className="absolute rotate-[-5deg] opacity-5 blur-sm top-50 left-0"
      />
      <div className="container mx-auto px-6 lg:px-20 flex flex-wrap items-center justify-between">
        <div className="w-full lg:w-1/2">
          <Typography className='mb-6 text-white' variant='h5'><b className="text-3">3</b> part of <b className="accent__text">success</b> are:</Typography>
          <h1 className="text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            LUCK <br/>
            <span className="accent__text text-7xl">PRACTICE</span> <br />
            and COFFEE
          </h1>
          <div className="flex space-x-4">
            <Button className="accent hover:bg-emerald-800 text-white font-semibold py-3 px-6 shadow">
              <Link href={'/task'}>Start Now</Link>
            </Button>
            <Button className="bg-white dark-accent__text hover:bg-gray-200 font-semibold py-3 px-6 shadow">
              Free Delivery
            </Button>
          </div>
        </div>

        <div className="w-full lg:w-1/2 relative flex justify-center items-center">

          <div className="relative z-10">
            <Image
              src="/hero-device.svg"
              alt="Device"
              width={400}
              height={300}
              objectFit="contain"
              className={`${styles.device} relative rotate-3`}
            />
          </div>
          {/* Thumbnails */}
          <div className="absolute bottom-0 flex space-x-3">
            {/* <Image
              src="/images/iced_coffee.png" // Replace with your image path
              alt="Iced Coffee"
              width={60}
              height={60}
              className="rounded shadow"
            /> */}
          </div>
        </div>
      </div>
      <Box className={`${styles.accentblock} accent rounded-lg`} >
          <Typography variant='h6' className={`${styles.accentblock__text} text-4xl rotate-90`} data-text="JS-Lab: Code Checking Platform">
            JS-Lab: Code Checking Platform
          </Typography>
      </Box>
    </section>
  );
}

export default Hero;
