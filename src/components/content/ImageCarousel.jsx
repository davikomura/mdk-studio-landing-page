import React, { useState, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import data from '/data.json';
import { useDraggableScroll } from '../../hooks/useDraggableScroll';

const ImageCarousel = () => {
  const { t } = useTranslation();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const carouselRef = useRef(null);
  useDraggableScroll(carouselRef);

  const projetos = data.Projetos.map(projeto => ({
    name: projeto.empresa,
    image: projeto.imagem,
    link: projeto.link
  }));

  const scrollToIndex = (index) => {
    const carousel = carouselRef.current;
    const imageWidth = carousel.scrollWidth / projetos.length;
    carousel.scrollTo({ left: index * imageWidth, behavior: 'smooth' });
  };

  const prevSlide = () => {
    const newIndex = currentImageIndex === 0 ? projetos.length - 1 : currentImageIndex - 1;
    setCurrentImageIndex(newIndex);
    scrollToIndex(newIndex);
  };

  const nextSlide = () => {
    const newIndex = currentImageIndex === projetos.length - 1 ? 0 : currentImageIndex + 1;
    setCurrentImageIndex(newIndex);
    scrollToIndex(newIndex);
  };

  return (
    <section id="projetos" className="relative bg-black py-20 px-4">
      <div className="relative overflow-hidden">
        <div
          ref={carouselRef}
          className="flex gap-6 overflow-x-scroll scrollbar-hide px-6 sm:px-16 transition-all duration-500 scroll-smooth snap-x select-none cursor-grab"
        >
          {projetos.map((projeto, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="snap-center flex-shrink-0 w-72 h-[400px] relative rounded-3xl overflow-hidden shadow-2xl bg-gray-900 border border-gray-700"
            >
              <img
                src={projeto.image}
                alt={projeto.name}
                className="w-full h-full object-cover object-center transition-transform duration-500 hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent z-10" />
              <div className="absolute bottom-6 left-0 w-full text-center px-4 z-20">
                <h3 className="text-white text-xl font-semibold mb-2 drop-shadow-md">
                  {projeto.name}
                </h3>
                <a
                  href={projeto.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block text-sm text-white bg-blue-600 hover:bg-blue-500 px-4 py-2 rounded-full shadow-lg transition"
                >
                  {t('gallery.seeSite')}
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        <button
          className="absolute top-1/2 left-4 -translate-y-1/2 bg-gray-800/70 hover:bg-gray-700 p-3 rounded-full shadow-lg z-20 transition"
          onClick={prevSlide}
          aria-label="Anterior"
        >
          <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        <button
          className="absolute top-1/2 right-4 -translate-y-1/2 bg-gray-800/70 hover:bg-gray-700 p-3 rounded-full shadow-lg z-20 transition"
          onClick={nextSlide}
          aria-label="Próximo"
        >
          <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>

      <style>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </section>
  );
};

export default ImageCarousel;
