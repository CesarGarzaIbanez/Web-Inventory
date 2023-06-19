import React, { useEffect, useState } from 'react'
import { columns, data } from '../helpers/tables.js'

export const Search = ({ setColumnsState, setTableState, setDataState, deptData }) => {
    const [tableName, setTableName] = useState('pc')
    const [columnName, setColumnName] = useState('tipo')
    const [search, setSearch] = useState('');

    useEffect(()=>{
        filterData(search);
    }, [columnName,search]);

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
            case 'pc':
                setColumnsState(columns[0]);
                break;
            case 'computadoras':
                setColumnsState(columns[1]);
                break;
            case 'monitores':
                setColumnsState(columns[2]);
                break;
            case 'accesspoint':
                setColumnsState(columns[3]);
                break;
            case 'general':
                setColumnsState(columns[4]);
                break;
            default:
                setColumnsState(columns[0]);
                break;
        }


    }

    const filterData = (search) =>{
        if (deptData.some(item => item[columnName])) {
            setDataState(deptData.filter(item => item[columnName].toLowerCase().includes(search)))
         }
    }

    const columnFilter = (e) => {
        setColumnName(e.target.value);
    }

    const searchFilter = (e) => {
        setSearch(e.target.value);

        filterData(search);
    }

    const changeDept = (e) => {
        console.log(e.target.value);
    }

    return (
        <>

            {/* Lista de los elementos */}
            <div className='lists'>
                <select onChange={changeTable} className='type-list'>
                    <option value='pc'>PC</option>
                    <option value='computadoras'>Computadoras</option>
                    <option value='monitores'>Monitores</option>
                    <option value='accesspoint'>Access Point</option>
                    <option value='general'>General</option>
                </select>

                {/* Lista de los Departamentos */}

                <select onChange={changeDept} className='loc-list'>
                    <option value='departamentos'>Todos los departamentos</option>
                    <option value="acopio">Acopio</option>
                    <option value="acopio entregado">Acopio Entregado</option>
                    <option value="antenas">Antenas</option>
                    <option value="auditorio">Auditorio</option>
                    <option value="aulas">Aulas</option>
                    <option value="biblioteca">Biblioteca</option>
                    <option value="caadi">CAADI</option>
                    <option value="centro de computo (M2)">Centro de Cómputo (M2)</option>
                    <option value="cie">CIE</option>
                    <option value="contrapunto">Contrapunto</option>
                    <option value="cubiculos">Cubículos</option>
                    <option value="deportes">Deportes</option>
                    <option value="direccion">Dirección</option>
                    <option value="dti">DTI</option>
                    <option value="equipo portatil">Equipo Portátil</option>
                    <option value="multimedia 1">Multimedia 1</option>
                    <option value="multimedia 3">Multimedia 3</option>
                    <option value="posgrado">Posgrado</option>
                    <option value="sala de maestros">Sala de Maestros</option>
                    <option value="sociedad de alumnos">Sociedad de Alumnos</option>
                    <option value="site">SITE</option>
                </select>
            </div>


            <div className='search-filters'>

                {/* Lista de las columnas */}

                <select onChange={columnFilter} className='filter-list'>
                    <option value="tipo">Tipo</option>
                    {tableName === 'pc' ? (<>
                        <option value="pc">PC</option>
                        <option value="monitor">Monitor</option>
                    </>) : null}
                    {tableName !== 'pc' ? (
                        <>
                            <option value="marca">Marca</option>
                            <option value="modelo">Modelo</option>
                        </>) : null}
                    {tableName === 'computadoras' ? (
                        <>
                            <option value="cpu">CPU</option>
                            <option value="ram">RAM</option>
                            <option value="almacenamiento">Almacenamiento</option>
                            <option value="disco">Disco</option>
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

                    {tableName !== 'pc' ? (
                        <>
                            <option value="serie">Serie</option>
                            <option value="activo">Activo</option>
                        </>) : null}

                    <option value="lugar">Lugar</option>
                </select>


                <input onChange={searchFilter} className='search-input'
                    type='text'
                    placeholder='Reemplazar por la seleccion'></input>
            </div>

        </>

    )
}
