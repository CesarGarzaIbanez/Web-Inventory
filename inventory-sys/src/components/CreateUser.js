import React, { useState } from 'react'
import jwtDecode from 'jwt-decode';
import { useNavigate } from 'react-router-dom';

export const CreateUser = () => {

    const navigate = useNavigate();

    const decodedToken = jwtDecode(localStorage.getItem('token'));
    const role = (decodedToken['http://schemas.microsoft.com/ws/2008/06/identity/claims/role'])
    const submitForm = (e) => {
        e.preventDefault();
        let data = e.target;
        let formValues = {
            role: data.role.value,
            username: data.username.value,
            password: data.password.value,
        }
        if(data.password.value === data.confirmPassword.value){
            registerUser(formValues)
        }else{
            alert('Las contraseñas no coinciden')
        }
    }

    const registerUser = async (data) => {
        try {
            const token = localStorage.getItem('token');

            // Verificar si el token existe antes de usarlo
            if (!token) {
                console.error('Token no encontrado en el localStorage');
                return;
            }
            const response = await fetch('https://webappinventory.azurewebsites.net/api/Auth/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                },
                body: JSON.stringify(data),
            });
            if (!response.ok) {
                throw new Error('Error en la solicitud');
            }
            // Recargar la pagina y redireccionar a tabla
            window.location.href = "/"
        } catch (error) {
            console.log(error)
        }
    }
    return (
        <>
            {role == "Admin" ? <>


                <h2>Añadir Usuario</h2>
                <div className='form-container'>
                    <form onSubmit={submitForm}>
                        <div className='user-form'>


                            <div id="permisos" className='form-entry type-select'>
                                <label>Permisos:</label>
                                <select name='role'>
                                    <option value='User'>Usuario</option>
                                    <option value='Admin'>Administrador</option>
                                </select>
                            </div>
                            <div id='usuario' className='form-entry type-input'>
                                <label>Usuario</label>
                                <input name='username' type='text' placeholder='Usuario' />
                            </div>
                            <div id='contraseña' className='form-entry type-input'>
                                <label>Contraseña</label>
                                <input name='password' type='password' placeholder='Contraseña' />
                            </div>
                            <div className='form-entry type-input'>
                            <label>Confirmar contraseña</label>
                                <input name="confirmPassword" type='password' placeholder='Confirmar Contraseña'></input>
                            </div>

                        </div>
                        <input className='update-button' id="actualizar" type='submit' value='Actualizar' />
                    </form>
                </div>
            </> :
                <h1>Accesso Restringido</h1>}
        </>
    )
}
