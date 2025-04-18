import React, { useState } from 'react';

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

  const handleSubmit = () => {
    const { nome, Email, telefone, servico } = formData;
    if (nome && Email && telefone && servico) {
      const whatsappMessage = `Olá, gostaria de solicitar um orçamento.\nNome: ${nome}\nEmail: ${Email}\nTelefone: ${telefone}\nServiço: ${servico}`;
      const whatsappLink = `https://api.whatsapp.com/send?phone=5598981038642&text=${encodeURIComponent(whatsappMessage)}`;
      window.open(whatsappLink, '_blank');
    } else {
      alert('Por favor, preencha todos os campos.');
    }
  };

  return (
    <div className="bg-gradient-to-br from-black via-gray-900 to-black flex">
      <form
        onSubmit={(e) => e.preventDefault()}
        className="w-full max-w-3xl bg-zinc-900 p-10 rounded-3xl shadow-2xl border border-zinc-800 animate-fade-in"
      >
        <div className="grid sm:grid-cols-2 gap-8">
          {/* Nome */}
          <div className="flex flex-col">
            <label className="text-gray-300 text-sm mb-2 font-medium">Nome <span className="text-red-500">*</span></label>
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
            <label className="text-gray-300 text-sm mb-2 font-medium">Email <span className="text-red-500">*</span></label>
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
            <label className="text-gray-300 text-sm mb-2 font-medium">Telefone <span className="text-red-500">*</span></label>
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
            <label className="text-gray-300 text-sm mb-2 font-medium">Serviço <span className="text-red-500">*</span></label>
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
          Solicitar Orçamento via WhatsApp
        </button>
      </form>
    </div>
  );
};
