import React from 'react'
import { useState } from 'react'
import Domingo from './Domingo'
import Quarta from './Quarta'
import Quinta from './Quinta'
import Sabado from './Sabado'
import Segunda from './Segunda'
import Sexta from './Sexta'
import Terca from './Terca'

function DiasDaSemana() {
    const [semana, setSemana] = useState(0)
    const [domingo, setDomingo] = useState(false)
    const [segunda, setSegunda] = useState(false)
    const [terca, setTerca] = useState(false)
    const [quarta, setQuarta] = useState(false)
    const [quinta, setquinta] = useState(false)
    const [sexta, setSexta] = useState(false)
    const [sabado, setSabado] = useState(false)

function DiasDaSemana(){
    switch(DiasDaSemana){
        case 1:
          setDomingo(true)
          setSegunda(false)
          setTerca(false)
          setQuarta(false)
          setquinta(false)
          setSexta(false)
          setSabado(false)
          break

        case 2:
            setDomingo(false)
            setSegunda(true)
            setTerca(false)
            setQuarta(false)
            setquinta(false)
            setSexta(false)
            setSabado(false)
            break

        case 3:
            setDomingo(false)
            setSegunda(false)
            setTerca(true)
            setQuarta(false)
            setquinta(false)
            setSexta(false)
            setSabado(false)
            break

        case 4:
            setDomingo(false)
            setSegunda(false)
            setTerca(false)
            setQuarta(true)
            setquinta(false)
            setSexta(false)
            setSabado(false)
            break
        
        case 5:
            setDomingo(false)
            setSegunda(false)
            setTerca(false)
            setQuarta(false)
            setquinta(true)
            setSexta(false)
            setSabado(false)
            break

        case 6:
            setDomingo(false)
            setSegunda(false)
            setTerca(false)
            setQuarta(false)
            setquinta(false)
            setSexta(true)
            setSabado(false)
            break

        case 7:
            setDomingo(false)
            setSegunda(false)
            setTerca(false)
            setQuarta(false)
            setquinta(false)
            setSexta(false)
            setSabado(true)
            break

        default:
            alert('Você não digitou um número correspondente aos dias da semana')
        
    }

}


  return (
    <div diaSemana-container>
      <h1>Dias da Semana</h1>
      Dias da Semana: 
      <input type="text" className='formularios' value={DiasDaSemana} onChange={(event) => {setSemana(event.target.value)}}/> <br />
      <button onClick={DiasDaSemana}>Descobrir</button>

      {domingo && <Domingo />}
      {segunda && <Segunda />}
      {terca && <Terca />}
      {quarta && <Quarta />}
      {quinta && <Quinta />}
      {sexta && <Sexta />}
      {sabado && <Sabado />}

    </div>

    
  )
}

export default DiasDaSemana
