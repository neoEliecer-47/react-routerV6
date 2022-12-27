import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {BrowserRouter, Routes, Route} from 'react-router-dom'

import "bootstrap/dist/css/bootstrap.min.css";

//vistas
import Blog from './views/Blog';
import Contacto from './views/Contacto';
import Home from './views/Home';
import NoEncontrada from './views/NoEncontrada';
import Post from './views/Post';
import UserProvider from './context/UserProvider';
import RutaProtegida from './views/RutaProtegida';
import VerificarUsuario from './Components/VerificarUsuario';

                        //el error tiene que ver con el INDEX de la primera ruta
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
    <BrowserRouter>
        <UserProvider> {/*todo lo que este dentro del userProvider, podra utilizar sus componentes */}
            <Routes>

                <Route path="/" element={<App  />} >

                    <Route index element={<Home />} />
                    <Route path="blog" element={<Blog />} />
                    <Route path="blog/:id" element={<Post />} />
                    <Route path="contacto" element={<Contacto />} />
                    
                    
                    <Route path="protegida" element={ //middelware 
                        <VerificarUsuario>
                            <RutaProtegida />
                        </VerificarUsuario>
                    } />
            
                    <Route path="*" element={<NoEncontrada />} /> {/*si no coincide ninguna ruta */}
                </Route>
       
            </Routes>
            {/*el path es la url qe se pinta en el navegador*/}
        </UserProvider>
    </BrowserRouter>
  
)