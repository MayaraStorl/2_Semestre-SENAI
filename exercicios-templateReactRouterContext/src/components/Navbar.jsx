import { Link } from "react-router-dom"
import './Navbar.css'
function Navbar() {
  return (
    <nav className="navbar">
        <Link to="/">Home</Link>
        <Link to="/Numeros712">Ex 7.12</Link>
        <Link to="/contato">Ex 7.13</Link>
        <Link to="/generica">Genérica</Link>
        <Link to="/final">Final</Link>
        <Link to="/Dragoes">Dragões</Link>
        
        
    </nav>
  )
}

export default Navbar
