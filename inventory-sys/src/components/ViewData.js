import React, { useEffect, useState } from 'react'
import { FaCircleXmark } from 'react-icons/fa6'
import { Delete } from './Delete';

export const ViewData = ({ setViewData, selectedData, departamentos, tableState, computadoras, monitores }) => {

    const [fetchUrl, setFetchUrl] = useState();
    const [deleteState, setDeleteState] = useState(false);

    useEffect(() => {
        changeFetchUrl();
    }, [tableState, deleteState])

    // Mostrar o no la información al dar click en las filas
    const toggleViewData = () => {
        setViewData(false);
    }
    // Cambiar los fetchs, agregada la funcionalidad de escuchar por el delete para adecuar los url a ese fetch
    const changeFetchUrl = () => {
        const databaseURL = 'https://webappinventory.azurewebsites.net/api/';

        switch (tableState) {
            case 'EQUIPO':
                setFetchUrl(databaseURL + 'Equipos/' + selectedData.equipoId)
                break;
            case 'COMPUTADORAS':
                setFetchUrl(databaseURL + 'Computadoras')
                if (deleteState) {
                    setFetchUrl(databaseURL + 'Computadoras/' + selectedData.computadoraId)
                }
                break;
            case 'MONITORES':
                setFetchUrl(databaseURL + 'Monitores')
                if (deleteState) {
                    setFetchUrl(databaseURL + 'Monitores/' + selectedData.monitorId)
                }
                break;
            case 'IMPRESORAS':
                setFetchUrl(databaseURL + 'Impresoras')
                if (deleteState) {
                    setFetchUrl(databaseURL + 'Impresoras/' + selectedData.impresoraId)
                }
                break;
            case 'ACCESSPOINT':
                setFetchUrl(databaseURL + 'Accesspoints')
                if (deleteState) {
                    setFetchUrl(databaseURL + 'Accesspoints/' + selectedData.accesspointId)
                }
                break;
            case 'GENERAL':
                setFetchUrl(databaseURL + 'Generales')
                if (deleteState) {
                    setFetchUrl(databaseURL + 'Generales/' + selectedData.generalId)
                }
                break;
        }
    }

    // Peticion PUT
    const putData = async (data) => {
        try {
        const token = localStorage.getItem('token');

        // Verificar si el token existe antes de usarlo
        if (!token) {
          console.error('Token no encontrado en el localStorage');
          return;
        }
            const response = await fetch(fetchUrl, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                },
                body: JSON.stringify(data),
            });
            if (!response.ok) {
                throw new Error('Error en la solicitud');
            }
            const responseData = await response;
            window.location.href = "/"
            console.log(responseData)
        } catch (error) {
            console.log(error)
        }
    }

    // Dar estructura a los datos, parecidos al POST
    const defineDataStructure = (data) => {
        let formValues = {
            tipo: selectedData.tipo,
            departamentoId: data.departamentoId.value,
            area: data.area.value
        }

        if (tableState != 'EQUIPO') {
            formValues.marca = selectedData.marca;
            formValues.modelo = selectedData.modelo;
            formValues.serie = selectedData.serie;
            formValues.activo = selectedData.activo;
        }

        if (tableState === 'MONITORES' || tableState === 'GENERAL') {
            formValues.caracteristicas = selectedData.caracteristicas;
        }

        switch (tableState) {
            case 'EQUIPO':
                formValues.equipoId = selectedData.equipoId;
                formValues.activoComputadora = data.activoComputadora.value
                formValues.activoMonitor = data.activoMonitor.value
                break;

            case 'MONITORES':
                formValues.monitorId = selectedData.monitorId;
                break;
            case 'GENERAL':
                formValues.generalId = selectedData.generalId;
                break;
            case 'IMPRESORAS':
                formValues.impresoraId = selectedData.impresoraId;
                formValues.tinta = selectedData.tinta;
                formValues.c = data.c.value;
                if (formValues.c == "") {
                    delete formValues.c
                }
                formValues.m = data.m.value;
                if (formValues.m == "") {
                    delete formValues.m
                }
                formValues.y = data.y.value;
                if (formValues.y == "") {
                    delete formValues.y
                }
                formValues.k = data.k.value;
                if (formValues.k == "") {
                    delete formValues.k
                }
                formValues.cmyk = data.cmyk.value;
                if (formValues.cmyk == "") {
                    delete formValues.cmyk
                }
                break;
            case 'COMPUTADORAS':
                formValues.computadoraId = selectedData.computadoraId
                formValues.cpu = data.cpu.value;
                formValues.ram = data.ram.value;
                formValues.almacenamiento = data.almacenamiento.value;
                formValues.disco = data.disco.value;
                formValues.ip = data.ip.value;
                break;

            case 'ACCESSPOINT':
                formValues.accesspointId = selectedData.accesspointId;
                formValues.puerto = data.puerto.value;
            default:
                break;
        }

        return formValues

    }

    // Función implementada igualmente en POST, dar estructura al json de equipo
    const preparePostEquipo = (formValues) => {
        if (computadoras) {
            const objeto = computadoras.find(obj => obj.activo == formValues.activoComputadora);
            if (objeto) {
                formValues.computadoraId = objeto['computadoraId'];
            }
        }
        if (monitores) {
            let idArrays = []
            const arrayMonitores = formValues.activoMonitor.split(',')
            const activosMonitores = arrayMonitores.map(value => Number(value));
            activosMonitores.forEach(activo => {
                const objeto = monitores.find(obj => obj.activo == activo);
                if (objeto) {
                    idArrays.push(objeto['monitorId'])
                }

            });
            formValues.monitorIds = idArrays
        }
        delete formValues.activoComputadora
        delete formValues.activoMonitor
    }
    // Función ejecutada al enviar el formulario
    const updateData = (e) => {
        e.preventDefault()
        let data = e.target
        let formValues = defineDataStructure(data)
        if (tableState === 'EQUIPO') {
            preparePostEquipo(formValues);
        }
        putData(formValues)
    }

    // Mostrar la ventana de confirmación del DELETE
    const toggleDelete = () => {
        setDeleteState(!deleteState);
    };

    return (
        <>
            {deleteState && <Delete
                selectedData={selectedData}
                setDeleteState={setDeleteState}
                fetchUrl={fetchUrl} />}

            <div className='view-data-container'>
                <div className='info-container'>
                    <div className='header-view-data'>
                        <div className='view-data'>
                            <div>
                                <h1>ACTUALIZAR</h1>
                                <h2>{selectedData.tipo}</h2>
                            </div>
                            <div className='form-view-data'>
                                <form onSubmit={updateData}>
                                    {selectedData.tipo.toLowerCase() == 'equipo' && (
                                        <>
                                            <div className='form-entry view-data-entry'>
                                                <label>Activo Computadora</label>
                                                <input
                                                    name='activoComputadora'
                                                    placeholder='Activo Monitor'
                                                    defaultValue={selectedData.activoComp} />
                                            </div>
                                            <div className='form-entry view-data-entry'>
                                                <label>Activo Monitor</label>
                                                <input
                                                    name='activoMonitor'
                                                    placeholder='Activo Monitor'
                                                    defaultValue={selectedData.activoMon} />
                                            </div>
                                        </>

                                    )}

                                    {selectedData.tipo.toLowerCase() == 'computadora' || selectedData.tipo.toLowerCase() == 'laptop' ? (
                                        <>
                                            <div className='form-entry view-data-entry'>
                                                <label>CPU</label>
                                                <input name='cpu' type='text' placeholder='CPU'
                                                    defaultValue={selectedData.cpu} />
                                            </div>

                                            <div className='form-entry view-data-entry'>
                                                <label>RAM</label>
                                                <input name='ram' type='number' placeholder='RAM'
                                                    defaultValue={selectedData.ram} />
                                            </div>

                                            <div className='form-entry view-data-entry'>
                                                <label>Almacenamiento</label>
                                                <input name='almacenamiento' type='text' placeholder='Almacenamiento'
                                                    defaultValue={selectedData.almacenamiento} />
                                            </div>

                                            <div className='form-entry view-data-entry'>
                                                <label>Disco</label>
                                                <input name='disco' type='text' placeholder='Disco'
                                                    defaultValue={selectedData.disco} />
                                            </div>

                                            <div className='form-entry view-data-entry'>
                                                <label>IP</label>
                                                <input name='ip' type='text' placeholder='IP'
                                                    defaultValue={selectedData.ip} />
                                            </div>
                                        </>
                                    ) : null}

                                    {selectedData.tipo.toLowerCase() == 'accesspoint' && (

                                        <>
                                            <div className='form-entry view-data-entry'>
                                                <label>Puerto</label>
                                                <input name='puerto' type='text' placeholder='Puerto'
                                                    defaultValue={selectedData.puerto} />
                                            </div>
                                        </>
                                    )}

                                    {selectedData.tipo.toLowerCase() == 'impresora' && (
                                        <>
                                            <div className='form-entry view-data-entry'>
                                                <label>C</label>
                                                <input name='c' type='date' placeholder='C'
                                                    defaultValue={selectedData.c} />
                                            </div>
                                            <div className='form-entry view-data-entry'>
                                                <label>M</label>
                                                <input name='m' type='date' placeholder='M'
                                                    defaultValue={selectedData.m} />
                                            </div>
                                            <div className='form-entry view-data-entry'>
                                                <label>Y</label>
                                                <input name='y' type='date' placeholder='Y'
                                                    defaultValue={selectedData.y} />
                                            </div>
                                            <div className='form-entry view-data-entry'>
                                                <label>K</label>
                                                <input name='k' type='date' placeholder='K'
                                                    defaultValue={selectedData.k} />
                                            </div>
                                            <div className='form-entry view-data-entry'>
                                                <label>CMYK</label>
                                                <input name='cmyk' type='date' placeholder='C'
                                                    defaultValue={selectedData.cmyk} />
                                            </div>
                                        </>
                                    )}


                                    <div className='form-entry view-data-entry'>
                                        <label>Departamentos</label>
                                        <select defaultValue={selectedData.departamentoId} name='departamentoId' className='loc-list'>
                                            {departamentos
                                                .sort((a, b) => a.nombre.localeCompare(b.nombre)) // Ordenar por dept.nombre
                                                .map((dept) => (
                                                    <option key={dept.departamentoId} value={dept.departamentoId}>
                                                        {dept.nombre}
                                                    </option>
                                                ))}
                                        </select>
                                    </div>

                                    <div className='form-entry view-data-entry'>
                                        <label>Area</label>
                                        <input
                                            name='area'
                                            placeholder='Area'
                                            defaultValue={selectedData.area} />
                                    </div>
                                    <div className='view-data-buttons'>
                                        <input className='update-button' type='submit' value='Actualizar' />

                                        <input className='delete-button'
                                            type='button'
                                            value='Eliminar'
                                            onClick={toggleDelete} />
                                    </div>
                                </form>

                            </div>


                        </div>
                        <FaCircleXmark onClick={toggleViewData} className='FaCircleXmark' />
                    </div>
                </div>
            </div >
        </>
    )
}
