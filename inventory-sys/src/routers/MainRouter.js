import React from 'react';
import { Routes, Route, BrowserRouter, NavLink } from 'react-router-dom';
import { Create } from '../components/Create'
import { Table } from '../components/Table'


export const MainRouter = () => {
    return (
        <BrowserRouter>
            <header className="header">
                <h1>Nombre de la App</h1>

                <nav className="navbar">
                    <ul>
                        <li> <NavLink to="/actualizar">Añadir</NavLink></li>
                        <li> <NavLink to="/tabla">Editar</NavLink></li>
                        <li><NavLink to="/tabla">Tabla</NavLink></li>
                    </ul>
                </nav>
            </header>

            
            <main className="content">

                <Routes>
                    <Route path='/actualizar' element={<Create />} />
                    <Route path='/tabla' element={<Table />} />
                    <Route path='*' element={<Table />} />
                </Routes>
            </main>

        </BrowserRouter>
    )
}
