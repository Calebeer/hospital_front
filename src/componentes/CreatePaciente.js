
import React from 'react';


function CreatePacient(){
    return(
<form className="max-w-md mx-auto mt-8">
  <div className="mb-4 pb-6">
    <label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-2">Nome</label>
    <input
      type="text"
      id="name"
      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline "
      placeholder="Digite o nome"
    />
  </div>
  <div className="mb-4 pb-6 ">
    <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">Email</label>
    <input
      type="email"
      id="email"
      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
      placeholder="Digite o email"
    />
  </div>
  <div className="mb-4 pb-6 ">
    <label htmlFor="password" className="block text-gray-700 text-sm font-bold mb-2">Telefone</label>
    <input
     type="tel"
     id="phone-number"
     class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
     placeholder="Digite o telefone"
    />
  </div>
  <div className="mb-6 pb-6">
    <label htmlFor="confirm-password" className="block text-gray-700 text-sm font-bold mb-2">CPF</label>
    <input
     type="text"
     id="cpf"
     class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
     placeholder="Digite o CPF"
     pattern="\d{3}\.\d{3}\.\d{3}-\d{2}"
     title="CPF format: XXX.XXX.XXX-XX"
    />
  </div>
  <div className="flex items-center justify-center">
    <button
      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
      type="button"
    >
      Cadastrar
    </button>
  </div>
</form>
    )
}

export default CreatePacient

