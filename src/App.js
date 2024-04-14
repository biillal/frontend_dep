import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/home/Home';
import Contact from './pages/contact/Contact';
import Committees from './pages/Committees/Committees';
import { ToastContainer } from 'react-toastify';
import Topics from './pages/topics/Topics';
import Register from './pages/registration/Register';
import Dashboard from './pages/dashboard/Dashboard';
import Login from './pages/login/Login';
import { useSelector } from 'react-redux';

function App() {
  const {user} = useSelector((state)=>state.admin)
  return (
    <BrowserRouter>
      <ToastContainer />
      <Routes>
        <Route index element={<Home />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/committees' element={<Committees />} />
        <Route path='/topics' element={<Topics />} />
        <Route path='/registrations' element={<Register />} />
        <Route path='/login' element={<Login />} />

        <Route path='/dashboard' element={user ? <Dashboard/> : <Home/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
