import './App.css';
// eslint-disable-next-line
import { useState, useEffect } from 'react';
import axios from 'axios';
import { Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import Landing from './components/Landing/Landing'
import Home from './components/Home/Home'
import Nav from './components/Nav/Nav'
import Detail from './components/Detail/Detail'
function App() {
   const { pathname } = useLocation();
  return (
    <div className="App">      
      {pathname!== '/' && <Nav />}

      <Routes>
        <Route path='/' element={<Landing />} />
        <Route path="/home"  element={<Home/>} />
        <Route path="/detail"  element={<Detail/>} />
      </Routes>    
    </div>
  );
}

export default App;
