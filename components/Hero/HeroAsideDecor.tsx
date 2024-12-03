"use client"

import { FC } from 'react';
import { Typography } from '@mui/material';
import styles from './Hero.module.css';


const HeroAsideDecor: FC = () => {
  return (
    <div className="hidden md:block">
      <div className={`${styles.accentblock} accent rounded-lg`}>
          <Typography variant='h6' className={`${styles.accentblock__text} text-4xl rotate-90`} data-text="JS-Lab: Code Checking Platform">
            JS-Lab: Code Checking Platform
          </Typography>
      </div>
    </div>
  );
}

export default HeroAsideDecor;
