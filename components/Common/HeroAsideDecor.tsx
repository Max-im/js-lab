"use client";

import styles from './Common.module.css';

const HeroAsideDecor= ({text}: {text: string}) => {
  return (
    <>
      <div className={`${styles.asideblock} accent rounded-lg`}>
        <p className={`${styles.asideblock__text} text-1xl md:text-4xl`} data-text={text}>
          {text}
        </p>
      </div>
    </>
  );
}

export default HeroAsideDecor;
