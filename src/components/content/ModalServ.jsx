import React, { useState } from "react";
import { IoCloseCircle } from "react-icons/io5";

export const ModalServ = ({ servico, onClose }) => {
    const [showModal, setShowModal] = useState(false);

    const iconSize = 30;

    const handleModalClose = () => {
        setShowModal(false);
        onClose();
    };

    return (
        <>
            <a 
                className='mt-1 justify-center flex items-center text-sm text-blue-400 underline underline-offset-2 hover:scale-110 transition-transform duration-200'
                type="submit"
                onClick={() => setShowModal(true)}
            >
                Saiba Mais
                <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" viewBox="0 0 24 24" className="rotate-180 stroke-blue-400">
                    <path strokeLinejoin="round" strokeLinecap="round" strokeWidth="1.5" d="M11 6L5 12M5 12L11 18M5 12H19"></path>
                </svg>
            </a>

            {showModal && (
                <div className="fixed inset-0 z-50 flex justify-center items-center bg-black bg-opacity-75">
                    <div className="bg-black rounded-lg p-8 w-11/12 md:w-2/5">
                        <div className="flex justify-between items-center mb-4">
                            <h3 className="text-white text-3xl font-semibold">{servico.tipo}</h3>
                            <button className="text-gray-500" onClick={handleModalClose}>
                                <IoCloseCircle size={iconSize} />
                            </button>
                        </div>
                        <div className="text-white">
                            <p>{servico.descricao}</p>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};
