import { useState } from 'react'
import './App.css'
import Footer from './assets/pages/Footer'
import Home from './assets/pages/Home'
import Navbar from './assets/pages/Navbar'
import Render from './assets/pages/Render'


function App() {

  const [pagina, setPagina] = useState(<Home/>)
  
  function mostrarHome(){
    setPagina(<Home />)

  }

  return (
    <>
    <nav className='nav-icons'>
      <button onClick={mostrarHome}>Home</button>
      <button onClick={() => {setPagina(<Navbar />)}}>Navbar</button>
      <button onClick={() => {setPagina(<Footer />)}}>Footer</button>
      <button onClick={() => {setPagina(<Render />)}}>Render</button>
    </nav>
    {pagina}
    </>
  )
}

export default App
