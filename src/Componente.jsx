import React, {useState} from 'react'

export default function MiComponente() {

    const [correoElectronico, setcorreoElectronico] = useState()
    const [contraseña, setContraseña] = useState()
    const [updated, setUpdated] = useState()

    const textOnChange = (event) => {
        setcorreoElectronico (event.target.value)
    }

    const textOnChangeContraseña = (event) => {
        setContraseña (event.target.value)
    }

    const buttonOnClick = () => {
        setUpdated(updated)
    }

  return (
    <div>

        <input 
        type="Correo electrónico" 
        placeholder={"Correo electrónico"}
        value={correoElectronico} 
        onChange={textOnChange} 
        style={{ width: '300px', height: '40px', fontSize: '20px' }}/> 

        <a>                         </a>

        

        <input 
        type="Contraseña" 
        placeholder={"Contraseña"}
        value={contraseña} 
        onChange={textOnChangeContraseña} 
        style={{ width: '200px', height: '40px', fontSize: '20px' }}/>

        <a>      </a>


        <button style={{ width: '200px', height: '40px', fontSize: '20px' }} onClick={buttonOnClick}> Iniciar Sesión </button>


        <p> Texto Correo: {correoElectronico} </p>
        <p> Texto Contraseña: {contraseña} </p>
        <p> Texto Actualizado: {updated} </p>

    </div>
  )
}
