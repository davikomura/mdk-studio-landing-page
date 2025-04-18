import React, { useState } from 'react';
import emailjs from '@emailjs/browser';

export const FormWpp = ({ onSuccess, onClose }) => {
  const [formData, setFormData] = useState({
    nome: '',
    Email: '',
    telefone: '',
    servico: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    let formattedValue = value;

    if (name === 'telefone') {
      const match = value.replace(/\D/g, '').match(/(\d{0,2})(\d{0,5})(\d{0,4})/);
      formattedValue = !match[2]
        ? match[1]
        : `(${match[1]}) ${match[2]}${match[3] ? `-${match[3]}` : ''}`;
    }

    setFormData({
      ...formData,
      [name]: formattedValue,
    });
  };

  const handleSubmit = async () => {
    const { nome, Email, telefone, servico } = formData;

    if (nome && Email && telefone && servico) {
      try {
        await emailjs.send(
          import.meta.env.VITE_EMAILJS_SERVICE_ID,
          import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
          {
            to_nome: nome,
            to_email: Email,
            telefone,
            servico,
          },
          import.meta.env.VITE_EMAILJS_PUBLIC_KEY
        );

        await emailjs.send(
          import.meta.env.VITE_EMAILJS_SERVICE_ID,
          import.meta.env.VITE_EMAILJS_TEMPLATE_ID_ADMIN,
          {
            to_nome: 'Seu Nome ou "Admin"',
            to_email: 'seuemail@dominio.com',
            telefone,
            servico,
            from_usuario: nome,
            email_usuario: Email,
          },
          import.meta.env.VITE_EMAILJS_PUBLIC_KEY
        );

        setFormData({ nome: '', Email: '', telefone: '', servico: '' });
        onSuccess(); // aciona modal de sucesso
        onClose(); // fecha modal de formulário
      } catch (error) {
        console.error('Erro ao enviar email:', error);
        alert('Erro ao enviar email. Tente novamente.');
      }
    } else {
      alert('Por favor, preencha todos os campos.');
    }
  };

  return (
    <form
      onSubmit={(e) => e.preventDefault()}
      className="w-full bg-zinc-900 p-6 sm:p-8 md:p-10 rounded-3xl shadow-2xl border border-zinc-800 animate-fade-in"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
        {/* Nome */}
        <div className="flex flex-col">
          <label className="text-gray-300 text-sm mb-2 font-medium">
            Nome <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            name="nome"
            placeholder="Digite seu nome"
            value={formData.nome}
            onChange={handleChange}
            required
            className="bg-zinc-800 text-white placeholder-gray-500 p-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
          />
        </div>

        {/* Email */}
        <div className="flex flex-col">
          <label className="text-gray-300 text-sm mb-2 font-medium">
            Email <span className="text-red-500">*</span>
          </label>
          <input
            type="email"
            name="Email"
            placeholder="Digite seu email"
            value={formData.Email}
            onChange={handleChange}
            required
            className="bg-zinc-800 text-white placeholder-gray-500 p-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
          />
        </div>

        {/* Telefone */}
        <div className="flex flex-col">
          <label className="text-gray-300 text-sm mb-2 font-medium">
            Telefone <span className="text-red-500">*</span>
          </label>
          <input
            type="tel"
            name="telefone"
            placeholder="(xx) xxxxx-xxxx"
            value={formData.telefone}
            onChange={handleChange}
            required
            className="bg-zinc-800 text-white placeholder-gray-500 p-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
          />
        </div>

        {/* Serviço */}
        <div className="flex flex-col">
          <label className="text-gray-300 text-sm mb-2 font-medium">
            Serviço <span className="text-red-500">*</span>
          </label>
          <select
            name="servico"
            value={formData.servico}
            onChange={handleChange}
            required
            className="bg-zinc-800 text-white p-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
          >
            <option value="">Escolha um serviço</option>
            <option value="Desenvolvimento de Sites">Desenvolvimento de Sites</option>
            <option value="Desenvolvimento de Sistemas">Desenvolvimento de Sistemas</option>
            <option value="Design UX/UI">Design UX/UI</option>
          </select>
        </div>
      </div>

      <button
        type="button"
        onClick={handleSubmit}
        className="mt-10 w-full py-4 text-lg font-semibold bg-gradient-to-r from-blue-500 to-indigo-500 text-white rounded-xl hover:opacity-90 transition-all duration-300 shadow-lg shadow-blue-500/30"
      >
        Enviar Solicitação
      </button>
    </form>
  );
};
