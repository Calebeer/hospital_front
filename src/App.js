import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Paciente from './componentes/Pacient';
import Navbar from './layout/Navbar';
import Home from './componentes/Home';
import CreatePacient from './componentes/CreatePaciente';
import Login from './componentes/Login';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <Router>
      <Navbar/>
    <ToastContainer/>
      <Routes>
      <Route exact path='/' element={<Home/>} />
      <Route  path='/createMedicalAppointment'  element={<Paciente/>} />
      <Route  path='/createPacient'  element={<CreatePacient/>} />
      <Route  path='/login'  element={<Login/>} />
      </Routes>
      {/* <Footer/>  */}
    </Router>
)}

export default App;