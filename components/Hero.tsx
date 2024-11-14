"use client"

import React from 'react';

export default function Hero() {
  return (
    <section className="bg-blue-600 text-white py-20">
      <div className="container mx-auto text-center">
        <h1 className="text-5xl font-bold mb-4">Welcome to Our Website</h1>
        <p className="text-xl mb-8">We are glad to have you here. Explore our content and enjoy your stay!</p>
        <a href="#content" className="bg-white text-blue-600 px-6 py-3 rounded-full font-semibold">
          Get Started
        </a>
      </div>
    </section>
  );
}