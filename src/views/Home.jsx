import { useContext } from "react"
import { userContext } from "../context/UserProvider"
import { Link } from "react-router-dom"

const Home = () => {
  
  const { user, signIn, signOut} = useContext(userContext)

  return (
    <div>
      <h1>Home</h1>
     {user ? <h2 className="text-success">conectado</h2> 
           : <h2 className="text-danger">desconectado</h2> }
      
      {user ? (
        <>
              <button
              className="btn btn-danger"
              onClick={signOut}  
              
              >Cerrar sesion
            </button>

              <Link to="/protegida" className="btn btn-success">protegida</Link>
        </>
      )    : (

      <button
        className="btn btn-primary"
        onClick={signIn}  
        
        >Iniciar sesion
      </button>
      )}
    </div>
  )
}

export default Home