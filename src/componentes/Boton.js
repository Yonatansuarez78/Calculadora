import React from 'react'
import '../hojas-estilo/Boton.css'
import '../hojas-estilo/BotonClear.css'

function Boton(props){

const esOperador = valor => {
    return isNaN(valor) && (valor != '.') && (valor != '=' )
};

    return(
        <div className={`boton-contenedor ${esOperador(props.children) ? 'operador' : ''}`}
          onClick={()=> props.manejarClick(props.children)}>
            {props.children}
        </div>
    )
}

export default Boton