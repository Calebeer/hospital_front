import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="bg-gray-100 min-h-screen">
      <header className="bg-white shadow-lg">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <h1 className="text-3xl font-semibold text-gray-800">Hospital La Casa Del Salude</h1>
        </div>
      </header>

      <main className="max-w-7xl mx-auto py-12 px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white shadow rounded-lg p-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">Serviços</h2>
            <ul className="text-gray-600 space-y-2">
              <li>Consultas Médicas</li>
              <li>Exames Laboratoriais</li>
              <li>Cirurgias Especializadas</li>
            </ul>
          </div>

          <div className="bg-white shadow rounded-lg p-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">Equipe Médica</h2>
            <p className="text-gray-600">Equipe qualificada em diversas áreas.</p>
          </div>

          <div className="bg-white shadow rounded-lg p-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">Agende sua consulta aqui</h2>
            <p className="text-gray-600">Faça aqui o agendamento</p>
            <button className="mt-4 bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded"><Link className='link active ' to="/createMedicalAppointment" > Criar consulta </Link></button>
          </div>
        </div>
      </main>

      
    </div>
  );
}

export default Home;
