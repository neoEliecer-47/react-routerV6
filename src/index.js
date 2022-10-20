import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import "bootstrap/dist/css/bootstrap.min.css";
import {BrowserRouter, Routes, Route} from 'react-router-dom'

//vistas
import Blog from './Routes/Blog';
import Contacto from './Routes/Contacto';
import Home from './Routes/Home';
import NoEncontrada from './Routes/NoEncontrada';
import Post from './Routes/Post';

                        //el error tiene que ver con el INDEX de la primera ruta
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
    <BrowserRouter>
    <Routes>

            <Route path="/" element={<App  />} >

                <Route index element={<Home />} />
                <Route path="blog" element={<Blog />} />
                <Route path="blog/:id" element={<Post />} />
                <Route path="contacto" element={<Contacto />} />
                <Route path="*" element={<NoEncontrada />} /> {/*si no coincide ninguna ruta */}

            
            </Route>
       
    </Routes>
            {/*el path es la url qe se pinta en el navegador*/}
    
    </BrowserRouter>
  
)