import Header from './components/common/Header'
import Footer from './components/common/Footer'
import Home from './components/sessions/Home';
import About from './components/sessions/About';
import Faq from './components/sessions/Faq';
import Formulario from './components/sessions/Formulario';
import { Servicos } from './components/sessions/Servicos';
import { useNavigatorLanguage } from "./hooks/useNavigatorLanguage";
import ProjetosSection from './components/sessions/ProjetosSection';
import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';

const seoData = {
  pt: {
    title: "MDK Studio | Criação de Sites e Sistemas Web",
    description: "A MDK Studio é especializada no desenvolvimento de sites, sistemas sob medida e UX/UI Design. Transforme a presença digital da sua empresa hoje mesmo."
  },
  en: {
    title: "MDK Studio | Web Development & Custom Systems",
    description: "MDK Studio specializes in web development, custom systems, and UX/UI Design. Transform your company's digital presence today."
  },
  es: {
    title: "MDK Studio | Desarrollo Web y Sistemas a Medida",
    description: "MDK Studio se especializa en el desarrollo de sitios web, sistemas a medida y Diseño UX/UI. Transforme la presencia digital de su empresa hoy mismo."
  }
};

function App() {
  useNavigatorLanguage();
  const { i18n } = useTranslation();
  
  const currentLang = i18n.language ? i18n.language.substring(0, 2).toLowerCase() : 'pt';
  const seo = seoData[currentLang] || seoData.pt;

  return (
    <>
      <Helmet>
        <html lang={currentLang === 'pt' ? 'pt-BR' : currentLang} />
        <title>{seo.title}</title>
        <meta name="description" content={seo.description} />
      </Helmet>
      <Header/>
      <Home/>
      <Servicos/>
      <ProjetosSection />
      <About/>
      <Faq/>
      <Formulario/>
      <Footer/>
    </>
  )
}

export default App