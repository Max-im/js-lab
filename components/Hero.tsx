"use client"

import { Box, Button, Paper, Typography } from '@mui/material';
import Link from 'next/link';
import React from 'react';

export default function Hero({first}: {first: string}) {
  return (
    <Paper className="py-20" elevation={0}>
      <Box className="container mx-auto text-center px-4 sm:px-6 lg:px-8">
        <Typography variant='h2' className="font-bold mb-4 text-3xl sm:text-4xl lg:text-5xl">Welcome to TestLab</Typography>
        <Typography className="mb-8 text-base sm:text-lg lg:text-xl">
          Passing interview is a key to getting job of your dream, so don&apos;t waste your time and be prepared.
        </Typography>
        <Button variant="contained" className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 px-5 py-3 rounded-full text-sm sm:text-base lg:text-lg">
          <Link href={'/task/'+ first}>Get Started</Link>
        </Button>
      </Box>
    </Paper>
  );
}