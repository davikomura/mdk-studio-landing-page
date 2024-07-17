import React from 'react'
import logo from '../../assets/image.png'
import { Link } from "react-router-dom";

const Header = () => {
    return(
       
        <header className='fixed top-0 left-0 right-0 flex  font-sans min-h-[70px] tracking-wide z-50'>
           <nav className="bg-gray-800 fixed top-0 left-0 right-0 shadow-md py-4 px-4 sm:px-10 bg-transparent max-lg:bg-[#202626]  max-lg:opacity-95">
                <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
                    <div className="relative flex h-16 items-center justify-between">
                        <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                            {/* Mobile menu button */}
                            <button type="button" className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white" aria-controls="mobile-menu" aria-expanded="false">
                            <span className="absolute -inset-0.5"></span>
                            <span className="sr-only">Open main menu</span>
                                {/* Icon when menu is closed.

                                Menu open: "hidden", Menu closed: "block" */}
                            <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                            </svg>
                                {/* Icon when menu is open.

                                Menu open: "block", Menu closed: "hidden" */}
                            <svg className="hidden h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                            </button>
                        </div>
                    <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                        <div className="flex flex-shrink-0 items-center">
                            <img className="h-12 w-auto" src={logo} alt="Logo MDK Studio"/>
                        </div>
                        <div className="hidden sm:ml-6 sm:block">
                        <div className="flex space-x-4">
                            {/* Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" */}
                            <Link to="/planos">
                                <a href="#" className="block rounded-md bg-white px-3 py-2 text-base font-medium text-gray-800" aria-current="page">Planos</a>
                            </Link>
                            <Link to="/">
                                <a href="#" className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white">Galeria</a>
                            </Link>
                            <Link to="/about">
                                <a href="#" className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white">Sobre Nós</a>
                            </Link>
                            <Link to="/FAQ">
                                <a href="#" className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white">FAQ</a>
                            </Link>
                        </div>
                        </div>
                    </div>
                    <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                        <button type="button" className="relative rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                            <span className="absolute -inset-1.5"></span>
                            <span className="sr-only">View notifications</span>
                            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0" />
                            </svg>
                        </button>
                    </div>
                    </div>
                </div>

                {/* Mobile menu, show/hide based on menu state. */}
                <div className="sm:hidden" id="mobile-menu">
                    <div className="space-y-1 px-2 pb-3 pt-2">
                        {/* Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" */}
                        <Link to="/planos">
                                <a href="#" className="block rounded-md bg-white-900 px-3 py-2 text-base font-medium text-white" aria-current="page">Planos</a>
                        </Link>
                        <Link to="/">
                            <a href="#" className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white">Galeria</a>
                        </Link>
                        <Link to="/about">
                            <a href="#" className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white">Sobre Nós</a>
                        </Link>
                        <Link to="/FAQ">
                            <a href="#" className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white">FAQ</a>
                        </Link>
                    </div>
                </div>
            </nav>
        </header>
        
    )
}

export default Header





{/* <div id="menu" className='hidden md:block max-lg:before:fixed max-lg:before:bg-black max-lg:before:opacity-50 max-lg:before:inset-0 max-lg:before:z-50'>
                  

<ul className='hidden w-full md:block md:w-auto lg:flex gap-x-5 max-lg:space-y-3 max-lg:fixed max-lg:bg-white max-lg:w-1/2 max-lg:min-w-[300px] max-lg:top-0 max-lg:left-0 max-lg:p-6 max-lg:h-full max-lg:shadow-md max-lg:overflow-auto z-50  justify-center'>
    <li className='mb-6 hidden max-lg:block'>
        <a href="javascript:void(0)"><img src="https://readymadeui.com/readymadeui.svg" alt="logo" className='w-36' /></a>
    </li>
    <li className='max-lg:border-b max-lg:py-3 px-3'>
        <Link to="/planos">
            <a href='javascript:void(0)' className='hover:text-[#007bff] text-white font-bold block text-xl'>Planos</a>
        </Link>
    </li>
    <li className='max-lg:border-b max-lg:py-3 px-3'>
        <a href='javascript:void(0)'
        className='hover:text-[#007bff] text-white font-bold block text-xl'>Galeria</a>
    </li>
    <li className='max-lg:border-b max-lg:py-3 px-3'>
        <Link to="/about">
            <a href='javascript:void(0)'
            className='hover:text-[#007bff] text-white font-bold block text-xl'>Sobre Nós</a>
        </Link>
    </li>
    <li className='max-lg:border-b max-lg:py-3 px-3'>
        <Link to="/FAQ">
            <a href='javascript:void(0)'
            className='hover:text-[#007bff] text-white font-bold block text-xl'>FAQ</a>
        </Link>
    </li>
</ul>
</div> */}