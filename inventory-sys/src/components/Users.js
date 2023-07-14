import React from 'react'
import DataTable from 'react-data-table-component'


export const Users = () => {

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
        selector: row => row.permisos,
        sortable: true,
    }, {
        name: 'Nombre',
        selector: row => row.nombre,
        sortable: true,
    }, {
        name: 'Usuario',
        selector: row => row.usuario,
        sortable: true,
    }, {
        name: 'Email',
        selector: row => row.email,
        sortable: true,
    },]

    const data = [{
        permisos: 'admin',
        nombre: 'Cesar',
        usuario: 'Cesar',
        email: 'cesar@correo.com',
    }]
    return (
        <div className='container-padre'>

            <div className='userTable-container'>
                <h2>Usuarios</h2>
                <DataTable
                    fixedHeader
                    className='userTable'
                    columns={usersCol}
                    data={data}
                    customStyles={customStyles}
                />
            </div>
        </div>

    )
}
