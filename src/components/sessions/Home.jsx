import { motion } from "framer-motion";
import homeImg from "../../assets/img1.jpg";
import { useTranslation } from "react-i18next";
import ModalForm from "../content/ModalForm";

const Home = () => {
  const { t } = useTranslation();

  return (
    <div
      id="home"
      className="relative inset-0 bg-fixed bg-cover bg-center h-screen"
      style={{ backgroundImage: `url(${homeImg})` }}
    >
      <div className="absolute w-full h-full bg-gradient-to-b from-black/80 via-black/60 to-black" />
      <div className="relative flex z-10 flex-col justify-center items-center h-screen px-4 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-white text-5xl md:text-6xl lg:text-7xl font-display font-bold mb-6 tracking-tight"
        >
          {t("home.headlinePart1")} <br />
          <span className="text-gradient">{t("home.headlinePart2")}</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="text-white text-2xl mb-24"
        >
          {t("home.subheadline")}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
        >
          <ModalForm 
            buttonText={t("home.button")}
            icon={false}
            buttonClassName="relative z-10 px-8 py-4 text-lg font-medium text-white rounded-full bg-brand-accent/10 border border-brand-accent/50 overflow-hidden shadow-[0_0_20px_rgba(16,185,129,0.3)] hover:shadow-[0_0_30px_rgba(16,185,129,0.5)] hover:bg-brand-accent/20 transition-all duration-300 group inline-flex items-center"
          />
        </motion.div>
      </div>
    </div>
  );
};

export default Home;
