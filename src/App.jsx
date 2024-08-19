import React from 'react'
import Header from './components/common/Header'
import Footer from './components/common/Footer'
import { Outlet } from 'react-router-dom';
import Home from './components/sessions/Home';
import { Planos } from './components/sessions/Planos';
import { Galeria } from './components/sessions/Galeria';
import About from './components/sessions/About';
import Faq from './components/sessions/Faq';
import Formulario from './components/sessions/Formulario';

function App() {
  return (
    <>
      <Header/>
      <Home/>
      <Planos/>
      <Galeria/>
      <About/>
      <Faq/>
      <Formulario/>
      <Footer/> 
    </>
  )
}

export default App