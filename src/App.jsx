import Header from './components/common/Header'
import Footer from './components/common/Footer'
import Home from './components/sessions/Home';
import { Galeria } from './components/sessions/Galeria';
import About from './components/sessions/About';
import Faq from './components/sessions/Faq';
import Formulario from './components/sessions/Formulario';
import { Servicos } from './components/sessions/Servicos';
import { useNavigatorLanguage } from "./hooks/useNavigatorLanguage";

function App() {
  useNavigatorLanguage();
  return (
    <>
      <Header/>
      <Home/>
      <Servicos/>
      <Galeria/>
      <About/>
      <Faq/>
      <Formulario/>
      <Footer/>
    </>
  )
}

export default App