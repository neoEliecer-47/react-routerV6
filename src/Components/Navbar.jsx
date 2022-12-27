import { useContext } from "react"
import { Link, NavLink } from "react-router-dom"
import { userContext } from "../context/UserProvider"




const Navbar = () => {
  
  const {user} = useContext(userContext)

  return (
    <nav className="navbar navbar-dark bg-warning">
        
        <div className="container">
        <Link to="/">{
          user ? '🧑EliecerSmora  🟢Online' : '🔴Offline'}
        </Link>
        <NavLink className="btn btn-outline-secondary" to="/">Home</NavLink> 
        <NavLink className="btn btn-outline-primary" to="/blog">Blog</NavLink>
        <NavLink className="btn btn-outline-primary" to="/contacto">Contacto</NavLink>
        <NavLink className="btn btn-outline-dark" to="/tienda">Tienda</NavLink>
        </div>
        
        {/*los link son basicamente anclas comunes de html pero es la manera de hacerlo en react por medio de react-router-dom */}

    </nav>
  )
}

export default Navbar