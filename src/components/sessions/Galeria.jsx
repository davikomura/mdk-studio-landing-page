import ImageCarousel from '../content/ImageCarousel';
import { useTranslation } from "react-i18next";

export const Galeria = () => {

  const { t } = useTranslation();

  return (
    <div id="galeria" className="bg-black object-cover object-center relative inset-0 bg-cover bg-center">
      
      <div className="relative pt-40 pb-20">
        <h2 className="text-xl text-white font-bold leading-tight text-center sm:text-5xl">{t("gallery.title")}</h2>
        <ImageCarousel />
      </div>
      <hr className="h-px bg-gray-200 border-0 dark:bg-gray-700"></hr>
    </div>
  );
}
