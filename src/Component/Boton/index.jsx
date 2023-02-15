import React from 'react'
import "./boton.css"
const Boton = ({title, funcion, bgColor, textColor}) => {
  return (
    <button onClick={funcion} className="btn" style={{backgroundColor:bgColor, color: textColor}}>{title}</button>
  )
}

export {Boton}