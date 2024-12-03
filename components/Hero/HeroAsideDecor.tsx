"use client"

import { FC } from 'react';
import { Typography } from '@mui/material';
import styles from './Hero.module.css';

const HeroAsideDecor: FC = () => {
  return (
    <div className={`${styles.asideblock} accent rounded-lg`}>
      <Typography variant='h6' className={`${styles.asideblock__text} text-1xl md:text-4xl`} data-text="JS-Lab: Code Checking Platform">
        JS-Lab: Code Checking Platform
      </Typography>
    </div>
  );
}

export default HeroAsideDecor;
