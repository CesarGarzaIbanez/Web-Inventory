import React from 'react';
import { Routes, Route, BrowserRouter, NavLink } from 'react-router-dom';
import { Create } from '../components/Create'
import { Table } from '../components/Table'
import { CreateUser } from '../components/CreateUser'
import {Users} from '../components/Users'


export const MainRouter = () => {
    return (
        <BrowserRouter>
            <header className="header">
                <h1>Nombre de la App</h1>

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
                    <Route path='/tabla' element={<Table />} />
                    <Route path='*' element={<Table />} />
                </Routes>
            </main>

        </BrowserRouter>
    )
}
