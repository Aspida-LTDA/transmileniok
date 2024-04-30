//import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Login } from './components/pages/Login';
import { Home } from "./components/pages/Home";
import { UserRegister } from "./components/pages/ciclistRegister";

export function AppRoutes() {
  return (
    <BrowserRouter basename='/'>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/vigilante' element={<Home />} />
        <Route path='/registro-ciclistas' element={<UserRegister />} />
      </Routes>
    </BrowserRouter>
  )
}