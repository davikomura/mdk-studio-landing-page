import { useTranslation } from 'react-i18next';
import { FaInstagram, FaLinkedinIn, FaGithub } from 'react-icons/fa';

const Formulario = () => {
  const { t } = useTranslation();

  return (
    <section className="bg-black text-white py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-blue-500 text-sm uppercase tracking-widest font-semibold">
            {t('form.contactUs')}
          </p>
          <h1 className="text-4xl md:text-5xl font-bold mt-2 mb-4">
            {t('form.title')}
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            {t('form.description')}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 mb-20">
          <div className="bg-gray-900 p-8 rounded-2xl shadow-lg hover:shadow-blue-500/20 transition">
            <div className="flex items-center space-x-4 mb-4">
              <div className="bg-blue-600 p-3 rounded-full">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                </svg>
              </div>
              <h2 className="text-xl font-semibold">{t('form.email.title')}</h2>
            </div>
            <p className="text-gray-400 mb-2">{t('form.email.text')}</p>
            <a href="mailto:mdkstudioslz@gmail.com" className="text-blue-400 hover:underline break-all">
              {t('form.email.address')}
            </a>
          </div>

          <div className="bg-gray-900 p-8 rounded-2xl shadow-lg hover:shadow-blue-500/20 transition">
            <div className="flex items-center space-x-4 mb-4">
              <div className="bg-blue-600 p-3 rounded-full">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                </svg>
              </div>
              <h2 className="text-xl font-semibold">{t('form.phone.title')}</h2>
            </div>
            <p className="text-gray-400 mb-2">{t('form.phone.text')}</p>
            <a href="tel:+55-98-98103-8642" className="text-blue-400 hover:underline">
              {t('form.phone.number')}
            </a>
          </div>
        </div>

        <div className="text-center">
          <p className="text-gray-400 text-lg mb-4">{t('form.followUs') || 'Siga-nos nas redes sociais:'}</p>
          <div className="flex justify-center space-x-6 text-xl">
            <a href="https://www.instagram.com/mdkstudioslz/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-pink-500 transition-transform hover:scale-110">
              <FaInstagram />
            </a>
            <a href="https://www.linkedin.com/company/mdk-studioslz/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-300 transition-transform hover:scale-110">
              <FaLinkedinIn />
            </a>
            <a href="https://github.com/mdkstudioslz" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-transform hover:scale-110">
              <FaGithub />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Formulario;