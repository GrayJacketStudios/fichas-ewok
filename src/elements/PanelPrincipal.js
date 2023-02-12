import React, { useState } from 'react'
import dataJson from '../data/atributos.json';
import BoxAtributo from './BoxAtributo';

export default function PanelPrincipal() {

    const [puntosAtributos, setpuntosAtributos] = useState(32)
    const [puntosHabilidades, setpuntosHabilidades] = useState(45)
    
    return (
        <div className="panelPrincipal">
            <p>Puntos atributos disponible: <b>{puntosAtributos}</b>  |  Puntos habilidad disponible: <b>{puntosHabilidades}</b></p>
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
                        habilidades={atributo.habilidades}
                        
                    />
                
                    ))
            }


        </div>
    )
}
