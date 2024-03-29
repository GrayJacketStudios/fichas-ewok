import React, { useState } from 'react'

export default function Habilidad(props) {
    const [nivel, setNivel] = useState(0)

    function handleNivel(val){
        let temp = nivel + val;
        if(temp >= 0 && temp <= props.max_nivel){
           if(props.PH > 0 && val > 0){
            setNivel(temp)
            props.editPH(props.PH-1)
           }
           else if(props.PH <= 45 && val < 0){
            setNivel(temp)
            props.editPH(props.PH+1)
           }
            
        }
    }

    return (
        <div>
            <button onClick={() => handleNivel(-1)}>-</button><button onClick={() => handleNivel(+1)}>+</button> <div className="habilidad" title={props.descripcion}>{props.children} LVL <b>{nivel}</b></div>
        </div>
    )
}
