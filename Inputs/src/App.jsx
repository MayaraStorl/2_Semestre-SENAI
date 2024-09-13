import { useState } from 'react'
import './App.css'
import Maior from './assets/components/maiorIdade/Maior'
import Menor from './assets/components/maiorIdade/Menor'
import Inputs from './assets/components/maiorIdade/Inputs'
import DiasDaSemana from './assets/components/DiasDaSemana/DiasDaSemana'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Inputs />
    <DiasDaSemana />
    </>
  )
}

export default App
