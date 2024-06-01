import React from 'react'
import { Link } from 'react-router-dom';

const Contacto = () => {
  return (
    <div>
      <div>
        <h1 className='Contacto-H1'> Pongase en Contacto </h1>
        <h2 className='Contacto-H2'> Desea ponerse en contacto? nos encantaria escuchar de usted! aqui tiene como ponerse en contacto con nosotros</h2>
        
      </div>
      <div className='Info-Contacto'>
      <div class="d-flex">
  <div className='Telefono'>
    <h1>Telefono</h1>
    <img src="https://img.freepik.com/vector-premium/plantilla-diseno-vector-logotipo-icono-telefono_827767-1199.jpg" alt="" />
    <h2>x-xxxx-xxxx-xx</h2>
  </div>
  <div class="Telefono">
    <h1> Correo </h1>
    <img src="https://static.vecteezy.com/system/resources/previews/006/827/459/non_2x/email-icon-sign-symbol-logo-vector.jpg" alt="" />
    <h2> EcoTires@Gmail.com</h2>
  </div>
</div>
      </div>
      <p className='Volver'><Link to={'/'}> Volver al Inicio</Link> </p>
    </div>
  )
}

export default Contacto;
