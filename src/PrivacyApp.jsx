import PrivacyHeader from './components/common/PrivacyHeader';
import PrivacyPolicy from './components/sessions/PrivacyPolicy';
import Footer from './components/common/Footer';
import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';
import { useNavigatorLanguage } from './hooks/useNavigatorLanguage';

const PrivacyApp = () => {
  useNavigatorLanguage();
  const { t, i18n } = useTranslation();

  const currentLang = i18n.language ? i18n.language.substring(0, 2).toLowerCase() : 'pt';
  const htmlLang = currentLang === 'pt' ? 'pt-BR' : currentLang;

  return (
    <>
      <Helmet>
        <html lang={htmlLang} />
        <title>{t('privacy.pageTitle')}</title>
        <meta name="description" content={t('privacy.metaDescription')} />
        <meta name="robots" content="index, follow" />
      </Helmet>
      <PrivacyHeader />
      <PrivacyPolicy />
      <Footer />
    </>
  );
};

export default PrivacyApp;
