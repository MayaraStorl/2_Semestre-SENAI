// Não tem garçom de cara feia: Uma empresa abriu uma linha de 
// crédito para os funcionários. O valor da prestação não pode ultrapassar 
// 30% do salário. Faça um programa que receba o salário, o valor do 
// empréstimo e o número de prestações e informe se o empréstimo pode ser 
// concedido. Nenhum dos valores informados pode ser zero ou negativo.

import { useState } from "react"
import "./Media.css"

function T_atividade() {

    const [resultado, setResultado] = useState()

    function creditoParaFuncionario(){
        let salarioFuncionario = Number(prompt('Digite o valor do seu salario: '))
        let valorEmprestimo = Number(prompt('Qual o valor do emprestimo que vc deseja pegar?'))
        let quantidadePrestacao = Number(prompt('Qual a quantidade de parcelas vc deseja? '))

        let valorPrestacao = valorEmprestimo / quantidadePrestacao
        let porcentagemSalario = (salarioFuncionario * 30) / 100

        if(porcentagemSalario > valorPrestacao){
          setResultado('empréstimo pode ser concedido.')

        }else if(porcentagemSalario < valorPrestacao){
          setResultado('empréstimo não pode ser realizado')

        }
        if(valorPrestacao > 0 && porcentagemSalario > 0){
             if(valorPrestacao <= 0 || porcentagemSalario <= 0){
            setResultado('Algum valor incerido está errado. Tente novamente')
  
          }
        }
    }

  return (
    <div>
        <div className="Media-conteiner">
        <h2>Credito para funcionários</h2>
        <h4>Descubra se você pode receber o crédito para funcionários</h4>
        <button onClick={creditoParaFuncionario}>Descobrir</button><br />

        {resultado}

        </div>
    </div>
  )
}

export default T_atividade
