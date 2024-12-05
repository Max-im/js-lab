'use client'

import { Box } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';

export default function Header() {
  return (
    <Box className="py-5 flex justify-between">
      <div className='container mx-auto px-6 lg:px-20'>
        <Link href="/" className="hidden md:block"><Image src="/logo.png" alt="JS-Lab" width={40} height={40} /></Link>
        <Link href="/" className="block md:hidden"><Image src="/logo.png" alt="JS-Lab" width={26} height={26} /></Link>
      </div>
    </Box>
  );
}