import React, { useEffect, useState } from 'react'
import { columns, data } from '../helpers/tables.js'

export const Search = ({ setColumnsState, setTableState, setDataState, deptData, dataState, departamentos }) => {
    const [tableName, setTableName] = useState('equipo')
    const [columnName, setColumnName] = useState('tipo')
    const [search, setSearch] = useState('');
    const [departamentoState, setDepartamentoState] = useState('departamentos');

    useEffect(() => {
        filterData(search);
    }, [columnName, search, departamentoState]);

    // Leer el evento de cambio de tipo de tabla que se necesita
    const changeTable = (e) => {
        let table = e.target.value;
        filterTable(table);
        setTableState(table.toUpperCase());
        setTableName(table);
    }

    // Elegir que array con el nombre de columnas va a consumir
    const filterTable = (table) => {
        switch (table) {
            case 'equipo':
                setColumnsState(columns[0]);
                break;
            case 'computadoras':
                setColumnsState(columns[1]);
                break;
            case 'monitores':
                setColumnsState(columns[2]);
                break;
            case 'impresoras':
                setColumnsState(columns[3]);
                break;
            case 'accesspoint':
                setColumnsState(columns[4]);
                break;
            case 'general':
                setColumnsState(columns[5]);
                break;
            default:
                setColumnsState(columns[0]);
                break;
        }

    }

    // Filtrar los datos segun la entrada dentro de la barra de busqueda
    const filterData = (search) => {
        let filtData = dataState;
        if (departamentoState == "departamentos") {
            if (deptData.some(item => item[columnName])) {
                filtData = (deptData.filter(item => item[columnName].toString().toLowerCase().includes(search.toLowerCase())))
            }
        }

        if (departamentoState != "departamentos" && !search) {
            filtData = (deptData.filter(item => item['departamento'].toLowerCase() == (departamentoState.toLowerCase())))
        }

        if (departamentoState != "departamentos" && search) {
            filtData = (deptData.filter(item => item['departamento'].toLowerCase() == (departamentoState.toLowerCase())))

            filtData = (filtData.filter(item => item[columnName].toString().toLowerCase().includes(search.toLowerCase())))
        }

        setDataState(filtData)
        console.log(filtData)

    }

    const columnFilter = (e) => {
        setColumnName(e.target.value);
    }

    // Leer el evento del buscador
    const searchFilter = (e) => {
        setSearch(e.target.value);
    }

    const changeDept = (e) => {
        console.log(e.target.value);
        setDepartamentoState(e.target.value);
    }
    return (
        <>

            {/* Lista de los elementos */}
            <div className='lists'>
                <select onChange={changeTable} className='type-list'>
                    <option value='equipo'>Equipos</option>
                    <option value='computadoras'>Computadoras</option>
                    <option value='monitores'>Monitores</option>
                    <option value='impresoras'>Impresoras</option>
                    <option value='accesspoint'>Access Point</option>
                    <option value='general'>General</option>
                </select>

                {/* Lista de los Departamentos */}

                <select onChange={changeDept} className='loc-list'>
                    <option value='departamentos'>Todos los departamentos</option>
                    {departamentos
                        .sort((a, b) => a.nombre.localeCompare(b.nombre)) // Ordenar por dept.nombre
                        .map((dept) => (
                            <option key={dept.departamentoId} value={dept.departamentoId}>
                                {dept.nombre}
                            </option>
                        ))}
                </select>
            </div>


            <div className='search-filters'>

                {/* Lista de las columnas */}

                <select onChange={columnFilter} className='filter-list'>
                    <option value="tipo">Tipo</option>
                    {tableName === 'equipo' ? (<>
                        <option value="activoComp">Computadora</option>
                        <option value="activoMon">Monitor</option>
                    </>) : null}
                    {tableName !== 'equipo' ? (
                        <>
                            <option value="marca">Marca</option>
                            <option value="modelo">Modelo</option>
                        </>) : null}

                    {tableName === 'impresoras' && (
                        <>
                            <option value="tinta">Tinta</option>
                            <option value="c">C</option>
                            <option value="m">M</option>
                            <option value="y">Y</option>
                            <option value="k">K</option>
                            <option value="cmyk">CMYK</option>

                        </>
                    )}
                    {tableName === 'computadoras' ? (
                        <>
                            <option value="cpu">CPU</option>
                            <option value="ram">RAM</option>
                            <option value="almacenamiento">Almacenamiento</option>
                            <option value="disco">Disco</option>
                            <option value="ip">IP</option>
                        </>) : null}
                    {tableName === 'monitores' ? (
                        <>
                            <option value="teclado">Teclado</option>
                            <option value="mouse">Mouse</option>
                        </>) : null}
                    {tableName === 'accesspoint' ? (
                        <>
                            <option value="puerto">Puerto</option>
                        </>) : null}

                    {tableName === 'general' || tableName === 'monitores' ? (<>
                        <option value="caracteristicas">Caracteristicas</option>
                    </>) : null}

                    {tableName !== 'equipo' ? (
                        <>
                            <option value="serie">Serie</option>
                            <option value="activo">Activo</option>
                        </>) : null}

                    <option value="area">Area</option>
                </select>


                <input onChange={searchFilter} className='search-input'
                    type='text'
                    placeholder='Reemplazar por la seleccion'></input>
            </div>

        </>

    )
}
