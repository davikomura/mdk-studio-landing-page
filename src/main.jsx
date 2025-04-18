import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import React from 'react'
import './index.css';
import App from './App.jsx'
import './index.css'
import { Analytics } from "@vercel/analytics/react"
import './i18n';

const queryClient = new QueryClient();

const rootElement = document.getElementById('root');
if (rootElement) {
  createRoot(rootElement).render(
    <StrictMode>
      <QueryClientProvider client={queryClient}>
        <Analytics />
        <App />
      </QueryClientProvider>
    </StrictMode>,
  );
} else {
  console.error('Elemento root não encontrado!');
}