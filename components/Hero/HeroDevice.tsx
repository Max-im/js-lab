"use client"

import { FC, useEffect, useState } from 'react';
import Image from 'next/image';
import styles from './Hero.module.css';

const HeroDevice: FC = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 1024);
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className={`${styles.deviceWrapper} relative rounded-lg z-10`}>
      <Image
        src="/hero-device.svg"
        alt="Device"
        width={isMobile ? 300 : 400}
        height={isMobile ? 300 : 400}
        objectFit="contain"
        className={styles.device}
      />
    </div>
  );
}

export default HeroDevice;
