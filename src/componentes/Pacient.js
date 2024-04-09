import axios from 'axios';
import React, { useRef, useState } from 'react';
import moment from 'moment';
import Campo from '../1/Campo';
import CampoPacient from '../1/CampoPacient'
import { toast } from 'react-toastify';


function Paciente() {


  const formRef = useRef(null)

  // const [whiteInput, setWhiteInput] = useState(initialState)

  const [formData, setFormData] = useState({
    DoctorId: '',
    PacienteId: '',
    datetime: '',
    about: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    axios.post('http://localhost:3001/consulta', {
      "medico_id": formData.DoctorId,
      "paciente_id":formData.PacienteId,
      "data_hora":formData.datetime,
      "diagnostico":formData.about
    }).then(()=>{
      console.log('Criado com sucesso');
      toast.success('Consulta agendada')
      formRef.current.reset()
    }).catch((err)=>{
      console.log(err);
    })
    console.log(formData);
    console.log(formData);
    e.preventDefault()
  };

  return (
    <form ref={formRef} >
      <div className="border-b border-gray-900/10 pb-12 m-7">
        <h2 className="text-base font-semibold leading-7 text-gray-900">Agende a consulta aqui</h2>
        <p className="mt-1 text-sm leading-6 text-gray-600">Aqui você irá fazer o agendamento da consulta</p>

        <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
          <div className="sm:col-span-3">
            <label htmlFor="first-name" className="block text-sm font-medium leading-6 text-gray-900">
              Nome Médico
            </label>
            <div className="mt-2">
                <Campo setSelectedExternal={(valor)=>{
                  setFormData({...formData,DoctorId:valor.id})
                }}/>
            </div>
          </div>
          {/* {JSON.stringify(formData)} */}
          <div className="sm:col-span-3">
            <label htmlFor="last-name" className="block text-sm font-medium leading-6 text-gray-900">
              Nome Paciente
            </label>
            <div className="mt-2">
              <CampoPacient setSelectedExternal={(valor)=>{
                setFormData({...formData, PacienteId:valor.id})
              }} />
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
                onChange={handleChange}
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
                    onChange={handleChange}

                  />

            </div>
          </div>
        </div>
      </div>

      <div className="mt-6 flex items-center justify-center">
        <button
          type="submit"
          className="rounded-md bg-indigo-600 px-10 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          onClick={handleSubmit}
          
        >
          Agendar Consulta
        </button>
      </div>
    </form>
  );
}

export default Paciente;






