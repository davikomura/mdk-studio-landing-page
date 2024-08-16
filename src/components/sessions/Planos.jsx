// import React from 'react'
// // import fundo from '../../assets/fundo.png'
// import marmore from '../../assets/marmore.png'
// import check from '../../assets/check.svg'

// export const Planos = () => {
//   return (
//     <div id="planos" className="bg-fundo-planos w-full h-screen inset-0 bg-cover bg-center object-cover object-center">
      
//       <div className="z-10">
//         <div className="flex flex-col justify-center items-center h-screen pt-20">
//           <p className="text-white text-center text-5xl font-bold mb-3">
//             Planos
//           </p>
//           <div className="flex flex-wrap justify-center items-center gap-4 p-4 mb-15">
//             <div className="">
//               <div className='bg-color-plan w-72 h-128 rounded-md font-bold relative'>
//                 <img src={marmore} alt="Background Image" className=" rounded-md object-cover object-center w-full h-full opacity-30" />
//                 <div className='text-white ml-6 pt-3 absolute top-0 left-0 bg-opacity-75'>BÁSICO</div>
//                 <div className='text-white ml-6 pt-20 absolute top-0 left-0 bg-opacity-75'>Benefício 1</div>
//                 <div className='text-white ml-6 pt-32 absolute top-0 left-0 bg-opacity-75'>
//                   <div className="flex items-center mb-2">
//                     <img src={check} className="mr-2 w-4 h-4" alt="Check Icon" />
//                     <p className="text-sm">Design simples e limpo.</p>
//                   </div>
//                   <div className="flex items-center mb-2">
//                     <img src={check} className="mr-2 w-4 h-4" alt="Check Icon" />
//                     <p className="text-sm">Até 5 páginas estáticas.</p>
//                   </div>
//                   <div className="flex items-center mb-2">
//                     <img src={check} className="mr-2 w-4 h-4" alt="Check Icon" />
//                     <p className="text-sm">Formulário de contato básico.</p>
//                   </div>
//                   <div className="flex items-center mb-2">
//                     <img src={check} className="mr-2 w-4 h-4" alt="Check Icon" />
//                     <p className="text-sm">Integração com redes sociais.</p>
//                   </div>
//                 </div>
//                 <div className='absolute bottom-6 left-0 w-full flex justify-center'>
//                   <button className='bg-white text-black rounded-2xl px-3 py-1'>Começar agora</button>
//                 </div>
//               </div>
//             </div>
//             <div className="ml-2">
//               <div className='bg-color-plan w-72 h-128 rounded-md font-bold relative'>
//                 <img src={marmore} alt="Background Image" className=" rounded-md object-cover object-center w-full h-full opacity-30" />
//                 <div className='text-white ml-6 pt-3 absolute top-0 left-0 bg-opacity-75'>INTERMEDIÁRIO</div>
//                 <div className='text-white ml-6 pt-20 absolute top-0 left-0 bg-opacity-75'>Benefício 1</div>
//                 <div className='text-white ml-6 pt-32 absolute top-0 left-0 bg-opacity-75'>
//                   <div className="flex items-center mb-2">
//                     <img src={check} className="mr-2 w-4 h-4" alt="Check Icon" />
//                     <p className="text-sm">Design mais elaborado.</p>
//                   </div>
//                   <div className="flex items-center mb-2">
//                     <img src={check} className="mr-2 w-4 h-4" alt="Check Icon" />
//                     <p className="text-sm">Até 10 páginas, incluindo blog.</p>
//                   </div>
//                   <div className="flex items-center mb-2">
//                     <img src={check} className="mr-2 w-4 h-4" alt="Check Icon" />
//                     <p className="text-sm">Integração avançada com redes sociais.</p>
//                   </div>
//                   <div className="flex items-center mb-2">
//                     <img src={check} className="mr-2 w-4 h-4" alt="Check Icon" />
//                     <p className="text-sm">Integração com Google Analytics.</p>
//                   </div>
//                   <div className="flex items-center mb-2">
//                     <img src={check} className="mr-2 w-4 h-4" alt="Check Icon" />
//                     <p className="text-sm">Suporte técnico.</p>
//                   </div>
//                 </div>
//                 <div className='absolute bottom-6 left-0 w-full flex justify-center'>
//                   <button className='bg-white text-black rounded-2xl px-3 py-1'>Começar agora</button>
//                 </div>
//               </div>
//             </div>
//             <div className="ml-2.5">
//               <div className='bg-color-plan w-72 h-128 rounded-md font-bold relative'>
//                 <img src={marmore} alt="Background Image" className="rounded-md object-cover object-center w-full h-full opacity-30" />
//                 <div className='text-white ml-6 pt-3 absolute top-0 left-0 bg-opacity-75'>PREMIUM</div>
//                 <div className='text-white ml-6 pt-20 absolute top-0 left-0 bg-opacity-75'>Benefício 1</div>
//                 <div className='text-white ml-6 pt-32 absolute top-0 left-0 bg-opacity-75'>
//                   <div className="flex items-center mb-2">
//                     <img src={check} className="mr-2 w-4 h-4" alt="Check Icon" />
//                     <p className="text-sm">Design altamente personalizado.</p>
//                   </div>
//                   <div className="flex items-center mb-2">
//                     <img src={check} className="mr-2 w-4 h-4" alt="Check Icon" />
//                     <p className="text-sm">Funcionalidades avançadas (e-commerce, sistema de reservas, etc.).</p>
//                   </div>
//                   <div className="flex items-center mb-2">
//                     <img src={check} className="mr-2 w-4 h-4" alt="Check Icon" />
//                     <p className="text-sm">Segurança avançada.</p>
//                   </div>
//                   <div className="flex items-center mb-2">
//                     <img src={check} className="mr-2 w-4 h-4" alt="Check Icon" />
//                     <p className="text-sm">Suporte técnico prioritário.</p>
//                   </div>
//                   <div className="flex items-center mb-2">
//                     <p className="text-sm underline">E muito mais...</p>
//                   </div>
//                 </div>
//                 <div className='absolute bottom-6 left-0 w-full flex justify-center'>
//                   <button className='bg-white text-black rounded-2xl px-3 py-1'>Começar agora</button>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }


