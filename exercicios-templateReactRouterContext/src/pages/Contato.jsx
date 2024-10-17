import { useState } from "react"
import Navbar from "../components/Navbar"

function Contato() {
  const[numPares, setNumPares] = useState('')

  function numerosPares(){
    if(numPares % 2 === 0){
      setNumPares("Este número é par")

    }else{
      setNumPares("bla")

    }


  }

  return (
    <div>
        <Navbar />
        <h1>Descubra todos os números pares contidos entre eles</h1>
        <h4>Digite um número diferente nos inputs a seguir: </h4>
        <input type="number" value={numPares} onChange={(event) => setNumPares(event.target.value)} /><br /> <br />
        <input type="number" /><br /><br /><br />
        <button onClick={numerosPares}>Mostrar Pares</button>

    </div>
  )
}

export default Contato
