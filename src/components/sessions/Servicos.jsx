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
        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold mb-6 tracking-tight">
          <span className="text-gradient">{t('services.title')}</span>
        </h2>
        <p className="mt-6 text-gray-400 text-lg md:text-xl font-light">
          {t('services.descriptionPart1')}
          <br />
          {t('services.descriptionPart2')}
        </p>
      </div>

      <div className="flex flex-col w-full max-w-6xl mx-auto mt-20">
        <div className="border-t border-white/10" />
        {data.Servicos.map((servico, index) => {
          const key = servico.key;
          const titulo = t(`services.items.${key}.type`);
          const resumopart1 = t(`services.items.${key}.abstractPart1`);
          const resumopart2 = t(`services.items.${key}.abstractPart2`);

          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              viewport={{ once: true }}
              className="group relative flex flex-col lg:flex-row lg:items-center justify-between py-10 md:py-14 border-b border-white/10 hover:bg-white/[0.02] transition-colors duration-500 px-4 md:px-8 cursor-pointer overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-brand-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

              <div className="relative z-10 flex flex-col md:flex-row md:items-center lg:w-5/12 mb-6 lg:mb-0">
                <span className="text-gray-600 font-display text-xl md:text-2xl mr-8 font-light hidden md:block">0{index + 1}</span>
                <h3 className="text-4xl md:text-5xl lg:text-5xl font-display font-medium text-white group-hover:text-brand-accent transition-colors duration-500">
                  {titulo}
                </h3>
              </div>

              <div className="relative z-10 lg:w-6/12 flex items-start gap-6 md:gap-8">
                <div
                  className="text-gray-500 group-hover:text-brand-accent transition-colors duration-500 mt-2 shrink-0 [&>svg]:w-8 [&>svg]:h-8"
                  dangerouslySetInnerHTML={{ __html: servico.icone }}
                />
                <div className="flex flex-col">
                  <p className="text-gray-400 font-light text-lg md:text-xl leading-relaxed">
                    <strong className="text-gray-200 font-normal">{resumopart1}</strong> {resumopart2}
                  </p>
                  <div className="mt-6 md:mt-8 opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-500 h-0 group-hover:h-auto overflow-hidden">
                    <ModalServ servico={servico} onClose={() => {}} />
                  </div>
                </div>
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