import React from 'react'
// import fundo from '../../assets/fundo.png'
import marmore from '../../assets/marmore.png'
import check from '../../assets/check.svg'

export const Planos = () => {
  return (
    <div id="planos" className="bg-custom-color w-full min-h-screen inset-0">
      <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8 pt-24">
        <div className="mb-12">
          <p className="text-white text-center text-3xl sm:text-4xl md:text-5xl font-bold mb-3">Planos</p>
          <div className="flex justify-center items-center">
            <label className="min-w-[3.5rem] text-lg sm:text-xl relative text-white mr-2 sm:mr-4 font-medium">Bill Monthly</label>
            <input
              type="checkbox"
              id="basic-with-description"
              className="relative shrink-0 w-9 sm:w-11 h-5 sm:h-6 p-0.5 bg-indigo-100 checked:bg-none checked:bg-indigo-100 rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:border-blue-600 appearance-none 
                      before:inline-block before:w-4 sm:before:w-5 before:h-4 sm:before:h-5 before:bg-indigo-600 checked:before:bg-indigo-600 before:translate-x-0 checked:before:translate-x-full before:shadow before:rounded-full before:transform before:transition before:ease-in-out before:duration-200">
            </input>
            <label className="relative min-w-[3.5rem] font-medium text-lg sm:text-xl text-white ml-2 sm:ml-4">
              Bill Yearly
            </label>
          </div>
        </div>

        {/* Grid */}
        <div className="space-y-8 lg:space-y-0 lg:grid lg:grid-cols-3 sm:gap-6 xl:gap-8 lg:items-center">
          {/* Pricing Card */}
          <div className="flex flex-col mx-auto max-w-sm text-gray-900 rounded-2xl bg-gray-50 p-6 md:py-9 md:px-12 transition-all duration-500 hover:bg-gray-100">
            <h3 className="font-manrope text-2xl font-bold mb-3">Free</h3>
            <div className="flex items-center mb-6">
              <span className="font-manrope mr-2 text-4xl sm:text-5xl md:text-6xl font-semibold">$0</span>
              <span className="text-lg sm:text-xl text-gray-500">/ month</span>
            </div>
            {/* List */}
            <ul className="mb-12 space-y-6 text-left text-base sm:text-lg text-gray-500">
              <li className="flex items-center space-x-4">
                <svg
                  className="flex-shrink-0 w-5 sm:w-6 h-5 sm:h-6 text-indigo-600"
                  viewBox="0 0 30 30"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10 14.7875L13.0959 17.8834C13.3399 18.1274 13.7353 18.1275 13.9794 17.8838L20.625 11.25M15 27.5C8.09644 27.5 2.5 21.9036 2.5 15C2.5 8.09644 8.09644 2.5 15 2.5C21.9036 2.5 27.5 8.09644 27.5 15C27.5 21.9036 21.9036 27.5 15 27.5Z"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <span>2 auto tracking</span>
              </li>
              <li className="flex items-center space-x-4">
                <svg
                  className="flex-shrink-0 w-5 sm:w-6 h-5 sm:h-6 text-indigo-600"
                  viewBox="0 0 30 30"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10 14.7875L13.0959 17.8834C13.3399 18.1274 13.7353 18.1275 13.9794 17.8838L20.625 11.25M15 27.5C8.09644 27.5 2.5 21.9036 2.5 15C2.5 8.09644 8.09644 2.5 15 2.5C21.9036 2.5 27.5 8.09644 27.5 15C27.5 21.9036 21.9036 27.5 15 27.5Z"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <span>7 Day transaction clearing</span>
              </li>
              <li className="flex items-center space-x-4">
                <svg
                  className="flex-shrink-0 w-5 sm:w-6 h-5 sm:h-6 text-indigo-600"
                  viewBox="0 0 30 30"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10 14.7875L13.0959 17.8834C13.3399 18.1274 13.7353 18.1275 13.9794 17.8838L20.625 11.25M15 27.5C8.09644 27.5 2.5 21.9036 2.5 15C2.5 8.09644 8.09644 2.5 15 2.5C21.9036 2.5 27.5 8.09644 27.5 15C27.5 21.9036 21.9036 27.5 15 27.5Z"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <span>24/7 Customer support</span>
              </li>
              <li className="flex items-center space-x-4">
                <svg
                  className="flex-shrink-0 w-5 sm:w-6 h-5 sm:h-6 text-indigo-600"
                  viewBox="0 0 30 30"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10 14.7875L13.0959 17.8834C13.3399 18.1274 13.7353 18.1275 13.9794 17.8838L20.625 11.25M15 27.5C8.09644 27.5 2.5 21.9036 2.5 15C2.5 8.09644 8.09644 2.5 15 2.5C21.9036 2.5 27.5 8.09644 27.5 15C27.5 21.9036 21.9036 27.5 15 27.5Z"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <span>All widget access</span>
              </li>
            </ul>
            <a
              href="javascript:;"
              className="py-2.5 px-5 bg-indigo-600 shadow-sm rounded-full transition-all duration-500 text-sm sm:text-base text-white font-semibold text-center w-fit mx-auto hover:bg-indigo-700"
            >
              Purchase Plan
            </a>
          </div>

          {/* Pricing Card */}
          <div className="flex flex-col mx-auto max-w-sm text-gray-900 rounded-2xl bg-indigo-50 transition-all duration-500 hover:bg-indigo-100">
            <div className="uppercase bg-gradient-to-r from-indigo-600 to-violet-600 rounded-t-2xl p-3 text-center text-white text-sm sm:text-base">
              MOST POPULAR
            </div>
            <div className="p-6 md:py-9 md:px-12">
              <h3 className="font-manrope text-2xl font-bold mb-3">Advanced</h3>
              <div className="flex items-center mb-6">
                <span className="font-manrope mr-2 text-4xl sm:text-5xl md:text-6xl font-semibold">$99</span>
                <span className="text-lg sm:text-xl text-gray-500">/ month</span>
              </div>
              {/* List */}
              <ul className="mb-12 space-y-6 text-left text-base sm:text-lg text-gray-500">
                <li className="flex items-center space-x-4">
                  <svg
                    className="flex-shrink-0 w-5 sm:w-6 h-5 sm:h-6 text-indigo-600"
                    viewBox="0 0 30 30"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M10 14.7875L13.0959 17.8834C13.3399 18.1274 13.7353 18.1275 13.9794 17.8838L20.625 11.25M15 27.5C8.09644 27.5 2.5 21.9036 2.5 15C2.5 8.09644 8.09644 2.5 15 2.5C21.9036 2.5 27.5 8.09644 27.5 15C27.5 21.9036 21.9036 27.5 15 27.5Z"
                      stroke="currentColor"
                      strokeWidth="1.6"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <span>Unlimited auto tracking</span>
                </li>
                <li className="flex items-center space-x-4">
                  <svg
                    className="flex-shrink-0 w-5 sm:w-6 h-5 sm:h-6 text-indigo-600"
                    viewBox="0 0 30 30"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M10 14.7875L13.0959 17.8834C13.3399 18.1274 13.7353 18.1275 13.9794 17.8838L20.625 11.25M15 27.5C8.09644 27.5 2.5 21.9036 2.5 15C2.5 8.09644 8.09644 2.5 15 2.5C21.9036 2.5 27.5 8.09644 27.5 15C27.5 21.9036 21.9036 27.5 15 27.5Z"
                      stroke="currentColor"
                      strokeWidth="1.6"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <span>2 Day transaction clearing</span>
                </li>
                <li className="flex items-center space-x-4">
                  <svg
                    className="flex-shrink-0 w-5 sm:w-6 h-5 sm:h-6 text-indigo-600"
                    viewBox="0 0 30 30"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M10 14.7875L13.0959 17.8834C13.3399 18.1274 13.7353 18.1275 13.9794 17.8838L20.625 11.25M15 27.5C8.09644 27.5 2.5 21.9036 2.5 15C2.5 8.09644 8.09644 2.5 15 2.5C21.9036 2.5 27.5 8.09644 27.5 15C27.5 21.9036 21.9036 27.5 15 27.5Z"
                      stroke="currentColor"
                      strokeWidth="1.6"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <span>24/7 Customer support</span>
                </li>
                <li className="flex items-center space-x-4">
                  <svg
                    className="flex-shrink-0 w-5 sm:w-6 h-5 sm:h-6 text-indigo-600"
                    viewBox="0 0 30 30"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M10 14.7875L13.0959 17.8834C13.3399 18.1274 13.7353 18.1275 13.9794 17.8838L20.625 11.25M15 27.5C8.09644 27.5 2.5 21.9036 2.5 15C2.5 8.09644 8.09644 2.5 15 2.5C21.9036 2.5 27.5 8.09644 27.5 15C27.5 21.9036 21.9036 27.5 15 27.5Z"
                      stroke="currentColor"
                      strokeWidth="1.6"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <span>All widget access</span>
                </li>
              </ul>
              <a
                href="javascript:;"
                className="py-2.5 px-5 bg-indigo-600 shadow-sm rounded-full transition-all duration-500 text-sm sm:text-base text-white font-semibold text-center w-fit mx-auto hover:bg-indigo-700"
              >
                Purchase Plan
              </a>
            </div>
          </div>

          {/* Pricing Card */}
          <div className="flex flex-col mx-auto max-w-sm text-gray-900 rounded-2xl bg-gray-50 p-6 md:py-9 md:px-12 transition-all duration-500 hover:bg-gray-100">
            <h3 className="font-manrope text-2xl font-bold mb-3">Enterprise</h3>
            <div className="flex items-center mb-6">
              <span className="font-manrope mr-2 text-4xl sm:text-5xl md:text-6xl font-semibold">$150</span>
              <span className="text-lg sm:text-xl text-gray-500">/ month</span>
            </div>
            {/* List */}
            <ul className="mb-12 space-y-6 text-left text-base sm:text-lg text-gray-500">
              <li className="flex items-center space-x-4">
                <svg
                  className="flex-shrink-0 w-5 sm:w-6 h-5 sm:h-6 text-indigo-600"
                  viewBox="0 0 30 30"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10 14.7875L13.0959 17.8834C13.3399 18.1274 13.7353 18.1275 13.9794 17.8838L20.625 11.25M15 27.5C8.09644 27.5 2.5 21.9036 2.5 15C2.5 8.09644 8.09644 2.5 15 2.5C21.9036 2.5 27.5 8.09644 27.5 15C27.5 21.9036 21.9036 27.5 15 27.5Z"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <span>Custom auto tracking</span>
              </li>
              <li className="flex items-center space-x-4">
                <svg
                  className="flex-shrink-0 w-5 sm:w-6 h-5 sm:h-6 text-indigo-600"
                  viewBox="0 0 30 30"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10 14.7875L13.0959 17.8834C13.3399 18.1274 13.7353 18.1275 13.9794 17.8838L20.625 11.25M15 27.5C8.09644 27.5 2.5 21.9036 2.5 15C2.5 8.09644 8.09644 2.5 15 2.5C21.9036 2.5 27.5 8.09644 27.5 15C27.5 21.9036 21.9036 27.5 15 27.5Z"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <span>1 Day transaction clearing</span>
              </li>
              <li className="flex items-center space-x-4">
                <svg
                  className="flex-shrink-0 w-5 sm:w-6 h-5 sm:h-6 text-indigo-600"
                  viewBox="0 0 30 30"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10 14.7875L13.0959 17.8834C13.3399 18.1274 13.7353 18.1275 13.9794 17.8838L20.625 11.25M15 27.5C8.09644 27.5 2.5 21.9036 2.5 15C2.5 8.09644 8.09644 2.5 15 2.5C21.9036 2.5 27.5 8.09644 27.5 15C27.5 21.9036 21.9036 27.5 15 27.5Z"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <span>Priority 24/7 support</span>
              </li>
              <li className="flex items-center space-x-4">
                <svg
                  className="flex-shrink-0 w-5 sm:w-6 h-5 sm:h-6 text-indigo-600"
                  viewBox="0 0 30 30"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10 14.7875L13.0959 17.8834C13.3399 18.1274 13.7353 18.1275 13.9794 17.8838L20.625 11.25M15 27.5C8.09644 27.5 2.5 21.9036 2.5 15C2.5 8.09644 8.09644 2.5 15 2.5C21.9036 2.5 27.5 8.09644 27.5 15C27.5 21.9036 21.9036 27.5 15 27.5Z"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <span>Advanced widget access</span>
              </li>
            </ul>
            <a
              href="javascript:;"
              className="py-2.5 px-5 bg-indigo-600 shadow-sm rounded-full transition-all duration-500 text-sm sm:text-base text-white font-semibold text-center w-fit mx-auto hover:bg-indigo-700"
            >
              Purchase Plan
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}


