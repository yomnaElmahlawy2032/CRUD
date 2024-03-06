import React from 'react';
import { BrowserRouter as Router , Routes , Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import SignUP from './pages/SignUP';
import Users from './pages/Users';
import NotFound from './pages/NotFound';
import { ToastContainer } from 'react-toastify';

const App = () => {
  return (
    <>
    <Router>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/Login' element={<Login/>}/>
        <Route path='/SignUp' element={<SignUP/>}/>
        <Route path='/users' element={<Users/>}/>
        <Route path='*' element={<NotFound/>}/>
      </Routes>
    </Router>
    <ToastContainer/>
    </>
  );
}

export default App
