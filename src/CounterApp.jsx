
import { useState } from "react"

import PropTypes from "prop-types"


export const CounterApp = ({count = 0}) => {
    const initial = count
    const [contador, setContador] = useState(initial)
    
  return (
    <>
    <h1>CounterApp</h1>

    <div >

    <div style={card} >
        <div >{contador}</div  >
        <div >
        <button  >+</button>
        <button  >-</button>

        </div>
    </div>
     


    </div>
    </>
)
}

CounterApp.propTypes = {

    count : PropTypes.number

}
