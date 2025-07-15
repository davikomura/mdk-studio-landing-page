import { motion } from "framer-motion";
import homeImg from "../../assets/img1.jpg";
import { useTranslation } from "react-i18next";

const Home = () => {
  const { t } = useTranslation();

  return (
    <div
      id="home"
      className="relative inset-0 bg-fixed bg-cover bg-center h-screen"
      style={{ backgroundImage: `url(${homeImg})` }}
    >
      <div className="absolute w-full h-full bg-black opacity-50" />
      <div className="relative flex z-10 flex-col justify-center items-center h-screen px-4 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-white text-4xl font-bold mb-4 lg:text-5xl"
        >
          {t("home.headlinePart1")} <br />
          {t("home.headlinePart2")}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="text-white text-2xl mb-24"
        >
          {t("home.subheadline")}
        </motion.p>

        <motion.button
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
          onClick={() => window.open("https://api.whatsapp.com/send?phone=5598981600041", "_blank")}
          className="relative z-10 px-6 py-3 text-lg font-medium text-white rounded-full bg-white border border-zinc-700 overflow-hidden shadow-md hover:shadow-emerald-500/30 transition-all duration-300 group"
        >
          <span className="absolute inset-0 bg-gradient-to-r from-emerald-500 to-cyan-500 opacity-0 group-hover:opacity-10 transition duration-300 blur-sm"></span>
          <span className="relative z-10 text-black"> {t("home.button")} </span>
          <span className="absolute inset-0 rounded-full border border-transparent group-hover:border-emerald-500 transition duration-500" />
        </motion.button>
      </div>
    </div>
  );
};

export default Home;
