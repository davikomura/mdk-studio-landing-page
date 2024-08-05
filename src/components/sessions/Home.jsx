import React from 'react'


const Home = () => {
    return(
        <div id="home" className=" relative inset-0 bg-cover bg-center h-screen" style={{backgroundImage: "url('src/assets/img1.jpg')"}}>
            <div className="absolute w-full h-full bg-black opacity-50" />
            <div className="relative flex z-2 flex-col justify-center items-center h-screen">
                <h1 className="text-white text-center text-5xl font-bold mb-4">
                    Mostre seu trabalho para o mundo 
                    <br />
                    com um site personalizado
                </h1>
                <p className="text-white text-center text-2xl mb-24">
                    Sua presença online inicia aqui
                </p>
                <button className='bg-white rounded-full px-8 py-3 font-bold hover:bg-blue-700 hover:text-white text-2xl'>Comece já</button>
            </div>
           
        </div>
    )
       
}

export default Home