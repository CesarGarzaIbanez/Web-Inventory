import React from 'react';
import { Routes, Route, BrowserRouter, NavLink } from 'react-router-dom';
import { Create } from '../components/Create'
import { Table } from '../components/Table'
import { CreateUser } from '../components/CreateUser'
import {Users} from '../components/Users'
import DTIsvg from '../helpers/DTIsvg';
import { useEffect, useState } from "react";




export const MainRouter = () => {

    const [computadoras, setComputadoras] = useState([]);

    useEffect(() => {
      getComputadoras();
    }, []);
  
    const getComputadoras = async () => {
      try {
        const response = await fetch('https://localhost:7271/api/Computadoras', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json'
          }
        });
        const data = await response.json();
        setComputadoras(data);
      } catch (error) {
        console.log(error)
      }
    }
  
    return (
        <BrowserRouter>
            <header className="header">
                <DTIsvg/>
                <nav className="navbar">
                    <ul>
                        <li> <NavLink to="/actualizar">Añadir</NavLink></li>
                        <li><NavLink to="/tabla">Tabla</NavLink></li>
                        <li> <NavLink to="/anadir-usuario">Añadir usuario</NavLink></li>
                        <li> <NavLink to="/usuarios">Usuarios</NavLink></li>
                        <li><NavLink to="/tabla">Cerrar Sesión</NavLink></li>
                    </ul>
                </nav>
            </header>


            <main className="content">

                <Routes>
                    <Route path='/actualizar' element={<Create />} />
                    <Route path='/anadir-usuario' element={<CreateUser />} />
                    <Route path='/usuarios' element={<Users />} />
                    <Route path='/tabla' element={<Table computadoras={computadoras} />} />
                    <Route path='*' element={<Table computadoras={computadoras} />} />
                </Routes>
            </main>

        </BrowserRouter>
    )
}
