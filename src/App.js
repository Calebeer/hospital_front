// import { useState } from 'react'
// import { Combobox } from '@headlessui/react'

// const people = [
//   'Wade Cooper',
//   'Arlene McCoy',
//   'Devon Webb',
//   'Tom Cook',
//   'Tanya Fox',
//   'Hellen Schmidt',
// ]

// function App() {
//   const [selectedPerson, setSelectedPerson] = useState(people[0])
//   const [query, setQuery] = useState('')

//   const filteredPeople =
//     query === ''
//       ? people
//       : people.filter((person) => {
//           return person.toLowerCase().includes(query.toLowerCase())
//         })

//   return (
//     <Combobox value={selectedPerson} onChange={setSelectedPerson}>
//       <Combobox.Input onChange={(event) => setQuery(event.target.value)} />
//       <Combobox.Options>
//         {filteredPeople.map((person) => (
//           <Combobox.Option key={person} value={person}>
//             {person}
//           </Combobox.Option>
//         ))}
//       </Combobox.Options>
//     </Combobox>
//   )
// }

// export default App;


import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Paciente from './componentes/Pacient';

function App() {
  return (
    <Router>

      <Routes>

      <Route exact path='/'  element={<Paciente/>} />
      </Routes>
      {/* <Footer/> */}
    </Router>
)}

export default App;