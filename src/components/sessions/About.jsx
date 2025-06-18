import React from 'react';
import data from '/data.json';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { FaLinkedinIn, FaGithub, FaInstagram } from 'react-icons/fa';

const iconMap = {
  linkedin: FaLinkedinIn,
  github: FaGithub,
  instagram: FaInstagram,
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

      <div className="container mx-auto px-4 sm:px-8 lg:px-16 xl:px-32 py-12">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {dadosTime.map(({ key, nome, foto, redes_sociais }, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative group bg-gradient-to-br from-gray-900/80 via-gray-800/80 to-gray-900/80 backdrop-blur-xl rounded-2xl p-6 shadow-md hover:shadow-blue-500/20 transition-all overflow-hidden border border-gray-700"
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ type: 'spring', stiffness: 200 }}
                className="w-full rounded-xl overflow-hidden"
              >
                <img
                  src={foto}
                  alt={nome}
                  className="aspect-square object-cover w-full rounded-xl group-hover:brightness-110 transition duration-300"
                />
              </motion.div>
              <div className="mt-5 text-center">
                <h3 className="text-2xl font-semibold capitalize">{nome}</h3>
                <p className="text-blue-400 mt-1 text-sm tracking-wide uppercase">{t(`aboutUs.functionTeam.${key}`)}</p>
              </div>

              <div className="flex justify-center mt-4 space-x-4">
                {redes_sociais.map((rede, i) => {
                  const Icon = iconMap[rede.nome.toLowerCase()];
                  if (!Icon) return null;

                  return (
                    <motion.a
                      key={i}
                      href={rede.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.2 }}
                      transition={{ type: 'spring', stiffness: 300 }}
                      className="text-gray-400 hover:text-blue-400 text-xl transition duration-300"
                      aria-label={rede.nome}
                    >
                      <Icon />
                    </motion.a>
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