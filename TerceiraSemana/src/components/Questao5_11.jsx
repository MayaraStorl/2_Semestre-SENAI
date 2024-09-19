// Enzo e Valentina:
// Valentina, a irmã do Mano Juca tem 1.50m e cresce 2 centímetros por ano, 
// enquanto Enzo, o irmão mais novo, tem 1.40m e cresce 3 centímetros por 
// ano. Crie um programa/script/algoritmo que mostre quando Enzo será mais 
// alto que Valentina.

import React from 'react'
import { useState } from 'react'

function Questao5_11() {
    const [resposta, setreposta] = useState()

    function Descobrir(){
        let alturaValentina = 1.50
        let alturaEnzo = 1.40
        let contador = 0
        let crescimentoValentina = 0.02
        let crescimentoEnzo = 0.03

        while(alturaValentina > alturaEnzo){
            alturaEnzo = alturaEnzo + crescimentoEnzo
            alturaValentina = alturaValentina + crescimentoValentina
            contador = contador + 1

            if(alturaEnzo > alturaValentina){
                alert(`Enzo vai ser mais alto que Valentina em ${contador}`)
            }

        }

    }

  return (
    <div>
      <h1>Você deseja descobrir quando Enzo vai ser mais alto que Valentina?</h1>
      <h3>Se se deseja descobrir clique no botão abaixo 👇</h3>
      <button onClick={'Descobrir'}>Descobrir</button>

        {resposta}

    </div>
  )
}

export default Questao5_11
