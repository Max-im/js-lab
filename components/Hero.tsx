"use client"

import Image from 'next/image';

const Hero = () => {
  return (
    <div className="hero">
      <div className="flex-1 pt-36 padding-x">
        <h1 className="hero__title">Find, Book or Rent a car --quickly and easily</h1>
        <p className="hero__subtitle">Streamline your car reantal experiance with our effortless booking process.</p>

      </div>
      <div className="hero__image-container">
        <div className="hero__image">
          {/* <Image src="/hero.png" alt="hero" fill className='object-contain' /> */}
        </div>
          <div className='hero__image-overlay '/>
      </div>
    </div>
  )
}

export default Hero