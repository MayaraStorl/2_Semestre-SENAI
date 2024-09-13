import React from 'react'
import { useState } from 'react'
import Maior from './Maior'
import Menor from './Menor'

function Inputs() {
    const [inputIdade, setInputIdade] = useState(0)
    const [maior, setMaior] = useState(false)
    const [menor, setMenor] = useState(false)

function processarIdade(){
    if(inputIdade >= 18){
        setMaior(false)
        setMenor(true)

    }else{
        setMenor(false)
        setMaior(true)

    }

}

  return (
    <div className='inputs-container'>
    <h1>Inputs</h1>

    Idade:
    <input type="number" className='formularios' value={inputIdade} onChange={(event) => {setInputIdade(event.target.value)}} /> <br />
    <button onClick={processarIdade}>Processar idade</button>

    {/* {inputIdade} */}
    {maior && <Menor />}
    {menor && <Maior />}
    </div>
  )
}








































export default Inputs
