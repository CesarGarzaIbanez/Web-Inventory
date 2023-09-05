import React from 'react'

const DeleteUser = ({userData,setDeleteState}) => {

  const toggleDelete=()=>{
    setDeleteState(false)
  }
  const deleteData = async () => {
    try {
      const token = localStorage.getItem('token');

      // Verificar si el token existe antes de usarlo
      if (!token) {
        console.error('Token no encontrado en el localStorage');
        return;
      }
    const response = await fetch(`https://webappinventory.azurewebsites.net/api/Users/${userData.userId}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      },
    });
    if (!response.ok) {
      throw new Error('Error en la solicitud');
    }
    window.location.href = "/"
  } catch (error) {
    console.log(error)
  }
};
  return (
    <div className='delete-user-container'>
      <div className='delete-user'>
        <p>¿Estas seguro que quieres eliminar este usuario: {userData.username} ? </p>
        <div className='delete-buttons user-delete-buttons'>
          <input className='keep-button'
            type='button'
            value='No'
            onClick={toggleDelete} />
          <input className='delete-button'
            type='button'
            value='Sí'
            onClick={deleteData} />
        </div>
      </div>
    </div>
  )
}

export default DeleteUser