import React, { useState } from 'react'
import Habilidad from './Habilidad'

export default function BoxAtributo(props) {
    
    const [nivel, setnivel] = useState(0)

    let handleNivel = (val) => {
        let temp = nivel+val;
        if(temp >= 0 && temp <= props.maxNivel)
            if(val > 0 && props.PA > 0){
                props.editPA(props.PA-1);
                setnivel(temp);
                if(props.afecta_vida)
                    props.editVida(props.vida+1)
            }
            else if(val < 0 && props.PA <= 24){
                props.editPA(props.PA+1)
                setnivel(temp)
                if(props.afecta_vida)
                    props.editVida(props.vida-1)
            }
                
    }

    return (
        <div className="boxAtributo">
            <center><h3 title={props.descripcion}>{props.nombre} <span>{nivel}</span></h3></center>
            <hr />
            {props.habilidades.map((habilidad) => (
                <Habilidad 
                    key={habilidad.nombre} 
                    max_nivel={habilidad.max_level}
                    descripcion={habilidad.descripcion} 
                    vida={props.vida} 
                    editVida={props.editVida} 
                    afecta_vida={habilidad.afecta_vida}
                    PH={props.PH}
                    editPH={props.editPH}
                    >
                        {habilidad.nombre}
                </Habilidad>
            ))}
            <hr />
            <center><button onClick={() => handleNivel(1)}>Subir nivel</button></center>
            <center><button onClick={() => handleNivel(-1)}>Bajar nivel</button></center>
            
        </div>
    )
}
