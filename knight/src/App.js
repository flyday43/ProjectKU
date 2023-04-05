import React from "react";
import './App.css';
import './main/Main.css';
import Login from './login/Login';
import Register from "./Register";
import LoginMech from "./LoginMech";
import RegisMech from "./RegisMech";
import Main from "./main/Main";
// import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { BrowserRouter,Routes, Route } from "react-router-dom";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login/>} />
        <Route path='/register' element={<Register/>} />
        <Route path='/login-mech' element={<LoginMech/>} />
        <Route path='/login-mech/register' element={<RegisMech/>} />
        <Route path='/' element={<Main/>} />
      </Routes>
    </BrowserRouter>
   
  );
}

export default App;