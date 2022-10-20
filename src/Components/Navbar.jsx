import { NavLink } from "react-router-dom"




const Navbar = () => {
  
  return (
    <nav className="navbar navbar-dark bg-dark">
        
        <div className="container">

        <NavLink className="btn btn-outline-primary" to="/">  Home </NavLink> 
        <NavLink className="btn btn-outline-primary" to="/blog"> Blog </NavLink>
        <NavLink className="btn btn-outline-primary" to="/contacto"> Contacto </NavLink>
        </div>
        
        {/*los link son basicamente anclas comunes de html pero es la manera de hacerlo en react por medio de react-router-dom */}

    </nav>
  )
}

export default Navbar