import React, { useState } from 'react'
import dataJson from '../data/atributos.json';
import BoxAtributo from './BoxAtributo';

export default function PanelPrincipal() {


    const [nombrePj, setnombrePj] = useState("")
    const [puntosAtributos, setpuntosAtributos] = useState(20)
    const [puntosHabilidades, setpuntosHabilidades] = useState(40)
    const [vidaPJ, setvidaPJ] = useState(2)
    
    return (
        <div className="panelPrincipal">
            <label>Nombre PJ</label> <input type="text" value={nombrePj} onChange={(e) => {setnombrePj(e.target.value)}}></input>
            <p>Vida: <b>{vidaPJ*5}</b>  |  Puntos atributos disponible: <b>{puntosAtributos}</b>  |  Puntos habilidad disponible: <b>{puntosHabilidades}</b></p>
            {
                dataJson.atributos.map((atributo) => (
            
                    <BoxAtributo 
                        key={atributo.id}
                        nombre={atributo.nombre} 
                        maxNivel={atributo.max_level} 
                        editPA={setpuntosAtributos}
                        editPH={(val) => setpuntosHabilidades(val)}
                        PA={puntosAtributos}
                        PH={puntosHabilidades}
                        afecta_vida={atributo.afecta_vida}
                        vida={vidaPJ}
                        editVida={setvidaPJ}
                        habilidades={atributo.habilidades}
                        
                    />
                
                    ))
            }


        </div>
    )
}
