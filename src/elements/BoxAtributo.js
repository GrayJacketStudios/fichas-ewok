import React, { useState } from 'react'

export default function BoxAtributo(props) {
    
    const [nivel, setnivel] = useState(1)

    let handleNivel = (val) => {
        let temp = nivel+val;
        if(temp > 0 && temp <= props.maxNivel)
            if(val > 0 && props.PA > 0){
                props.editPA(props.PA-1);
                setnivel(temp);
                if(props.afecta_vida)
                    props.editVida(props.vida+1)
            }
            else if(val < 0 && props.PA <= 20){
                props.editPA(props.PA+1)
                setnivel(temp)
                if(props.afecta_vida)
                    props.editVida(props.vida-1)
            }
                
    }

    return (
        <div className="boxAtributo">
            <center><h3>{props.nombre} <span>{nivel}</span></h3></center>
            <hr />
            
            <hr />
            <center><button onClick={() => handleNivel(1)}>Subir nivel</button></center>
            <center><button onClick={() => handleNivel(-1)}>Bajar nivel</button></center>
            
        </div>
    )
}
