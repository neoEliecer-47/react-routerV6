import {  useContext } from "react"
import { Navigate } from "react-router-dom"
import { userContext } from "../context/UserProvider"


const VerificarUsuario = ({ children }) => {
  
  
    const {user} = useContext(userContext)
  
    //let location = useLocation()
    
    if(!user){//en caso de que el usuario no exista (false), lo redireccionamos
        console.log('inaccesible')
        return <Navigate to="/" /> //aunque la mejor manera seria retornar al usuario a una posible ruta login, para loguearse y poder entrar a rutas protgidas
    }
    
    return children //retornamos el children en caso de que usuario exista (true)
}

export default VerificarUsuario