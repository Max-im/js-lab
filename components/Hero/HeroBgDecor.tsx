"use client"

import { FC } from 'react';
import Image from 'next/image';
import { useEffect, useState } from 'react';

const HeroBgDecor: FC = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
      <Image
        src="/hero-device.svg"
        alt="Device"
        width={isMobile ? 300 : 600}
        height={300}
        objectFit="contain"
        className="absolute rotate-[5deg] opacity-5 blur-sm top-50 left-0 hidden md:block"
      />
  );
}

export default HeroBgDecor;
