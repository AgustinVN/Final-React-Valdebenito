import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div>
        <div class="Footer">
        <h1 className='Footer-H1'> Tu tienda de neumaticos </h1>
            <div class="Pestañas">
                <p><Link to={'Ofertas'}>Ofertas</Link> </p>
                <p><Link to={'Catalogo'}>Catalogo</Link> </p>
                <p><Link to={'Contacto'}> Contacto </Link></p>
            </div>
            <div class="Redes">
                <img src="/public/Images/FacebookLogo.webp" alt="" />

                <img src="/public/Images/InstagramLogo.webp" alt="" />

                <img src="/public/Images/Twitter logo.webp" alt="" />
            </div>
            
        </div>
        
    </div>
  )
}

export default Footer
