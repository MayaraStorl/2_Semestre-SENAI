import { useState } from "react"
import Login from "../../components/Login"
import PainelAdm from "../../components/PainelAdm"
import ProdutosParaMaiores from "../../components/ProdutosParaMaiores"
import UsuarioLogado from "../../components/UsuarioLogado"


function Render() {

    const [adm, setAdm] = useState(false)
    const [idade, setIdade] = useState(0)
    const [usuario, setUsuario] = useState(false)

  return (
    <div className="render-container">
      <h1>Painel do usuário</h1>
      <div>
        <button onClick={() => (setAdm(true))}>adm</button>
        <button onClick={() => (setAdm(false))}>adm</button>
        { adm && <PainelAdm/>}
      </div>
    <div className="render-container">
        <button onClick={() => {setIdade(idade-1)}}>-</button>
        {idade}
        <button onClick={() => {setIdade(idade+1)}}>+</button>
        {idade >= 18 && <ProdutosParaMaiores />}


    </div>
    <div className="render-container">
        <button onClick={() => {setUsuario(true)}}>Logar</button>
        <button onClick={() => {setUsuario(false)}}>Deslogar</button>
        {usuario ? <UsuarioLogado /> : <Login />}

    </div>
    </div>
  )
}

export default Render
