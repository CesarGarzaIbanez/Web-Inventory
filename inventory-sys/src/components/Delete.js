import React from 'react'

export const Delete = ({ selectedData, setDeleteState, fetchUrl }) => {


  const toggleDelete = () => {
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
      const response = await fetch(fetchUrl, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
      });
      if (!response.ok) {
        throw new Error('Error en la solicitud');
      }
      window.location.reload();
    } catch (error) {
      console.log(error)
    }
  };
  
  // const 
  return (
    <div className='delete-container'>
      <div className='delete-info-container'>
        <h1>¿Estas seguro que quieres eliminar este {selectedData.tipo}?</h1>
        <div className='delete-buttons'>
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
