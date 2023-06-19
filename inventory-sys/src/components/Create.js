import React from 'react'

export const Create = () => {
  return (
    <>

      <h2>Formulario</h2>
      <div className='form-container'>
        <form className='create-form'>

          <div id='categoria' className='form-entry type-select'>
            <label>Categoría</label>
            <select>
              <option value='pc'>PC</option>
              <option value='computadoras'>Computadoras</option>
              <option value='monitores'>Monitores</option>
              <option value='accesspoint'>Access Point</option>
              <option value='general'>General</option>
            </select>
          </div>

          <div id="tipo" className='form-entry type-input'>
            <label>Tipo</label>
            <input type='text' placeholder='Tipo' />
          </div>

          <div id="marca" className='form-entry type-input'>
            <label>Marca</label>
            <input type='text' placeholder='Marca' />
          </div>

          <div id="modelo" className='form-entry type-input'>
            <label>Modelo</label>
            <input type='text' placeholder='Modelo' />
          </div>

          <div id="serie" className='form-entry type-input'>
            <label>Serie</label>
            <input type='text' placeholder='Serie' />
          </div>

          <div id="activo" className='form-entry type-input'>
            <label>Activo</label>
            <input type='text' placeholder='Activo' />
          </div>

          <div id="caracteristicas" className='form-entry type-textarea'>
            <label>Características</label>
            <textarea></textarea>
          </div>

          <div id="departamento" className='form-entry type-select'>
            <label>Departamento</label>
            <select>
              <option>DTI</option>
              <option>Aulas</option>
            </select>
          </div>

          <div id="lugar" className='form-entry type-select'>
            <label>Lugar</label>
            <select>
              <option>Aula 1</option>
              <option>Aula 2</option>
            </select>
          </div>

          <input className='update-button' id="actualizar" type='submit' value='Actualizar' />
        </form>
      </div>
    </>
  )
}
