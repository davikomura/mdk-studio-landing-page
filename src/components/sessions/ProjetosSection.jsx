import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import data from '/data.json';

const ProjetosSection = () => {
  const { t } = useTranslation();

  const projetos = data.Projetos.map(projeto => ({
    name: projeto.empresa,
    image: projeto.imagem,
    link: projeto.link,
  }));

  return (
    <section id="projects" className="bg-black py-24 px-6 sm:px-12">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl sm:text-5xl font-bold text-white mb-16"
        >
          {t('gallery.title')}
        </motion.h2>

        <div className="flex flex-wrap justify-center gap-10">
          {projetos.map((projeto, index) => (
            <motion.a
              key={index}
              href={projeto.link || '#'}
              target={projeto.link ? '_blank' : '_self'}
              rel="noopener noreferrer"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="transition-transform duration-300"
            >
              <img
                src={projeto.image}
                alt={projeto.name}
                className="h-28 sm:h-32 object-contain grayscale hover:grayscale-0 transition duration-300"
              />
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjetosSection;