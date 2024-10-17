import React from 'react'
import { useContext } from 'react'
import Navbar from '../components/Navbar'
import { GlobalContext } from '../contexts/GlobalContext'

function Dragoes() {
    const {diaHoje, setDiaHoje} = useContext(GlobalContext)

    function trocarDia(){
        let dia = prompt('Que dia é hoje? ')
        setDiaHoje(dia)

    }

  return (
    <div>
        <Navbar />
      <h1>Dragões</h1>
      <p>Porque eles são legais. menos no dia {diaHoje}</p>
      <button onClick={trocarDia}>Trocar dia</button>
    </div>
  )
}

export default Dragoes
