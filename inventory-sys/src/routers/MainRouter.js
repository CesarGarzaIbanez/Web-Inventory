import React from 'react';
import { Routes, Route, BrowserRouter, NavLink } from 'react-router-dom';
import { Create } from '../components/Create'
import { Table } from '../components/Table'
import { CreateUser } from '../components/CreateUser'
import { Users } from '../components/Users'
import DTIsvg from '../helpers/DTIsvg';
import { useEffect, useState } from "react";




export const MainRouter = () => {

  const [computadoras, setComputadoras] = useState();
  const [accesspoints, setAccesspoints] = useState();
  const [monitores, setMonitores] = useState();
  const [impresoras, setImpresoras] = useState();
  const [generales, setGenerales] = useState();
  const [equipos, setEquipos] = useState();
  const [departamentos, setDepartamentos] = useState([]);

  useEffect(() => {
    getComputadoras();
    getAccesspoints();
    getMonitores();
    getImpresoras();
    getGenerales();
    getEquipos();
    getDepartamentos();
  }, []);

  const eraseDepto = (data) => {
    const eresedData = data.map(({ departamento: { nombre: departamento }, ...rest }) => ({ ...rest, departamento }))
    return eresedData
  }

  const transformarDatos = (equipos) => {
    const equiposTransformados = equipos.map((equipo) => {
      const monitoresActivos = equipo.monitores.map((monitor) => monitor.activo).join(',');

      const departamento = equipo.computadora.departamento.nombre;
      const activoComp = equipo.computadora.activo;

      return {
        equipoId: equipo.equipoId,
        computadoraId: equipo.computadoraId,
        departamento,
        activoComp,
        activoMon: monitoresActivos,
        tipo: equipo.tipo,
        area: equipo.area
      };
    });

    return equiposTransformados;
  }

  const getDepartamentos = async () => {
    try {
      const response = await fetch('https://localhost:7271/api/Departamentos', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        }
      });
      const data = await response.json();
      setDepartamentos(data)
    } catch (error) {
      console.log(error)
    }
  }

  const getComputadoras = async () => {
    try {
      const response = await fetch('https://localhost:7271/api/Computadoras', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        }
      });
      const data = await response.json();
      setComputadoras(eraseDepto(data));
    } catch (error) {
      console.log(error)
    }
  }


  const getAccesspoints = async () => {
    try {
      const response = await fetch('https://localhost:7271/api/Accesspoints', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        }
      });
      const data = await response.json();
      setAccesspoints(eraseDepto(data));
    } catch (error) {
      console.log(error)
    }
  }

  const getMonitores = async () => {
    try {
      const response = await fetch('https://localhost:7271/api/Monitores', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        }
      });
      const data = await response.json();
      setMonitores(eraseDepto(data));
    } catch (error) {
      console.log(error)
    }
  }

  const getImpresoras = async () => {
    try {
      const response = await fetch('https://localhost:7271/api/Impresoras', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        }
      });
      const data = await response.json();
      setImpresoras(eraseDepto(data));
    } catch (error) {
      console.log(error);
    }
  }

  const getGenerales = async () => {
    try {
      const response = await fetch('https://localhost:7271/api/Generales', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        }
      });
      const data = await response.json();
      setGenerales(eraseDepto(data));
    } catch (error) {
      console.log(error);
    }
  }

  const getEquipos = async () => {
    try {
      const response = await fetch('https://localhost:7271/api/Equipos',
        {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json'
          }
        });
      const data = await response.json();
      setEquipos(transformarDatos(data))
    } catch (error) {
      console.log(error)
    }
  }


  return (
    <BrowserRouter>
      <header className="header">
        <DTIsvg />
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
          <Route path='/tabla' element={<Table
            computadoras={computadoras}
            accesspoints={accesspoints}
            monitores={monitores}
            impresoras={impresoras}
            generales={generales}
            equipos={equipos}
            departamentos={departamentos} />} />
          <Route path='*' element={<Table
            computadoras={computadoras}
            accesspoints={accesspoints}
            monitores={monitores}
            impresoras={impresoras}
            generales={generales}
            equipos={equipos}
            departamentos={departamentos} />} />
        </Routes>
      </main>

    </BrowserRouter>
  )
}
