import React, { useState } from 'react'

export const CreateUser = () => {

    const [formValues, setFormValues] = useState({});

    const submitForm = (e) =>{
        e.preventDefault();
        let data = e.target;
        let formValues = {
            permisos: data.permisos.value,
            nombre: data.nombre.value,
            usuario: data.usuario.value,
            contrasena: data.contrasena.value,
            email: data.email.value
        }

        console.log(formValues)
        setFormValues(formValues);
    }
    return (
        <>
            <h2>Añadir Usuario</h2>
            <div className='form-container'>
                <form onSubmit={submitForm}>
                    <div className='user-form'>


                        <div id="permisos" className='form-entry type-select'>
                            <label>Permisos:</label>
                            <select name='permisos'>
                                <option value='user'>Usuario</option>
                                <option value='admin'>Administrador</option>
                            </select>
                        </div>
                        <div id='nombre' className='form-entry type-input'>
                            <label>Nombre</label>
                            <input name='nombre' type='text' placeholder='Nombre' />
                        </div>
                        <div id='usuario' className='form-entry type-input'>
                            <label>Usuario</label>
                            <input name='usuario' type='text' placeholder='Usuario' />
                        </div>
                        <div id='contraseña' className='form-entry type-input'>
                            <label>Contraseña</label>
                            <input name='contrasena' type='password' placeholder='Contraseña' />
                        </div>
                        <div id='email' className='form-entry type-input'>
                            <label>Email</label>
                            <input name='email' type='email' placeholder='Email' />
                        </div>

                    </div>
                    <input className='update-button' id="actualizar" type='submit' value='Actualizar' />
                </form>
            </div>

        </>
    )
}
