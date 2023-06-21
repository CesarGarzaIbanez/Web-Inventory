import React from 'react'
import DataTable from 'react-data-table-component'


export const Users = () => {

    const usersCol = [{
        name: 'Permisos',
        selector: row => row.permisos,
        sortable: true,
    }, {
        name: 'Nombre',
        selector: row => row.nombre,
        sortable: true,
    },{
        name: 'Usuario',
        selector: row => row.usuario,
        sortable: true,
    },{
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
        <>

            <DataTable
                title="Usuarios"
                fixedHeader
                className='dataTable'
                columns={usersCol}
                data={data}
            />
        </>
    )
}
