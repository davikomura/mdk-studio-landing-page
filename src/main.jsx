import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css';
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider, Routes } from 'react-router-dom';
import router from './routes.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <App /> */}
    <RouterProvider router={router} />
  </React.StrictMode>,
)