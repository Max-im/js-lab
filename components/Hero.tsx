"use client"

import { Box, Button, Paper, Typography } from '@mui/material';
import Link from 'next/link';
import React from 'react';

export default function Hero({first}: {first: string}) {
  return (
    <>
      <Box className="py-5">
        Logo
      </Box>
      <Paper className="py-20">
        <Box className="container mx-auto text-center">
          <Typography variant='h2' className="font-bold mb-4">Welcome to Our Website</Typography>
          <Typography className="mb-8">
            Passing interview is a key to getting job of your dream, so don't waste your time and be prepared.
          </Typography>
          <Button variant="contained" className="bg-black px-5 py-3 rounded-full">
            <Link href={'/task/'+ first}>Get Started</Link>
          </Button>
        </Box>
      </Paper>
    </>
  );
}