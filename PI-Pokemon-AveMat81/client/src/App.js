import './App.css';
// eslint-disable-next-line
import { useState, useEffect } from 'react';
//import axios from 'axios';
import { Routes, Route, useLocation } from 'react-router-dom';
//useNavigate
import Landing from './components/Landing/Landing'
import Home from './components/Home/Home'
import Nav from './components/Nav/Nav'
import Detail from './components/Detail/Detail'
import Form from './components/Form/Form'


const App = ()=> {
   const { pathname } = useLocation();
  return (
    <div className="App">      
      {pathname!== '/' && <Nav />}

      <Routes>
        <Route path='/' element={<Landing />} />
        <Route path="/home"  element={<Home/>} />
        <Route path="/detail/:id"  element={<Detail/>} />
        <Route path="/create"  element={<Form/>} />
      </Routes>    
    </div>
  );
}

export default App;
