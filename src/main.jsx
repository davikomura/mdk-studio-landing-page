import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { HelmetProvider } from 'react-helmet-async';

import React from 'react'
import './index.css';
import App from './App.jsx'
import { Analytics } from "@vercel/analytics/react"
import './i18n';

const queryClient = new QueryClient();

const rootElement = document.getElementById('root');
if (rootElement) {
  createRoot(rootElement).render(
    <StrictMode>
      <HelmetProvider>
        <QueryClientProvider client={queryClient}>
          <Analytics />
          <App />
        </QueryClientProvider>
      </HelmetProvider>
    </StrictMode>,
  );
} else {
  console.error('Elemento root não encontrado!');
}