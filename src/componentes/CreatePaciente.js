import axios from 'axios';
import React, { useState } from 'react';

function CreatePacient() {



  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    cpf: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value
    });
  };

  const handleSubmit = () => {

    axios.post('http://localhost:3001/pacient', {
      "nome":formData.name,
      "email":formData.email,
      "telefone":formData.phone,
      "cpf":formData.cpf
    }).then(()=>{
      console.log('Criado com sucesso');
    }).catch((err)=>{
      console.log(err);
    })
    console.log(formData);
  };

  return (
    <form className="max-w-md mx-auto mt-8">
      <div className="mb-4 pb-6">
        <label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-2">Nome</label>
        <input
          type="text"
          id="name"
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline "
          placeholder="Digite o nome"
          onChange={handleChange}
        />
      </div>
      <div className="mb-4 pb-6 ">
        <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">Email</label>
        <input
          type="email"
          id="email"
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          placeholder="Digite o email"
          onChange={handleChange}
        />
      </div>
      <div className="mb-4 pb-6 ">
        <label htmlFor="phone-number" className="block text-gray-700 text-sm font-bold mb-2">Telefone</label>
        <input
          type="tel"
          id="phone"
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          placeholder="Digite o telefone"
          onChange={handleChange}
        />
      </div>
      <div className="mb-6 pb-6">
        <label htmlFor="cpf" className="block text-gray-700 text-sm font-bold mb-2">CPF</label>
        <input
          type="text"
          id="cpf"
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          placeholder="Digite o CPF"
          pattern="\d{3}\.\d{3}\.\d{3}-\d{2}"
          title="CPF format: XXX.XXX.XXX-XX"
          onChange={handleChange}
        />
      </div>
      <div className="flex items-center justify-center">
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          type="button"
          onClick={handleSubmit}
        >
          Cadastrar
        </button>
      </div>
    </form>
  );
}

export default CreatePacient;
