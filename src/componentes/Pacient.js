import React from 'react';

function Paciente() {
  return (
    <form>
      <div className="border-b border-gray-900/10 pb-12 m-7">
        <h2 className="text-base font-semibold leading-7 text-gray-900">Agende a consulta aqui</h2>
        <p className="mt-1 text-sm leading-6 text-gray-600">Aqui você irá fazer o agendamento da consulta</p>

        <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
          <div className="sm:col-span-3">
            <label htmlFor="first-name" className="block text-sm font-medium leading-6 text-gray-900">
              Nome Médico
            </label>
            <div className="mt-2">
              <input
                type="text"
                name="name-doctor"
                id="name-doctor"
                autoComplete="given-name"
                placeholder="Digite o nome do Médico"
                className="block w-2/4 rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div className="sm:col-span-3">
            <label htmlFor="last-name" className="block text-sm font-medium leading-6 text-gray-900">
              Nome Paciente
            </label>
            <div className="mt-2">
              <input
                type="text"
                name="name-paciente"
                id="name-paciente"
                placeholder="Digite o nome do paciente"
                autoComplete="family-name"
                className="block w-2/4 rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div className="sm:col-span-4">
            <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
              data e hora
            </label>
            <div className="mt-2">
              <input
                id="datetime"
                name="datetime"
                type="datetime-local"
                autoComplete="email"
                placeholder="Digite a data e a hora da consutla"
                className="block w-2/4 rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div className="col-span-full">

                <label htmlFor="about" className="block text-sm font-medium leading-6 text-gray-900">
                  Diagnóstico
                </label>
                <div className="mt-2">
                  <textarea
                    id="about"
                    name="about"
                    rows={3}
                    placeholder="Digite o diagnóstico do cliente"
                    className="block w-full px-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    defaultValue={''}
                  />

            </div>
          </div>
        </div>
      </div>

      <div className="mt-6 flex items-center justify-center">
        <button
          type="submit"
          className="rounded-md bg-indigo-600 px-10 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          Agendar Consulta
        </button>
      </div>
    </form>
  );
}

export default Paciente;






