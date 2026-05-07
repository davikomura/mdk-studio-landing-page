import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import App from './App.jsx';
import PrivacyApp from './PrivacyApp.jsx';

const routes = [
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/privacy-policy",
    element: <PrivacyApp />,
  },
];

const router = createBrowserRouter(routes);

export default router;