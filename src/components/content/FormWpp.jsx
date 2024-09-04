import React, { useState } from 'react'
// import {email} from '../../assets/email-svgrepo-com.svg'

export const FormWpp = () => {
    
    const [formData, setFormData] = useState({
        nome: '',
        Email: '',
        telefone: '',
        servico: '',
    });
    
    const handleChange = (e) => {
        const { name, value } = e.target;
        let formattedValue = value;
    
        // Formata o número de telefone para (xx) xxxxx-xxxx
        if (name === 'telefone') {
          const match = value.replace(/\D/g, '').match(/(\d{0,2})(\d{0,5})(\d{0,4})/);
          formattedValue = !match[2] ? match[1] : `(${match[1]}) ${match[2]}${match[3] ? `-${match[3]}` : ''}`;
        }
    
        setFormData({
          ...formData,
          [name]: formattedValue,
        });
    };
    
    const handleSubmit = () => {
        const { nome, Email, telefone, servico } = formData;
        if (nome && Email && telefone && servico) {
          const whatsappMessage = `Olá, gostaria de soliçitar um orçamento. 
          Nome: ${nome} 
          Email: ${Email} 
          Telefone: ${telefone} 
          Serviço: ${servico}`;
    
          const whatsappLink = `https://api.whatsapp.com/send?phone=5598981038642&text=${encodeURIComponent(whatsappMessage)}`;
          window.open(whatsappLink, '_blank');
        } else {
          alert('Por favor, preencha todos os campos.');
        }
    };
    

  return (
    <div className="bg-black flex">
      <form className="font-[sans-serif] text-[#333] max-w-4xl mx-auto px-6 my-6" onSubmit={(e) => e.preventDefault()}>
        <div className="grid sm:grid-cols-2 gap-10">
          <div className="relative flex items-center">
            <label className="text-[13px] text-white absolute top-[-10px] left-0 font-semibold">Nome <span className="text-red-500">*</span></label>
            <input
              type="text"
              name="nome"
              placeholder="Digite seu nome"
              value={formData.nome}
              onChange={handleChange}
              className="px-2 pt-5 pb-2 bg-black w-full text-sm border-b-2 border-gray-100 focus:border-[#333] outline-none text-gray-400"
              required
            />
            <svg xmlns="http://www.w3.org/2000/svg" fill="#bbb" stroke="#bbb" className="w-[18px] h-[18px] absolute right-4" viewBox="0 0 24 24">
              <circle cx="10" cy="7" r="6"></circle>
              <path
                d="M14 15H6a5 5 0 0 0-5 5 3 3 0 0 0 3 3h12a3 3 0 0 0 3-3 5 5 0 0 0-5-5zm8-4h-2.59l.3-.29a1 1 0 0 0-1.42-1.42l-2 2a1 1 0 0 0 0 1.42l2 2a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42l-.3-.29H22a1 1 0 0 0 0-2z"
              ></path>
            </svg>
          </div>
          <div className="relative flex items-center">
            <label className="text-[13px] text-white absolute top-[-10px] left-0 font-semibold">Email <span className="text-red-500">*</span></label>
            <input
              type="text"
              name="Email"
              placeholder="Digite o Email"
              value={formData.Email}
              onChange={handleChange}
              className="px-2 pt-5 pb-2 bg-black w-full text-sm border-b-2 border-gray-100 focus:border-[#333] outline-none text-gray-400"
              required
            />
            {/* <svg xmlns="http://www.w3.org/2000/svg" fill="#bbb" stroke="#bbb" className="w-[18px] h-[18px] absolute right-4" viewBox="0 0 24 24">
              <circle cx="10" cy="7" r="6"></circle>
              <path
                d="M14 15H6a5 5 0 0 0-5 5 3 3 0 0 0 3 3h12a3 3 0 0 0 3-3 5 5 0 0 0-5-5zm8-4h-2.59l.3-.29a1 1 0 0 0-1.42-1.42l-2 2a1 1 0 0 0 0 1.42l2 2a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42l-.3-.29H22a1 1 0 0 0 0-2z"
              ></path>
            </svg> */}
            <svg xmlns="http://www.w3.org/2000/svg" fill="#bbb" stroke="#bbb" className="w-[18px] h-[18px] absolute right-4" viewBox="0 0 24 24">
              <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 2v.01L12 11 4 6.01V6h16zM4 18V8l8 5 8-5v10H4z"/>
            </svg>

          </div>
          <div className="relative flex items-center">
            <label className="text-[13px] text-white absolute top-[-10px] left-0 font-semibold">Número de Telefone <span className="text-red-500">*</span></label>
            <input
              name="telefone"
              placeholder="(xx) xxxxx-xxxx"
              value={formData.telefone}
              onChange={handleChange}
              className="px-2 pt-5 pb-2 bg-black w-full text-sm border-b-2 border-gray-100 focus:border-[#333] outline-none text-gray-400"
              required
            />
            <svg fill="#bbb" className="w-[18px] h-[18px] absolute right-4" viewBox="0 0 64 64">
              <path
                d="m52.148 42.678-6.479-4.527a5 5 0 0 0-6.963 1.238l-1.504 2.156c-2.52-1.69-5.333-4.05-8.014-6.732-2.68-2.68-5.04-5.493-6.73-8.013l2.154-1.504a4.96 4.96 0 0 0 2.064-3.225 4.98 4.98 0 0 0-.826-3.739l-4.525-6.478C20.378 10.5 18.85 9.69 17.24 9.69a4.69 4.69 0 0 0-1.628.291 8.97 8.97 0 0 0-1.685.828l-.895.63a6.782 6.782 0 0 0-.63.563c-1.092 1.09-1.866 2.472-2.303 4.104-1.865 6.99 2.754 17.561 11.495 26.301 7.34 7.34 16.157 11.9 23.011 11.9 1.175 0 2.281-.136 3.29-.406 1.633-.436 3.014-1.21 4.105-2.302.199-.199.388-.407.591-.67l.63-.899a9.007 9.007 0 0 0 .798-1.64c.763-2.06-.007-4.41-1.871-5.713z"
              ></path>
            </svg>
          </div>
          <div className="relative flex items-center">
            <label className="text-[13px] text-white absolute top-[-10px] left-0 font-semibold">Serviço <span className="text-red-500">*</span></label>
            <div className="w-full border-b-2 border-gray-100 focus-within:border-[#333]">
                <select
                    id="underline_select"
                    name="servico"
                    onChange={handleChange}
                    className="px-2 pt-5 pb-2 bg-black w-full text-sm text-gray-400 outline-none"
                    required
                >
                    <option value="">Escolha um serviço</option>
                    <option value="Desenvolvimento de Sites">Desenvolvimento de Sites</option>
                    <option value="Desenvolvimento de Sistemas">Desenvolvimento de Sistemas</option>
                    <option value="Design UX/UI">Design UX/UI</option>
                </select>
            </div>
          </div>
        </div>
        <button 
        type="button"
        onClick={handleSubmit}
        className="mt-10 px-2 py-2.5 w-full rounded text-sm font-semibold bg-blue-500 text-black hover:bg-blue-600"
        >
          Solicitar Orçamento
        </button>
      </form>
    </div>
  )
}