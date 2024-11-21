'use client'

import { Box, Typography } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';

export default function Header({amount}: {amount: number}) {
  return (
    <Box className="py-5 flex justify-between">
      <Link href="/"><Image src="/logo.jpg" alt="TestLab" width={40} height={40} /></Link>
      <Typography className="text-gray-500">Tasks: {amount}</Typography>
    </Box>
  );
}