import React from 'react';
import ModalServ from '../content/ModalServ';
import ModalForm from '../content/ModalForm';
import data from '/data.json';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

export const Servicos = () => {
  const { t } = useTranslation();

  return (
    <section id="servicos" className="bg-black text-white py-24 px-6">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-4xl sm:text-5xl font-bold">{t('services.title')}</h2>
        <p className="mt-6 text-gray-300 text-lg">
          {t('services.descriptionPart1')}
          <br />
          {t('services.descriptionPart2')}
        </p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto mt-16">
        {data.Servicos.map((servico, index) => {
          const key = servico.key;
          const titulo = t(`services.items.${key}.type`);
          const resumopart1 = t(`services.items.${key}.abstractPart1`);
          const resumopart2 = t(`services.items.${key}.abstractPart2`);

          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-gray-900 p-6 rounded-xl hover:shadow-lg hover:shadow-violet-500/20 transition-transform hover:scale-105"
            >
              <div
                className="text-violet-500 bg-violet-500/10 p-4 rounded-full inline-block mb-4"
                dangerouslySetInnerHTML={{ __html: servico.icone }}
              />
              <h3 className="text-xl font-semibold">{titulo}</h3>
              <p className="mt-2 text-gray-400">
                <strong>{resumopart1}</strong> {resumopart2}
              </p>
              <div className="mt-4">
                <ModalServ servico={servico} onClose={() => {}} />
              </div>
            </motion.div>
          );
        })}
      </div>

      <div className="mt-16 text-center">
        <ModalForm onClose={() => {}} />
      </div>
    </section>
  );
};