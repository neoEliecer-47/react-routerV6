import { Outlet } from "react-router-dom"
import Navbar from "./Components/Navbar.jsx"


const App = () => {
  
  
  return (
    <div>
        <Navbar />
        
        <div className="container">
          <Outlet />
        </div>
    </div>
  )
}

export default App