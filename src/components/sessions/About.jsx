import React from 'react';
import data from '/data.json';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { FaLinkedinIn, FaGithub } from 'react-icons/fa';

const iconMap = {
  linkedin: FaLinkedinIn,
  github: FaGithub,
};

const About = () => {
  const { t } = useTranslation();
  const { dadosTime } = data;

  return (
    <section id="about" className="bg-black text-white pt-24 pb-16">
      <div className="container mx-auto px-6 text-center">
        <h1 className="text-4xl sm:text-5xl font-bold">{t('aboutUs.title')}</h1>
        <div className="flex justify-center mt-4 mb-6">
          <span className="w-40 h-1 bg-blue-500 rounded-full"></span>
          <span className="w-3 h-1 mx-1 bg-blue-500 rounded-full"></span>
          <span className="w-1 h-1 bg-blue-500 rounded-full"></span>
        </div>
        <p className="max-w-2xl mx-auto text-gray-300 text-lg">{t('aboutUs.description')}</p>
      </div>

      <div className="container mx-auto px-4 sm:px-8 lg:px-16 xl:px-32 py-12 mt-10">
        <div className="flex flex-col lg:flex-row justify-center gap-16 lg:gap-24">
          {dadosTime.map(({ key, nome, foto, redes_sociais }, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative group flex flex-col items-center text-center w-full lg:w-1/3"
            >
              <div className="w-48 h-48 sm:w-64 sm:h-64 rounded-full overflow-hidden mb-8 border border-white/5 group-hover:border-brand-secondary/30 group-hover:shadow-[0_0_30px_rgba(139,92,246,0.15)] transition-all duration-500">
                <img
                  src={foto}
                  alt={nome}
                  className="w-full h-full object-cover grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700 ease-out"
                />
              </div>
              
              <h3 className="text-3xl font-display font-medium text-white mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-brand-secondary transition-all duration-300">{nome}</h3>
              <p className="text-gray-500 font-light text-sm tracking-[0.2em] uppercase mb-6">{t(`aboutUs.functionTeam.${key}`)}</p>

              <div className="flex space-x-6 opacity-0 group-hover:opacity-100 -translate-y-2 group-hover:translate-y-0 transition-all duration-500">
                {redes_sociais.map((rede, i) => {
                  const Icon = iconMap[rede.nome.toLowerCase()];
                  if (!Icon) return null;

                  return (
                    <a
                      key={i}
                      href={rede.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-600 hover:text-white transition duration-300 hover:scale-125"
                      aria-label={rede.nome}
                    >
                      <Icon className="w-6 h-6" />
                    </a>
                  );
                })}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="mt-12">
        <hr className="h-px bg-gray-700 border-0" />
      </div>
    </section>
  );
};

export default About;