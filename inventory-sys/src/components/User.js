import React from 'react'

export const User = () => {
    return (
        <>
            <h2>Añadir Usuario</h2>
            <div className='form-container'>
                <form className='create-form'>
                    <div id="permisos" className='form-entry type-select'>
                    <label>Tipo de Usuario:</label>
                    <select>
                        <option value='admin'>Administrador</option>
                        <option value='user'>Usuario</option>
                    </select>
                    </div>
                    <div id='nombre' className='form-entry type-input'>
                        <label>Nombre</label>
                        <input type='text' placeholder='Nombre' />
                    </div>
                </form>
            </div>

        </>
    )
}
