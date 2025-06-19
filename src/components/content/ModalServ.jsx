import { useState } from "react";
import { IoCloseCircle } from "react-icons/io5";
import { useTranslation } from "react-i18next";

const ModalServ = ({ servico, onClose }) => {

    const { t } = useTranslation();

    const [showModal, setShowModal] = useState(false);

    const key = servico.key;
    const tipo = t(`services.items.${key}.type`);
    const descricao = t(`services.items.${key}.description`);

    const handleModalClose = () => {
        setShowModal(false);
        onClose();
    };

    return (
        <>
            <button
                className="mt-1 flex items-center gap-1 text-sm text-blue-500 underline underline-offset-4 hover:text-blue-300 hover:scale-105 transition-all duration-200"
                onClick={() => setShowModal(true)}
            >
                {t("services.readMore")}
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" className="rotate-180 stroke-blue-400">
                    <path
                        strokeLinejoin="round"
                        strokeLinecap="round"
                        strokeWidth="1.5"
                        d="M11 6L5 12M5 12L11 18M5 12H19"
                    ></path>
                </svg>
            </button>

            {showModal && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm transition-opacity duration-300">
                    <div className="bg-gradient-to-b from-gray-900 to-black rounded-2xl shadow-2xl p-6 md:p-8 w-11/12 max-w-md border border-indigo-600 animate-fade-in">
                        <div className="flex justify-between items-center mb-4">
                            <h3 className="text-white text-2xl md:text-3xl font-bold">
                                {tipo}
                            </h3>
                            <button onClick={handleModalClose} className="text-indigo-400 hover:text-red-500 transition-colors duration-200">
                                <IoCloseCircle size={32} />
                            </button>
                        </div>
                        <div className="text-white text-sm md:text-base leading-relaxed">
                            <p>{descricao}</p>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default ModalServ;
