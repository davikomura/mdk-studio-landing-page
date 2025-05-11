import React, { useState } from "react";
import logo from "../../assets/image.png";
import { LanguageDropdown } from "../content/LanguageDropdown";
import { useTranslation } from 'react-i18next';

const Header = () => {
    const { t } = useTranslation();

    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <header className="fixed top-0 left-0 right-0 flex  font-sans min-h-[70px] tracking-wide z-50">
            <nav className="bg-gray-800 fixed top-0 left-0 right-0 shadow-md py-4 px-4 sm:px-10 bg-transparent max-lg:bg-[#202626]  max-lg: backdrop-blur-sm bg-black/10">
                <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
                    <div className="relative flex h-16 items-center justify-between">
                        <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                            <button type="button" onClick={toggleMenu} className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white" aria-controls="mobile-menu" aria-expanded="false">
                                <span className="absolute -inset-0.5"></span>
                                <span className="sr-only">Open main menu</span>
                                <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"/>
                                </svg>
                                <svg 
                                className="hidden h-6 w-6"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth="1.5"
                                stroke="currentColor"
                                aria-hidden="true">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12"/>
                                </svg>
                            </button>
                        </div>
                        <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                            <div className="flex flex-shrink-0 items-center">
                                <a href="#home">
                                    <img className="h-12 w-auto" src={logo} alt="Logo MDK Studio" />
                                </a>
                            </div>
                            <div className="hidden sm:ml-6 sm:block">
                                <div className="flex space-x-4">
                                    <a href="#servicos" className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white li-bar" aria-current="page">{t('header.services')}</a>
                                    <a href="#galeria" className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white li-bar">{t('header.gallery')}</a>
                                    <a href="#about" className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white li-bar">{t('header.about')}</a>
                                    <a href="#FAQ" className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white li-bar">{t('header.faq')}</a>
                                </div>
                            </div>
                            <div className="absolute right-0">
                                <LanguageDropdown/>
                            </div>

                        </div>
                    </div>
                </div>

                {/* Mobile menu, show/hide based on menu state. */}
                <div
                className={`sm:hidden ${menuOpen ? "block" : "hidden"}`}
                id="mobile-menu"
                >
                    <div className="space-y-1 px-2 pb-3 pt-2">
                        {/* Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" */}
                        <a
                        href="#servicos"
                        className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
                        aria-current="page"
                        >
                        {t('header.services')}
                        </a>
                        <a
                        href="#galeria"
                        className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
                        >
                        {t('header.gallery')}
                        </a>
                        <a
                        href="#about"
                        className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
                        >
                        {t('header.about')}
                        </a>
                        <a
                        href="#FAQ"
                        className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
                        >
                        {t('header.faq')}
                        </a>
                    </div>
                </div>
            </nav>
        </header>
    );
};

export default Header;
