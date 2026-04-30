import { useTranslation } from "react-i18next";

const languages = [
  { code: "pt", flagSrc: "/flags/br.png" },
  { code: "en", flagSrc: "/flags/us.png" },
  { code: "es", flagSrc: "/flags/es.png" },
];

export const LanguageDropdown = () => {
  const { i18n } = useTranslation();

  return (
    <div className="flex items-center space-x-3 ml-4">
      {languages.map((lang) => {
        const currentLang = i18n.language || "pt";
        const isActive = currentLang.toLowerCase().startsWith(lang.code);
        
        return (
          <button
            key={lang.code}
            onClick={() => i18n.changeLanguage(lang.code)}
            className={`transition-all duration-300 rounded-sm overflow-hidden flex items-center justify-center ${
              isActive 
                ? "ring-2 ring-offset-2 ring-offset-black ring-brand-accent scale-110 drop-shadow-[0_0_8px_rgba(16,185,129,0.8)]" 
                : "opacity-40 hover:opacity-80 grayscale hover:grayscale-0"
            }`}
            aria-label={`Mudar idioma para ${lang.code}`}
          >
            <img 
              src={lang.flagSrc} 
              alt={lang.code} 
              className="w-6 h-4 md:w-7 md:h-5 object-cover" 
            />
          </button>
        );
      })}
    </div>
  );
};
