"use client";

import { FC } from 'react';
import styles from './Hero.module.css';

const HeroAsideDecor: FC = () => {
  const text = 'JS-Lab: Code Checking Platform';
  return (
    <div className={`${styles.asideblock} accent rounded-lg`}>
      <p className={`${styles.asideblock__text} text-1xl md:text-4xl`} data-text={text}>
        {text}
      </p>
    </div>
  );
}

export default HeroAsideDecor;
