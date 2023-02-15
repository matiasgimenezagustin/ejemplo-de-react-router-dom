import React from 'react'
import "./contactForm.css"

const ContactForm = () => {
  return (
    <div className='formContainer'>
        <h1>Contactate con nosotros</h1>
        <form action="" className='formularioUsuario'>
            
            <div className='inputContainer'>
                <label htmlFor="nombre">Ingrese su nombre</label>
                <input type="text" id='nombre' placeholder='cosme fulanito' />
            </div>
            <div className='inputContainer'>
                <label htmlFor="email">Ingrese su nombre</label>
                <input type="email" id='email' placeholder='cosme_fulanito@gmail.com' />
            </div>
            <div className='inputContainer'>
                <label htmlFor="telefono">Ingrese su nombre</label>
                <input type="tel" id='telefono' placeholder='+54 911 2249-1523' />
            </div>
            <input type="submit" />
        </form>
    </div>
  )
}

export {ContactForm}