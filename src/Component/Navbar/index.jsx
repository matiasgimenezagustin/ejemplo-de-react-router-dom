import React from 'react'
import {MdEco} from "react-icons/md"
import { NavLink } from 'react-router-dom'
import "./navbar.css"

const Navbar = () => {
  return (
    <header>
      <h2>Titulo ejemplo <MdEco /> </h2>
      <nav>
        <NavLink to="/home">
          Home
        </NavLink>
        <NavLink to="/contact">
          Contact
        </NavLink>
        <NavLink to="/products/celulares">
          Celulares
        </NavLink>
        <NavLink to="/products/computadora">
          Computadoras 
        </NavLink>
      </nav>
    </header>
  )
}

export {Navbar}