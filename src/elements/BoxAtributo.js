import React, { useState } from 'react'

export default function BoxAtributo(props) {
    
    const [nivel, setnivel] = useState(1)

    let handleNivel = (val) => {
        let temp = nivel+val;
        if(temp > 0 && temp <= props.maxNivel)
            setnivel(temp)
    }

    return (
        <div className="boxAtributo">
            <center><h3>{props.nombre} <span>{nivel}</span></h3></center>
            <hr />
            {props.children}
            
        </div>
    )
}
