import React from 'react'

export const User = () => {
    return (
        <>
            <h2>Añadir Usuario</h2>
            <div className='form-container'>
                <form>
                    <div className='user-form'>


                        <div id="permisos" className='form-entry type-select'>
                            <label>Permisos:</label>
                            <select>
                                <option value='user'>Usuario</option>
                                <option value='admin'>Administrador</option>
                            </select>
                        </div>
                        <div id='nombre' className='form-entry type-input'>
                            <label>Nombre</label>
                            <input type='text' placeholder='Nombre' />
                        </div>
                        <div id='usuario' className='form-entry type-input'>
                            <label>Usuario</label>
                            <input type='text' placeholder='Usuario' />
                        </div>
                        <div id='contraseña' className='form-entry type-input'>
                            <label>Contraseña</label>
                            <input type='password' placeholder='Contrasña' />
                        </div>
                        <div id='email' className='form-entry type-input'>
                            <label>Email</label>
                            <input type='email' placeholder='Email' />
                        </div>

                    </div>
                    <input className='update-button' id="actualizar" type='submit' value='Actualizar' />
                </form>
            </div>

        </>
    )
}
