import Processes from './Processes/Processes.jsx';
import Abouts from './Abouts/Abouts.jsx';
import Contacts from './Contacts/Contacts.jsx';
import Home from './Home/Home.jsx';
import './index.css';
import {Routes, Route, Navigate, useLocation } from 'react-router-dom';
import SignUp from './components/SignUp.jsx';
import  { Toaster } from 'react-hot-toast';
import { useAuth } from "./context/Authprovider.jsx";
import WrongRoute from './components/WrongRoute.jsx';

function App() {
  const[authUser,setAuthUser]=useAuth();

  return (
    <>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='process' element={< Processes/>}/>
      <Route path='about' element={< Abouts/>}/>
      <Route path='contact' element={authUser.authUser? < Contacts/>: <Navigate to="/signup"  />}/>
      <Route path='/signup' element={< SignUp/>}/>
      <Route path='*' element={< WrongRoute path={location.pathname}/>}/>
    </Routes>
    <Toaster/>

    </>
  )
}

export default App
