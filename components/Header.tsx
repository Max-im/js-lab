"use client"

import { Box } from '@mui/material';
import Link from 'next/link';

export default function Header({amount}: {amount: number}) {
  return (
    <Box className="py-5 flex justify-between">
      <Link href="/">TestLab</Link>
      <span className="text-gray-500">Tasks: {amount}</span>
    </Box>
  );
}