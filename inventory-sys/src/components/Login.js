import React, { useEffect, useState } from 'react'
import DTILoginSvg from '../helpers/DTILoginSvg'
import jwtDecode from 'jwt-decode';


export const Login = ({handleLogin}) => {
    const [error,setError]=useState(false)
    const [showPassword, setShowPassword] = useState(false)

    useEffect(()=>{
      if(error){
        setTimeout(() => {
          setError(false)
        }, 2000);
      }
    },[error])

    const viewPassword = ()=>{
      setShowPassword(!showPassword)
    }

    const login = async (data) => {
        try {
          const response = await fetch('https://webappinventory.azurewebsites.net/api/Auth/login', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(data),
          });
          const res = await response.text();

          try {
            const decodedToken = await jwtDecode(res);
            console.log('Token decodificado:', decodedToken);
            console.log("Hurray")
            localStorage.setItem('token', res)
            handleLogin(res)
            window.location.href = "/"
          } catch (error) {
            setError(true)
            console.error('Error al decodificar el token:', error);
          }

        } catch (error) {
        //   console.log(error)
        }
      }

     

      const submitLogin = (e)=>{
        e.preventDefault();
        let data = e.target;
        let loginInfo = {
            username: data.user.value,
            password: data.password.value
        }
        console.log(JSON.stringify(loginInfo))
        login(loginInfo)
      }
    return (
        <div className='login'>
            <div className='login-logo'>
            <DTILoginSvg />
            </div>
            {error&&alert('Credenciales Incorrectas')}
            <form onSubmit={submitLogin} 
            className='form-login'>
              
                <h1>Inicia Sesión</h1>
                <div className='form-login-input'>
                    <label>Usuario</label>
                    <input name='user' type='text'></input>
                </div>
                

                <div className='form-login-input'>
                    <label>Contraseña</label>
                    <div className='password-input'>
                    <input name='password' type={showPassword ? 'text': 'password'}></input>
                    <span onClick={viewPassword}>Ver Contraseña</span>
                    </div>
                </div>
                <div className='button-login-container'>

                <input className='button-login' type='submit' value="Acceder"></input>
                </div>
            </form>
        </div>
    )
}
