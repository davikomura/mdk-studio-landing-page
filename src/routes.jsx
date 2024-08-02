import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import App from './App.jsx';
import Home from './components/sessions/Home.jsx';
import { Planos } from './components/sessions/Planos.jsx';
import About from './components/sessions/About.jsx';
import Faq from './components/sessions/Faq.jsx';
import { Galeria } from './components/sessions/Galeria.jsx';

const routes = [
  
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/planos",
        element: <Planos />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/FAQ",
        element: <Faq />,
      },
      {
        path: "/galeria",
        element: <Galeria />,
      },
    ]
  }
];

const router = createBrowserRouter(routes);

export default router;