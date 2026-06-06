import React, { useEffect } from 'react';
import { createBrowserRouter, useNavigate, useParams, Navigate, Outlet } from 'react-router-dom';
import App from './App.jsx';
import PrivacyApp from './PrivacyApp.jsx';

// Component to handle auto-detection and redirecting the root "/" to "/:lang"
const RootRedirect = () => {
  const navigate = useNavigate();
  useEffect(() => {
    const browserLanguage = navigator.language.slice(0, 2).toLowerCase();
    const availableLanguages = ["en", "pt", "es"];
    const targetLang = availableLanguages.includes(browserLanguage) ? browserLanguage : "pt";
    navigate(`/${targetLang}`, { replace: true });
  }, [navigate]);

  return null;
};

// Component to handle redirecting "/privacy-policy" to "/:lang/privacy-policy"
const PrivacyRedirect = () => {
  const navigate = useNavigate();
  useEffect(() => {
    const browserLanguage = navigator.language.slice(0, 2).toLowerCase();
    const availableLanguages = ["en", "pt", "es"];
    const targetLang = availableLanguages.includes(browserLanguage) ? browserLanguage : "pt";
    navigate(`/${targetLang}/privacy-policy`, { replace: true });
  }, [navigate]);

  return null;
};

// Layout component to validate language code
const LanguageLayout = () => {
  const { lang } = useParams();
  const availableLanguages = ["en", "pt", "es"];

  if (!availableLanguages.includes(lang?.toLowerCase())) {
    return <Navigate to="/pt" replace />;
  }

  return <Outlet />;
};

const routes = [
  {
    path: "/",
    element: <RootRedirect />,
  },
  {
    path: "/privacy-policy",
    element: <PrivacyRedirect />,
  },
  {
    path: "/:lang",
    element: <LanguageLayout />,
    children: [
      {
        path: "",
        element: <App />,
      },
      {
        path: "privacy-policy",
        element: <PrivacyApp />,
      },
    ]
  },
  // Catch-all redirect to homepage
  {
    path: "*",
    element: <Navigate to="/" replace />,
  }
];

const router = createBrowserRouter(routes);

export default router;