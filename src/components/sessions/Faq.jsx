import React from 'react'
import fundo from '../../assets/fundosobre.png';

const Faq = () => {
  return (
    <>
      <div className="absolute inset-0 bg-cover bg-center h-screen">
          <img src={fundo} alt="Background Image" className="object-cover object-center w-full h-full" />
      </div>
    </>
  )
}

export default Faq
