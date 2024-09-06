// 5.29 - Copo meio cheio: Ler um número e informar se ele é positivo, 
// negativo ou nulo.

import { useState } from "react"
import "./Media.css"

function P_atividade() {

    const [resultado, setResultado] = useState()
    
    function Saber(){
        let numeroDigitado = Number(prompt('Digite um número'))
        if(numeroDigitado > 0){
          setResultado('O número é positivo')

        }else if(numeroDigitado < 0){
          setResultado('O número é negativo')

        }else{
          setResultado('Número é nulo.')

        }

    }

  return (
    <div>
       <div className="Media-conteiner">
        <h2>Saiba Se o número que você digitou é positivo ou negativo</h2>
        <h4>Clique o botão abaixo caso vc queira saber</h4>
        <button onClick={Saber}>Saber</button><br />

        Este número é: {resultado}

        </div>

    </div>
  )
}

export default P_atividade
