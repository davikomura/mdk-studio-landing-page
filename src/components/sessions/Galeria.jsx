import React from 'react';
import fundo from '../../assets/fundosobre.png';
import ImageCarousel from '../content/ImageCarousel';

export const Galeria = () => {
  return (
    <div id="galeria" className="object-cover object-center relative inset-0 bg-cover bg-center h-screen" style={{backgroundImage: "url('src/assets/fundosobre.png')"}}>
      {/* Background image container */}
      
      {/* Content container */}
      <div className="relative z-10 pt-24">
        <h2 className="text-xl text-white font-bold leading-tight text-center sm:text-3xl">Galeria</h2>
        <ImageCarousel />
      </div>
    </div>
  );
}
