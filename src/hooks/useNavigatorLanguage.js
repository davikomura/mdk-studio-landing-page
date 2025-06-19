import { useEffect } from "react";
import { useTranslation } from "react-i18next";

export const useNavigatorLanguage = () => {
  const { i18n } = useTranslation();

  useEffect(() => {
    const browserLanguage = navigator.language.slice(0, 2).toLowerCase();
    const availableLanguages = ["en", "pt", "es"];

    if (availableLanguages.includes(browserLanguage)) {
      i18n.changeLanguage(browserLanguage);
    } else {
      i18n.changeLanguage("en");
    }
  }, [i18n]);
};
