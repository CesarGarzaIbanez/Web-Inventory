import React from 'react';
import { Routes, Route, BrowserRouter, NavLink } from 'react-router-dom';
import { Create } from '../components/Create'
import { Table } from '../components/Table'
import { User } from '../components/User'


export const MainRouter = () => {
    return (
        <BrowserRouter>
            <header className="header">
                <h1>Nombre de la App</h1>

                <nav className="navbar">
                    <ul>
                        <li> <NavLink to="/actualizar">Añadir</NavLink></li>
                        <li> <NavLink to="/usuario">Añadir usuario</NavLink></li>
                        <li><NavLink to="/tabla">Tabla</NavLink></li>
                        <li><NavLink to="/tabla">Cerrar Sesión</NavLink></li>
                    </ul>
                </nav>
            </header>

            
            <main className="content">

                <Routes>
                    <Route path='/actualizar' element={<Create />} />
                    <Route path='/usuario' element={<User />} />
                    <Route path='/tabla' element={<Table />} />
                    <Route path='*' element={<Table />} />
                </Routes>
            </main>

        </BrowserRouter>
    )
}
