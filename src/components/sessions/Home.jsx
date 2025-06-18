import React from 'react';
import { motion } from 'framer-motion';
import homeImg from '../../assets/img1.jpg';
import { useTranslation } from 'react-i18next';

const Home = () => {
  const { t } = useTranslation();

  return (
    <div
      id="home"
      className="relative inset-0 bg-cover bg-center h-screen"
      style={{ backgroundImage: `url(${homeImg})` }}
    >
      <div className="absolute w-full h-full bg-black opacity-50" />
      <div className="relative flex z-10 flex-col justify-center items-center h-screen px-4 text-center">

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="text-white text-4xl font-bold mb-4 lg:text-5xl"
        >
          {t('home.headlinePart1')} <br />
          {t('home.headlinePart2')}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="text-white text-2xl mb-24"
        >
          {t('home.subheadline')}
        </motion.p>

        <motion.button
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.6, type: 'spring' }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className='flex text-xl justify-center gap-2 items-center mx-auto shadow-xl text-lg bg-gray-50 backdrop-blur-md lg:font-semibold isolation-auto border-gray-50 before:absolute before:w-full before:transition-all before:duration-700 before:hover:w-full before:-left-full before:hover:left-0 before:rounded-full before:bg-emerald-500 hover:text-gray-50 before:-z-10 before:aspect-square before:hover:scale-150 before:hover:duration-700 relative z-10 px-4 py-2 overflow-hidden border-2 rounded-full group'
          onClick={() => window.location.href = 'https://api.whatsapp.com/send?phone=5598981600041'}
        >
          {t('home.button')}
        </motion.button>

      </div>
    </div>
  );
};

export default Home;