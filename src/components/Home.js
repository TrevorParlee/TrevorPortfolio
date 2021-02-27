import React from 'react';
import image from '../5pK3M4T.jpg';

export default function Home() {
  return (
    <main>
      <img
        src={image}
        alt='Picture of Trevor smiling'
        className='absolute object-cover w-full h-full'
      />
      <section className='relative text-center flex justify-center min-h-screen pt-12 lg:pt-64 px-8'>
        <h1 className='text-6xl text-white font-bold cursive leading-none lg:leading-snug home-name'>
          Hello. My name is Trevor Parlee and this page is all about me!
        </h1>
      </section>
    </main>
  );
}
