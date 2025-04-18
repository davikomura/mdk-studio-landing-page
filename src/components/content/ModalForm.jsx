import React, { useState } from "react";
import { IoCloseCircle } from "react-icons/io5";
import { FormWpp } from "./FormWpp";

const ModalForm = () => {
  const [showModal, setShowModal] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);

  const iconSize = 30;

  const handleModalClose = () => {
    setShowModal(false);
  };

  return (
    <>
      <button
        className="top-32 font-sans flex justify-center gap-2 items-center mx-auto shadow-xl text-lg bg-gray-50 backdrop-blur-md lg:font-semibold isolation-auto border-gray-50 before:absolute before:w-full before:transition-all before:duration-700 before:hover:w-full before:-left-full before:hover:left-0 before:rounded-full before:bg-emerald-500 hover:text-gray-50 before:-z-10 before:aspect-square before:hover:scale-150 before:hover:duration-700 relative z-10 px-4 py-2 overflow-hidden border-2 rounded-full group"
        type="submit"
        onClick={() => setShowModal(true)}
      >
        Solicitar Orçamento
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 16 19"
          className="w-8 h-8 justify-end group-hover:rotate-90 group-hover:bg-gray-50 text-gray-50 ease-linear duration-300 rounded-full border border-gray-700 group-hover:border-none p-2 rotate-45"
        >
          <path
            className="fill-gray-800 group-hover:fill-gray-800"
            d="M7 18C7 18.5523 7.44772 19 8 19C8.55228 19 9 18.5523 9 18H7ZM8.70711 0.292893C8.31658 -0.0976311 7.68342 -0.0976311 7.29289 0.292893L0.928932 6.65685C0.538408 7.04738 0.538408 7.68054 0.928932 8.07107C1.31946 8.46159 1.95262 8.46159 2.34315 8.07107L8 2.41421L13.6569 8.07107C14.0474 8.46159 14.6805 8.46159 15.0711 8.07107C15.4616 7.68054 15.4616 7.04738 15.0711 6.65685L8.70711 0.292893ZM9 18L9 1H7L7 18H9Z"
          ></path>
        </svg>
      </button>

      {showModal && (
        <div className="fixed inset-0 z-50 flex justify-center items-center bg-black bg-opacity-70">
          <div className="bg-gradient-to-br from-black via-gray-900 to-black rounded-lg p-8 w-11/12 md:w-2/5 border-2 border-indigo-600">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-white text-3xl text-center font-semibold">Informações do Serviço</h3>
              <button className="text-gray-500" onClick={handleModalClose}>
                <IoCloseCircle size={iconSize} />
              </button>
            </div>
            <FormWpp onSuccess={() => setShowSuccessModal(true)} onClose={handleModalClose} />
          </div>
        </div>
      )}

      {showSuccessModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50 z-50">
          <div className="bg-white rounded-lg p-8 max-w-sm w-full">
            <h2 className="text-xl font-semibold text-center text-green-600">Sucesso!</h2>
            <p className="text-center text-gray-700 mt-4">
              Sua solicitação foi enviada com sucesso! Verifique seu email para a confirmação.
            </p>
            <div className="mt-6 text-center">
              <button
                onClick={() => setShowSuccessModal(false)}
                className="bg-blue-500 text-white py-2 px-4 rounded-full hover:bg-blue-600 transition-all"
              >
                Fechar
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ModalForm;
