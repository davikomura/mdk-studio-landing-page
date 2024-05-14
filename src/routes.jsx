import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import App from './App.jsx';
import Home from './components/sessions/Home.jsx';
import { Planos } from './components/sessions/Planos.jsx';
import About from './components/sessions/About.jsx';

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
    ]
  }
];

const router = createBrowserRouter(routes);

export default router;