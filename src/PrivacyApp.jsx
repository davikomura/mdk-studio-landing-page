import PrivacyHeader from './components/common/PrivacyHeader';
import PrivacyPolicy from './components/sessions/PrivacyPolicy';
import Footer from './components/common/Footer';
import { Helmet } from 'react-helmet-async';

const PrivacyApp = () => {
  return (
    <>
      <Helmet>
        <html lang="pt-BR" />
        <title>Política de Privacidade — Enigma Case | MDK Studio</title>
        <meta
          name="description"
          content="Leia a política de privacidade do Enigma Case, desenvolvido pela MDK Studios. Entenda como seus dados são tratados no aplicativo disponível na Google Play Store."
        />
        <meta name="robots" content="index, follow" />
      </Helmet>
      <PrivacyHeader />
      <PrivacyPolicy />
      <Footer />
    </>
  );
};

export default PrivacyApp;
