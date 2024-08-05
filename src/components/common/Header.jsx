import React, { useState } from 'react'
import logo from '../../assets/image.png'
import { Link } from "react-router-dom";

const Header = () => {

    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return(
       
        <header className='fixed top-0 left-0 right-0 flex  font-sans min-h-[70px] tracking-wide z-50'>
           <nav className="bg-gray-800 fixed top-0 left-0 right-0 shadow-md py-4 px-4 sm:px-10 bg-transparent max-lg:bg-[#202626]  max-lg:opacity-95">
                <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
                    <div className="relative flex h-16 items-center justify-between">
                        <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                            {/* Mobile menu button */}
                            <button type="button" onClick={toggleMenu} className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white" aria-controls="mobile-menu" aria-expanded="false">
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
                            <a href="#home">
                                <img className="h-12 w-auto" src={logo} alt="Logo MDK Studio"/>
                            </a>
                        </div>
                        <div className="hidden sm:ml-6 sm:block">
                        <div className="flex space-x-4">
                                <a href="#planos" className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white li-bar" aria-current="page">Planos</a>
                            
                           
                                <a href="#galeria" className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white li-bar">Galeria</a>
                            
                           
                                <a href="#about" className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white li-bar">Sobre Nós</a>
                           
                           
                                <a href="#FAQ" className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white li-bar">FAQ</a>
                         
                        </div>
                        </div>
                    </div>
                   
                    </div>
                </div>

                {/* Mobile menu, show/hide based on menu state. */}
                <div className={`sm:hidden ${menuOpen ? 'block' : 'hidden'}`}  id="mobile-menu">
                    <div className="space-y-1 px-2 pb-3 pt-2">
                        {/* Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" */}
                        <Link to="/planos">
                                <a href="#" className="block rounded-md bg-white-900 px-3 py-2 text-base font-medium text-white" aria-current="page">Planos</a>
                        </Link>
                        <Link to="/galeria">
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