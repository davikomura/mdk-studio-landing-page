import React from 'react'
import fundovertical from '../../assets/fundolinhas.png'
import fundohorizontal from '../../assets/fundohorizontal.png'
import marmore from '../../assets/marmore.png'

export const Planos = () => {
  return (
    <>
        <div className="absolute inset-0 bg-cover bg-center h-screen bg-custom-color"></div>
        <div className="absolute inset-0"></div>
        <div className="relative z-10">
            <div className="flex flex-col justify-center items-center h-screen">
                <h1 className="text-white text-center text-5xl font-bold mb-4">
                    Planos 
                </h1>
                <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 p-4 mb-28">
                    <div className="">
                        <div className='bg-color-plan w-60 h-96 rounded-md font-bold relative'>
                            <img src={marmore} alt="Background Image" className="object-cover object-center w-full h-full opacity-30" />
                            <div className='text-white ml-6 pt-3 absolute top-0 left-0 bg-opacity-75'>BÁSICO</div>
                            <div className='text-white ml-6 pt-20 absolute top-0 left-0 bg-opacity-75'>Benefício 1</div>
                            <div className='text-white ml-6 pt-40 absolute top-0 left-0 bg-opacity-75'>
                                <p>Design simples e limpo.</p>
                                <p>Até 5 páginas estáticas.</p>
                                <p>Formulário de contato básico.</p>
                                <p>Integração com redes sociais.</p>
                            </div>
                            <div className='text-white ml-6 pt-60 absolute top-0 left-0 bg-opacity-75 mt-20'>
                                <button className='bg-white text-black rounded-2xl px-3 py-1'>Começar agora</button>
                            </div>
                        </div>
                    </div>
                    <div className="ml-2">
                        <div className='bg-color-plan w-60 h-96 rounded-md font-bold relative'>
                            <img src={marmore} alt="Background Image" className="object-cover object-center w-full h-full opacity-30" />
                            <div className='text-white ml-6 pt-3 absolute top-0 left-0 bg-opacity-75'>INTERMEDIÁRIO</div>
                            <div className='text-white ml-6 pt-20 absolute top-0 left-0 bg-opacity-75'>Benefício 1</div>
                            <div className='text-white ml-6 pt-40 absolute top-0 left-0 bg-opacity-75'>Benefício 2</div>
                            <div className='text-white ml-6 pt-60 absolute top-0 left-0 bg-opacity-75'>
                                <button className='bg-white text-black rounded-2xl px-3 py-1'>Começar agora</button>
                            </div>
                        </div>
                    </div>
                    <div className="ml-2.5">
                        <div className='bg-color-plan w-60 h-96 rounded-md font-bold relative'>
                            <img src={marmore} alt="Background Image" className="object-cover object-center w-full h-full opacity-30" />
                            <div className='text-white ml-6 pt-3 absolute top-0 left-0 bg-opacity-75'>PREMIUM</div>
                            <div className='text-white ml-6 pt-20 absolute top-0 left-0 bg-opacity-75'>Benefício 1</div>
                            <div className='text-white ml-6 pt-40 absolute top-0 left-0 bg-opacity-75'>Benefício 2</div>
                            <div className='text-white ml-6 pt-60 absolute top-0 left-0 bg-opacity-75'>
                                <button className='bg-white text-black rounded-2xl px-3 py-1'>Começar agora</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>

  )
}
