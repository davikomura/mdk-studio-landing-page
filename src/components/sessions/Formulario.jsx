import { useTranslation } from 'react-i18next';
import { FaInstagram, FaLinkedinIn, FaGithub } from 'react-icons/fa';

const Formulario = () => {
  const { t } = useTranslation();

  return (
    <section className="bg-black text-white py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 md:mb-20">
          <p className="text-brand-accent text-sm uppercase tracking-[0.2em] font-medium mb-3">
            {t('form.contactUs')}
          </p>
          <h1 className="text-3xl md:text-5xl font-display font-bold mb-4 tracking-tight text-white">
            {t('form.title')}
          </h1>
          <p className="text-gray-400 text-lg md:text-xl font-light max-w-2xl mx-auto">
            {t('form.description')}
          </p>
        </div>

        <div className="flex flex-col md:flex-row justify-center items-center md:items-start gap-12 md:gap-20 mb-20 relative">
          
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-white/5 -translate-x-1/2" />

          {/* Email Block */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left group w-full md:w-5/12">
            <h2 className="text-gray-500 font-display tracking-[0.2em] uppercase text-xs md:text-sm mb-3">{t('form.email.title')}</h2>
            <a href="mailto:contato@mdkstudio.com.br" className="text-2xl md:text-3xl font-display font-medium text-white group-hover:text-brand-accent transition-all duration-500 break-all">
              {t('form.email.address')}
            </a>
            <p className="text-gray-500 mt-3 font-light text-base">{t('form.email.text')}</p>
          </div>

          {/* Phone Block */}
          <div className="flex flex-col items-center md:items-end text-center md:text-right group w-full md:w-5/12">
            <h2 className="text-gray-500 font-display tracking-[0.2em] uppercase text-xs md:text-sm mb-3">{t('form.phone.title')}</h2>
            <a href="tel:+55-98-98103-8642" className="text-2xl md:text-3xl font-display font-medium text-white group-hover:text-brand-accent transition-all duration-500">
              {t('form.phone.number')}
            </a>
            <p className="text-gray-500 mt-3 font-light text-base">{t('form.phone.text')}</p>
          </div>
        </div>

        <div className="text-center">
          <p className="text-gray-600 tracking-[0.2em] text-sm uppercase mb-8">{t('form.followUs') || 'Siga-nos'}</p>
          <div className="flex justify-center space-x-8 text-2xl">
            <a href="https://www.instagram.com/mdkstudioslz/" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-white transition-all hover:scale-125 duration-300">
              <FaInstagram />
            </a>
            <a href="https://www.linkedin.com/company/mdk-studioslz/" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-white transition-all hover:scale-125 duration-300">
              <FaLinkedinIn />
            </a>
            <a href="https://github.com/mdkstudioslz" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-white transition-all hover:scale-125 duration-300">
              <FaGithub />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Formulario;