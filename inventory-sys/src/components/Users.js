import React, { useEffect, useState } from 'react'
import DataTable from 'react-data-table-component'
import jwtDecode from 'jwt-decode';
import ViewUserData from './ViewUserData';

export const Users = () => {
    const [users,setUsers] = useState()
    const [viewData,setViewData] = useState(false)
    const [userData,setUserData] = useState()

    useEffect(()=>{
        getUsers()
    },[])
    
    const decodedToken = jwtDecode(localStorage.getItem('token'));
    const role=(decodedToken['http://schemas.microsoft.com/ws/2008/06/identity/claims/role'])



    const getUsers = async () => {
        try {
          const token = localStorage.getItem('token');
    
          // Verificar si el token existe antes de usarlo
          if (!token) {
            console.error('Token no encontrado en el localStorage');
            return;
          }
          const response = await fetch('https://webappinventory.azurewebsites.net/api/Users', {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json',
              'Authorization': `Bearer ${token}`
            }
          });
          const data = await response.json();
          setUsers(data);
        } catch (error) {
          console.log(error)
        }
      }
    const customStyles = {

        table: {
            style: {
                backgroundColor: 'transparent',
            }
        },
        headCells: {
            style: {
                backgroundColor: '#0B2242',
                color: 'white',
                fontSize: '18px',
                justifyContent: 'center',
            },
        },

        cells: {
            style: {
                justifyContent: 'center',
                marginRight: '20px',
            }
        },

        rows: {
            style: {
                backgroundColor: 'rgba(237, 237, 237, 0.8)',
                borderStyle: 'none !important',
                borderWidth: 'none !important',
                borderColor: 'none !important',
            },
            stripedStyle: {
                backgroundColor: 'transparent',
                borderStyle: 'none !important',
                borderWidth: 'none !important',
                borderColor: 'none !important',
            },
        },

        pagination: {
            style: {
                backgroundColor: 'transparent',
                borderStyle: 'none !important',
                borderWidth: 'none !important',
                borderColor: 'none !important',
            }
        },

    };

    const usersCol = [{
        name: 'Permisos',
        selector: row => row.role,
        sortable: true,
    },{
        name: 'Usuario',
        selector: row => row.username,
        sortable: true,
    }]

    const toggleUser = (data)=>{
        if(data.role=="User"){
            setViewData(true)
            setUserData(data)
        }
    }
    return (
        <>
        {role =="Admin" ?<>

        {viewData&&<ViewUserData setViewData={setViewData} userData={userData}/>}
        <div className='container-padre'>

            <div className='userTable-container'>
                <h2>Usuarios</h2>
                <DataTable
                    fixedHeader
                    className='userTable'
                    columns={usersCol}
                    data={users}
                    customStyles={customStyles}
                    onRowClicked={toggleUser}
                />
            </div>
        </div>
        </>:
        <h1>Acceso Restringido</h1>}
        </>


    )
}
