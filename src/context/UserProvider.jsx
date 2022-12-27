import { createContext, useState } from "react"

//hook
    export const userContext = createContext() //el user context va a envolver a los otros componentes para poder ser utilizados en otros componentes

const UserProvider = (props) => {  
  
  const [user, setUser] = useState(false)  

    const signIn = () => setUser(true)

    const signOut = () => setUser(false)

    return (
    
      <userContext.Provider value={{ user, signIn, signOut}}>
        {props.children}{ /*los otros componentes viajran en el children. es importante el uso del value para sacar todos los metodos y componentes que seran globales*/}
      </userContext.Provider>
  )
}

export default UserProvider