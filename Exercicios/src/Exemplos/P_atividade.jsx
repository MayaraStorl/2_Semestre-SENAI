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
          setResultado('Número invalido.')

        }

    }

  return (
    <div>
       <div className="Media-conteiner">
        <h2>Saiba Se o número que você digitou é possitivo ou negativo</h2>
        <h4>Clique o botão abaixo caso vc queira saber</h4>
        <button onClick={Saber}>Saber</button>

        </div>
    </div>
  )
}

export default P_atividade
