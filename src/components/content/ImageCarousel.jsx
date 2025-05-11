import React, { useState, useRef, useEffect } from 'react';
import { useTranslation } from "react-i18next";
import data from '/data.json';

const ImageCarousel = () => {
  const { t } = useTranslation();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const carouselRef = useRef(null);

  const projetos = data.Projetos.map(projeto => ({
    name: projeto.empresa,
    image: projeto.imagem,
    link: projeto.link
  }));

  const prevSlide = () => {
    const newIndex = currentImageIndex === 0 ? projetos.length - 1 : currentImageIndex - 1;
    setCurrentImageIndex(newIndex);
    const carousel = carouselRef.current;
    const imageWidth = carousel.scrollWidth / projetos.length;
    carousel.scrollLeft = newIndex * imageWidth;
  };

  const nextSlide = () => {
    const newIndex = currentImageIndex === projetos.length - 1 ? 0 : currentImageIndex + 1;
    setCurrentImageIndex(newIndex);
    const carousel = carouselRef.current;
    const imageWidth = carousel.scrollWidth / projetos.length;
    carousel.scrollLeft = newIndex * imageWidth;
  };

  const handleMouseDown = (e) => {
    setIsDragging(true);
    setStartX(e.pageX - carouselRef.current.offsetLeft);
    setScrollLeft(carouselRef.current.scrollLeft);
  };

  const handleMouseLeave = () => {
    setIsDragging(false);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - carouselRef.current.offsetLeft;
    const walk = (x - startX) * 2; // scroll-fast
    carouselRef.current.scrollLeft = scrollLeft - walk;
  };

  return (
    <div className="relative flex flex-col bg-gray-dark m-auto p-auto ">
      <div
        className="flex overflow-x-scroll pb-20 pt-20 hide-scroll-bar no-select"
        ref={carouselRef}
        onMouseDown={handleMouseDown}
        onMouseLeave={handleMouseLeave}
        onMouseUp={handleMouseUp}
        onMouseMove={handleMouseMove}
        style={{ cursor: 'default', overflowX: 'hidden' }}
      >
        <div className="flex flex-nowrap lg:ml-40 md:ml-20 ml-10 ">
          {projetos.map((projeto, index) => (
            <div className="inline-block px-3 relative" key={index}>
              <div
                className={`w-64 h-96 max-w-xs overflow-hidden rounded-lg shadow-md bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out ${
                  index === currentImageIndex ? 'border-4 border-blue-500' : ''
                }`}
              >
                <img src={projeto.image} alt={projeto.name} className="w-full h-full object-cover" />
                <div className="absolute top-0 left-0 right-0 bottom-0 flex flex-col justify-center items-center text-3xl font-bold">
                  <div className="text-white text-shadow shadow-gray-950">{projeto.name}</div>
                </div>
                <div className="absolute left-0 right-0 bottom-5 flex flex-col justify-center items-center">
                  <a href={projeto.link} target="_blank" rel="noopener noreferrer">
                    <button className="text-white bg-custom-color hover:bg-gray-700 font-bold py-2 px-8 rounded-lg">
                      {t('gallery.seeSite')}
                    </button>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <button
        type="button"
        className="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
        onClick={prevSlide}
        data-carousel-prev
      >
        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
          <svg
            className="w-4 h-4 text-gray-dark dark:text-gray-800 rtl:rotate-180"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 6 10"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M5 1 1 5l4 4"
            />
          </svg>
          <span className="sr-only">Previous</span>
        </span>
      </button>
      <button
        type="button"
        className="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
        onClick={nextSlide}
        data-carousel-next
      >
        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
          <svg
            className="w-4 h-4 text-gray-dark dark:text-gray-800 rtl:rotate-180"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 6 10"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m1 9 4-4-4-4"
            />
          </svg>
          <span className="sr-only">Next</span>
        </span>
      </button>
    </div>
  );
};

export default ImageCarousel;
