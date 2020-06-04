import React, { useState } from 'react'
import dataJson from '../data/atributos.json';
import BoxAtributo from './BoxAtributo';

export default function PanelPrincipal() {

    const [puntosAtributos, setpuntosAtributos] = useState(24)
    const [puntosHabilidades, setpuntosHabilidades] = useState(40)
    const [vidaPJ, setvidaPJ] = useState(0)
    
    return (
        <div className="panelPrincipal">
            <p>Vida: <b>{vidaPJ*5}</b>  |  Puntos atributos disponible: <b>{puntosAtributos}</b>  |  Puntos habilidad disponible: <b>{puntosHabilidades}</b></p>
            {
                dataJson.atributos.map((atributo) => (
            
                    <BoxAtributo 
                        key={atributo.id}
                        nombre={atributo.nombre}
                        descripcion={atributo.descripcion} 
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
