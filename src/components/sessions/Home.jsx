import React from 'react'


const Home = () => {
    return(
        <div id="home" className=" relative inset-0 bg-cover bg-center h-screen" style={{backgroundImage: "url('./src/assets/img1.jpg')"}}>
            <div className="absolute w-full h-full bg-black opacity-50" />
            <div className="relative flex z-10 flex-col justify-center items-center h-screen">
                <h1 className="text-white text-center text-4xl font-bold mb-4 lg:text-5xl">
                    Mostre seu trabalho para o mundo 
                    <br />
                    com um site personalizado
                </h1>
                <p className="text-white text-center text-2xl mb-24">
                    Sua presença online inicia aqui
                </p>
                <button className='flex text-xl justify-center gap-2 items-center mx-auto shadow-xl text-lg bg-gray-50 backdrop-blur-md lg:font-semibold isolation-auto border-gray-50 before:absolute before:w-full before:transition-all before:duration-700 before:hover:w-full before:-left-full before:hover:left-0 before:rounded-full before:bg-emerald-500 hover:text-gray-50 before:-z-10 before:aspect-square before:hover:scale-150 before:hover:duration-700 relative z-10 px-4 py-2 overflow-hidden border-2 rounded-full group'
                        onClick={() => window.location.href = 'https://w.app/0wj9vU'}>
                    Comece Já
                </button>
            </div>
           
        </div>
    )
       
}

export default Home