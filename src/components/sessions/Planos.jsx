import React from 'react'
import fundo from '../../assets/fundo.png'
import marmore from '../../assets/marmore.png'
import check from '../../assets/check.svg'

export const Planos = () => {
  return (
    <>
      <div className="absolute inset-0 bg-cover bg-center h-screen">
        <img src={fundo} alt="Background Image" className="object-cover object-center w-full h-full" />
      </div>
      <div className="absolute inset-0"></div>
      <div className="relative z-10">
        <div className="flex flex-col justify-center items-center h-screen">
          <h1 className="text-white text-center text-5xl font-bold mb-4">
            Planos 
          </h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 p-4 mb-28">
            <div className="">
              <div className='bg-color-plan w-72 h-128 rounded-md font-bold relative'>
                <img src={marmore} alt="Background Image" className="object-cover object-center w-full h-full opacity-30" />
                <div className='text-white ml-6 pt-3 absolute top-0 left-0 bg-opacity-75'>BÁSICO</div>
                <div className='text-white ml-6 pt-20 absolute top-0 left-0 bg-opacity-75'>Benefício 1</div>
                <div className='text-white ml-6 pt-32 absolute top-0 left-0 bg-opacity-75'>
                  <div className="flex items-center mb-2">
                    <img src={check} className="mr-2 w-4 h-4" alt="Check Icon" />
                    <p className="text-sm">Design simples e limpo.</p>
                  </div>
                  <div className="flex items-center mb-2">
                    <img src={check} className="mr-2 w-4 h-4" alt="Check Icon" />
                    <p className="text-sm">Até 5 páginas estáticas.</p>
                  </div>
                  <div className="flex items-center mb-2">
                    <img src={check} className="mr-2 w-4 h-4" alt="Check Icon" />
                    <p className="text-sm">Formulário de contato básico.</p>
                  </div>
                  <div className="flex items-center mb-2">
                    <img src={check} className="mr-2 w-4 h-4" alt="Check Icon" />
                    <p className="text-sm">Integração com redes sociais.</p>
                  </div>
                </div>
                <div className='absolute bottom-6 left-0 w-full flex justify-center'>
                  <button className='bg-white text-black rounded-2xl px-3 py-1'>Começar agora</button>
                </div>
              </div>
            </div>
            <div className="ml-2">
              <div className='bg-color-plan w-72 h-128 rounded-md font-bold relative'>
                <img src={marmore} alt="Background Image" className="object-cover object-center w-full h-full opacity-30" />
                <div className='text-white ml-6 pt-3 absolute top-0 left-0 bg-opacity-75'>INTERMEDIÁRIO</div>
                <div className='text-white ml-6 pt-20 absolute top-0 left-0 bg-opacity-75'>Benefício 1</div>
                <div className='text-white ml-6 pt-32 absolute top-0 left-0 bg-opacity-75'>
                  <div className="flex items-center mb-2">
                    <img src={check} className="mr-2 w-4 h-4" alt="Check Icon" />
                    <p className="text-sm">Design mais elaborado.</p>
                  </div>
                  <div className="flex items-center mb-2">
                    <img src={check} className="mr-2 w-4 h-4" alt="Check Icon" />
                    <p className="text-sm">Até 10 páginas, incluindo blog.</p>
                  </div>
                  <div className="flex items-center mb-2">
                    <img src={check} className="mr-2 w-4 h-4" alt="Check Icon" />
                    <p className="text-sm">Integração avançada com redes sociais.</p>
                  </div>
                  <div className="flex items-center mb-2">
                    <img src={check} className="mr-2 w-4 h-4" alt="Check Icon" />
                    <p className="text-sm">Integração com Google Analytics.</p>
                  </div>
                  <div className="flex items-center mb-2">
                    <img src={check} className="mr-2 w-4 h-4" alt="Check Icon" />
                    <p className="text-sm">Suporte técnico.</p>
                  </div>
                </div>
                <div className='absolute bottom-6 left-0 w-full flex justify-center'>
                  <button className='bg-white text-black rounded-2xl px-3 py-1'>Começar agora</button>
                </div>
              </div>
            </div>
            <div className="ml-2.5">
              <div className='bg-color-plan w-72 h-128 rounded-md font-bold relative'>
                <img src={marmore} alt="Background Image" className="object-cover object-center w-full h-full opacity-30" />
                <div className='text-white ml-6 pt-3 absolute top-0 left-0 bg-opacity-75'>PREMIUM</div>
                <div className='text-white ml-6 pt-20 absolute top-0 left-0 bg-opacity-75'>Benefício 1</div>
                <div className='text-white ml-6 pt-32 absolute top-0 left-0 bg-opacity-75'>
                  <div className="flex items-center mb-2">
                    <img src={check} className="mr-2 w-4 h-4" alt="Check Icon" />
                    <p className="text-sm">Design altamente personalizado.</p>
                  </div>
                  <div className="flex items-center mb-2">
                    <img src={check} className="mr-2 w-4 h-4" alt="Check Icon" />
                    <p className="text-sm">Funcionalidades avançadas (e-commerce, sistema de reservas, etc.).</p>
                  </div>
                  <div className="flex items-center mb-2">
                    <img src={check} className="mr-2 w-4 h-4" alt="Check Icon" />
                    <p className="text-sm">Segurança avançada.</p>
                  </div>
                  <div className="flex items-center mb-2">
                    <img src={check} className="mr-2 w-4 h-4" alt="Check Icon" />
                    <p className="text-sm">Suporte técnico prioritário.</p>
                  </div>
                  <div className="flex items-center mb-2">
                    <p className="text-sm underline">E muito mais...</p>
                  </div>
                </div>
                <div className='absolute bottom-6 left-0 w-full flex justify-center'>
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
