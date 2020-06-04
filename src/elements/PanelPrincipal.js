import React, { useState } from 'react'
import dataJson from '../data/atributos.json';
import BoxAtributo from './BoxAtributo';

export default function PanelPrincipal() {


    const [nombrePj, setnombrePj] = useState("")
    const [puntosAtributos, setpuntosAtributos] = useState(20)
    const [puntosHabilidades, setpuntosHabilidades] = useState(40)
    const [vidaPJ, setvidaPJ] = useState(10)


    const sumaPA = () => {
        if(puntosAtributos < 20)
            setpuntosAtributos(puntosAtributos+1)
        return;
    }
    const sumaPH = () => {
        if(puntosHabilidades < 40)
            setpuntosHabilidades(puntosHabilidades+1)
        return;
    }

    const restaPA = () => {
        if(puntosAtributos > 0)
            setpuntosAtributos(puntosAtributos-1)
        return
    }
    const restaPH = () => {
        if(puntosHabilidades > 0)
            setpuntosHabilidades(puntosHabilidades-1)
        return;
    }

    const ListaAtributos = () => {
        return dataJson.atributos.map((atributo) => {
            console.log(atributo)
            return (
            <BoxAtributo key={atributo.id} nombre={atributo.nombre} />
            );
        })
        
    }
    
    return (
        <div className="panelPrincipal">
            <label>Nombre PJ</label> <input type="text" value={nombrePj} onChange={(e) => {setnombrePj(e.target.value)}}></input>
            <p>Vida: <b>{vidaPJ}</b>  |  Puntos atributos disponible: <b>{puntosAtributos}</b>  |  Puntos habilidad disponible: <b>{puntosHabilidades}</b></p>
            <ListaAtributos/>


        </div>
    )
}
