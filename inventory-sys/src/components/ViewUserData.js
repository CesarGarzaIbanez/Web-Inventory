import React, { useState } from 'react'
import DeleteUser from './DeleteUser'

const ViewUserData = ({userData, setViewData}) => {
    const [deleteState, setDeleteState] = useState(false)
    const closeView=()=>{
        setViewData(false)
    }
    const toggleDelete = ()=>{
        setDeleteState(true)
    }
  return (
    <>
    {deleteState&&<DeleteUser userData={userData} setDeleteState={setDeleteState}/>}
    <div onClick={closeView} className='view-user-data-container'>
    </div>

        <div className='view-user-data'>
            <h1>Usuario</h1>
            <p><span>Usuario:</span> {userData.username}</p>
            <p><span>Permisos:</span> {userData.role}</p>

            <button onClick={toggleDelete} className='delete-button'>Eliminar Usuario</button>
        </div>
    </>
  )
}

export default ViewUserData