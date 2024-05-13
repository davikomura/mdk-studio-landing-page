import React from 'react'
import fundovertical from '../../assets/fundolinhas.png'
import fundohorizontal from '../../assets/fundohorizontal.png'

export const Planos = () => {
  return (
    <div>
        <div className="absolute inset-0 bg-cover bg-center h-screen bg-custom-color"></div>
            <div className="absolute inset-0"></div>
            <div className="relative z-10">
                <div className="flex flex-col justify-center items-center h-screen">
                    <h1 className="text-white text-center text-5xl font-bold mb-4">
                        Planos 
                    </h1>
                <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 p-4 mb-28">
                    <div className="">
                        <div className=' bg-color-plan w-60 h-96 rounded-md font-bold'  style={{backgroundImage: "url('src/assets/marmore.png')"}}>
                            <p className='text-white ml-6 pt-3'>BÁSICO</p>
                        </div>
                    </div>
                    <div className="">
                        <div className='text-white bg-color-plan w-60 h-96 ml-1.5 rounded-md font-bold'>
                        <p className='ml-6 pt-3'>INTERMEDIÁRIO</p>
                        </div>
                    </div>
                    <div className="">
                        <div className='text-white bg-color-plan w-60 h-96 ml-1.5 rounded-md font-bold'>
                        <p className='ml-6 pt-3'>PREMIUM</p>
                        </div>
                    </div>
                </div>
                </div>
            </div>
    </div>
  )
}
