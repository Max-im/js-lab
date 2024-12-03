"use client"

import { FC, useEffect, useState } from 'react';
import Image from 'next/image';
import styles from './Hero.module.css';

const HeroDevice: FC = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className='relative z-10'>
      <Image
        src="/hero-device.svg"
        alt="Device"
        width={isMobile ? 300 : 400}
        height={isMobile ? 300 : 400}
        objectFit="contain"
        className={`${styles.device} relative`}
      />
    </div>
  );
}

export default HeroDevice;
