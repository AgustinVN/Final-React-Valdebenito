import React from "react"
import {Link} from "react-router-dom"
const links = [
  {
    name: "EcoTires",
    href: "/EcoTires",
  },
  {
    name: "Ofertas",
    href: "/Ofertas",
  },
  {
    name: "Catalogo",
    href: "/Catalogo",
  },
  {
    name: "Contacto",
    href: "/Contacto",
  },
]
const NavBar = () => {
    return(
      <div>
        {links.map((x) =>
        <Link to={x.href}> {x.name} </Link>
        
        )}
      </div>
    )
}
export default NavBar;