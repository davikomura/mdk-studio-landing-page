import React from 'react';
import ImageCarousel from '../content/ImageCarousel';

export const Galeria = () => {
  return (
    <div id="galeria" className="bg-fundo object-cover object-center relative inset-0 bg-cover bg-center h-screen">
      {/* Background image container */}
      
      {/* Content container */}
      <div className="relative z-10 pt-40">
        <h2 className="text-xl text-white font-bold leading-tight text-center sm:text-5xl">Galeria</h2>
        <ImageCarousel />
      </div>
    </div>
  );
}
