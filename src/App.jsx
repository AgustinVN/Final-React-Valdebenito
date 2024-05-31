import { useState } from 'react'
import './App.css'
import Header from './assets/Header'
import NavBar from './assets/NavBar'
import Contacto from './assets/Contacto'
import Ofertas from './assets/Ofertas'
import { BrowserRouter, Routes, Route, Router } from "react-router-dom"
function App() {

  return (
    <>
      <div> 
      <BrowserRouter>
      <NavBar />
        <Routes>
          <Route exact path='/Contacto' element={<Contacto/>}/>
          <Route exact path='/Ofertas' element={<Ofertas/>}/>
          <Route exact path='/Catalogo' element={<Productos/>}/>
        </Routes>
        </BrowserRouter>
      </div>
    </>
  )
}

export default App
