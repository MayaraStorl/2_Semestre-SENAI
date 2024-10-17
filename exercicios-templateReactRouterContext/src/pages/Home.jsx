import Navbar from "../components/Navbar"
import { useContext, useState } from "react"
import { GlobalContext } from "../contexts/GlobalContext"
function Home() {
    const {usuarioLogado} = useContext(GlobalContext)
 

  return (
    <div>
        <Navbar />
      <h1>Atividades do Rafa</h1>

    </div>
  )
}

export default Home
