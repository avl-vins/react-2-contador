
import { useState } from "react"

import PropTypes from "prop-types"

const contenedor = {

    display:"flex",
    justifyContent:"center",
    alingItems:"center",
    padding:"3rem"

}

const card ={
    width:"300px",
    textAlign:"center"
}

const display ={
    padding:"3rem",
    fontSize:"4rem",
    
}

const contenedorBoton = {

    display:"flex",
    justifyContent:"center",
    gap:"1rem"
}

const boton = {
    padding:"2rem",
    fontSize:"2rem"
}
export const CounterApp = ({count = 0}) => {
    const initial = count
    const [contador, setContador] = useState(initial)

    const aumentaContador = ()=>{
        setContador(contador+1)

    }
    const disminuyeContador = ()=>{
        setContador(contador-1)

    }
    
  return (
    <>
    <h1>CounterApp</h1>

    <div style={ contenedor }>

    <div style={card} >
        <div style={display} >{contador}</div  >
        <div style={contenedorBoton}>
        <button style={boton} onClick={aumentaContador} >+</button>
        <button style={boton}  onClick={disminuyeContador} >-</button>

        </div>
    </div>
    </div>
    </>
)
}

CounterApp.propTypes = {

    count : PropTypes.number

}
