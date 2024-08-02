import React from 'react';
import fundo from '../../assets/fundosobre.png';
import ImageCarousel from '../content/ImageCarousel';

export const Galeria = () => {
  return (
    <>
      {/* Background image container */}
      <div className="fixed inset-0 z-0">
        <img 
          src={fundo} 
          alt="Background Image" 
          className="object-cover object-center w-full h-full"
        />
      </div>
      
      {/* Content container */}
      <div className="relative z-10 pt-24">
        <h2 className="text-xl text-white font-bold leading-tight text-center sm:text-5xl">Galeria</h2>
        <ImageCarousel />
      </div>
    </>
  );
}
