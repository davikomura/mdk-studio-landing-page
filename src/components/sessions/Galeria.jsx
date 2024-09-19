import React from 'react';
import ImageCarousel from '../content/ImageCarousel';

export const Galeria = () => {
  return (
    <div id="galeria" className="bg-black object-cover object-center relative inset-0 bg-cover bg-center">
      {/* Background image container */}
      
      {/* Content container */}
      <div className="relative pt-40 pb-20">
        <h2 className="text-xl text-white font-bold leading-tight text-center sm:text-5xl">Galeria</h2>
        <ImageCarousel />
      </div>
      <hr className="h-px bg-gray-200 border-0 dark:bg-gray-700"></hr>
    </div>
  );
}
