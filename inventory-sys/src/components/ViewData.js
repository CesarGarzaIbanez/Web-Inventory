import React from 'react'
import { FaCircleXmark } from 'react-icons/fa6'

export const ViewData = ({ setViewData, selectedData, departamentos }) => {
    const toggleViewData = () => {
        setViewData(false);
    }
    console.log(departamentos)

    console.log(selectedData)
    return (
        <div className='view-data-container'>
            <div className='info-container'>
                <div className='header-view-data'>
                    <div className='view-data'>
                        <div>
                            <h1>ACTUALIZAR</h1>
                            <h2>{selectedData.tipo}</h2>
                        </div>

                        <div className='form-view-data'>
                            <form>
                                {selectedData.tipo.toLowerCase() == 'equipo' && (
                                    <>
                                        <div className='form-entry view-data-entry'>
                                            <label>Activo Computadora</label>
                                            <input
                                                placeholder='Activo Monitor'
                                                defaultValue={selectedData.activoComp} />
                                        </div>
                                        <div className='form-entry view-data-entry'>
                                            <label>Activo Monitor</label>
                                            <input
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
                                            <input name='puerto' type='text' placeholder='Puerto' />
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
                                    <select className='loc-list'>
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
                                        placeholder='Area'
                                        defaultValue={selectedData.area} />
                                </div>
                                <div className='view-data-buttons'>
                                    <input className='update-button' type='submit' value='Actualizar' />

                                    <input className='delete-button' type='submit' value='Eliminar' />
                                </div>
                            </form>

                        </div>


                    </div>
                    <FaCircleXmark onClick={toggleViewData} className='FaCircleXmark' />
                </div>
            </div>
        </div >
    )
}
