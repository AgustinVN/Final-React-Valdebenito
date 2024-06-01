import { useState } from 'react'
import './App.css'
import Header from './assets/Header'
import NavBar from './assets/NavBar'
import Contacto from './assets/Contacto'
import Ofertas from './assets/Ofertas'
import Footer from './assets/Footer'
import { BrowserRouter, Routes, Route } from "react-router-dom"
function App() {

  return (
    <>
    <div> 
      <BrowserRouter>
        <NavBar />
        <Header />
          <Routes>
            <Route exact path='/Ofertas' element={<Ofertas />} />
            <Route exact path='/Contacto' element={<Contacto />} />
          </Routes>
        <Footer />
      </BrowserRouter>
    </div>
    </>
  )
}

export default App
