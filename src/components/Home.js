import React from 'react';
import image from '../DSCF0172.jpg';

export default function Home() {
  return (
    <main>
      <img
        src={image}
        alt='Picture of Trevor smiling'
        className='absolute object-cover w-full h-full'
      />
      <section className='relative text-center flex justify-center min-h-screen pt-12 lg:pt-44 px-8'>
        <h1 className='text-6xl text-blue-600 font-bold cursive leading-none lg:leading-snug home-name'>
          Welcome to Trevor Parlee's portfolio page!
        </h1>
      </section>
    </main>
  );
}
