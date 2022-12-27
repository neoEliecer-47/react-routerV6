import { Outlet } from "react-router-dom"
import Navbar from "./Components/Navbar"


const App = () => {
  
  {/* el app seria como nuestra plantilla donde podria ir aun mas cosas */}
  return (
    <div>
        <Navbar />
        
        <div className="container">
          <Outlet /> {/* en el outlet viajan todos los componentes y se posicionan */}
        </div>
    </div>
  )
}

export default App