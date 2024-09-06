// 5.30 - Dois copos meio cheios: Faça um programa para ler um número e 
// imprimir uma mensagem dizendo se o mesmo é par e positivo ao mesmo 
// tempo.

import { useState } from 'react'
import "./Media.css"


function S_atividade() {

    const [resultado, setResultado] = useState()

    function Descobrir(){
        let numeroEscolhido = Number(prompt('Digite um número de sua preferencia: '))

        if(numeroEscolhido %2 === 0 && numeroEscolhido > 0 ){
            setResultado('O número digitado é par e positivo')

        }else{
            setResultado('Número nulo')
        }

    }


  return (
    <div>
        <div className="Media-conteiner">
        <h2>Saiba Se o número que você digitou é positivo e par</h2>
        <h4>Clique o botão abaixo caso vc queira saber</h4>
        <button onClick={Descobrir}>Saber</button><br />

        Este número é: {resultado}

        </div>
    </div>
  )
}

export default S_atividade
