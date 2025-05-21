import React, {useState} from 'react'
import './App.css';

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
        style={{ width: '300px', height: '35px', fontSize: '18px', borderWidth: "3px", borderStyle: "solid", borderColor: "purple" }}/> 

     <a>           </a>

        <input 
        type="Contraseña" 
        placeholder={"Contraseña"}
        value={contraseña} 
        onChange={textOnChangeContraseña} 
        style={{ width: '180px', height: '35px', fontSize: '18px', borderWidth: "3px",borderStyle: "solid",borderColor: "purple" }}/>

        <a>      </a>


        <button style={{  width: '150px', height: '40px', fontSize: '18px',  borderWidth: "3px", borderStyle: "solid", borderColor: "purple" }} 
        onClick={buttonOnClick}> 
             
            Iniciar Sesión 
             
        </button>

      

    </div>
  )
}
