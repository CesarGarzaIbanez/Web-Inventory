import React, { useState } from 'react'

export const Create = () => {

  const [category, setCategory] = useState('pc')

  const changeForm = (e) => {
    const value = e.target.value;
    setCategory(value)
  }

  console.log(category);
  return (
    <>

      <h2>{category.toUpperCase()}</h2>
      <div className='form-container'>
        <form>
          <div className='create-form'>


            <div id='categoria' className='form-entry type-select'>
              <label>Categoría</label>
              <select onChange={changeForm}>
                <option value='pc'>PC</option>
                <option value='computadoras'>Computadoras</option>
                <option value='monitores'>Monitores</option>
                <option value='impresoras'>Impresoras</option>
                <option value='accesspoint'>Access Point</option>
                <option value='general'>General</option>
              </select>
            </div>

            <div id="tipo" className='form-entry type-input'>
              <label>Tipo</label>
              <input type='text' placeholder='Tipo' />
            </div>

            {category === 'pc' && (
              <>
                <div id="activo-computadora" className='form-entry type-input'>
                  <label>Activo Computadora</label>
                  <input type="text" placeholder='Activo Computadora' />
                </div>

                <div id="activo-monitor" className='form-entry type-input'>
                  <label>Activo Monitor</label>
                  <input type="text" placeholder='Activo Monitor' />
                </div>
              </>
            )}

            {category !== 'pc' ? (
              <>
                <div id="marca" className='form-entry type-input'>
                  <label>Marca</label>
                  <input type='text' placeholder='Marca' />
                </div>

                <div id="modelo" className='form-entry type-input'>
                  <label>Modelo</label>
                  <input type='text' placeholder='Modelo' />
                </div>
              </>
            ) : null}

            {category === 'computadoras' && (
              <>
                <div id="cpu" className='form-entry type-input'>
                  <label>CPU</label>
                  <input type='text' placeholder='CPU' />
                </div>

                <div id="ram" className='form-entry type-input'>
                  <label>RAM</label>
                  <input type='text' placeholder='RAM' />
                </div>

                <div id="almacenamiento" className='form-entry type-input'>
                  <label>Almacenamiento</label>
                  <input type='text' placeholder='Almacenamiento' />
                </div>

                <div id="disco" className='form-entry type-input'>
                  <label>Disco</label>
                  <input type='text' placeholder='Disco' />
                </div>
              </>
            )}
            {category === 'monitores' && (
              <>
                <div id="teclado" className='form-entry type-textarea'>
                  <label>Teclado</label>
                  <input type='text' placeholder='Teclado' />
                </div>
                <div id="mouse" className='form-entry type-textarea'>
                  <label>Mouse</label>
                  <input type='text' placeholder='Mouse' />
                </div>
              </>
            )}
            {category === 'accesspoint' && (
              <>
                <div id="puerto" className='form-entry type-textarea'>
                  <label>Puerto</label>
                  <input type='text' placeholder='Puerto' />
                </div>
              </>
            )}

            {category === 'monitores' || category === 'general' ? (
              <>
                <div id="caracteristicas" className='form-entry type-textarea'>
                  <label>Características</label>
                  <textarea></textarea>
                </div>
              </>
            ) : null}

            {category !== 'pc' ? (
              <>
                <div id="serie" className='form-entry type-input'>
                  <label>Serie</label>
                  <input type='text' placeholder='Serie' />
                </div>

                <div id="activo" className='form-entry type-input'>
                  <label>Activo</label>
                  <input type='text' placeholder='Activo' />
                </div>
              </>
            ) : null}


            <div id="departamento" className='form-entry type-select'>
              <label>Departamento</label>
              <select>
                <option value="acopio">Acopio</option>
                <option value="acopio entregado">Acopio Entregado</option>
                <option value="antenas">Antenas</option>
                <option value="auditorio">Auditorio</option>
                <option value="aulas">Aulas</option>
                <option value="biblioteca">Biblioteca</option>
                <option value="caadi">CAADI</option>
                <option value="centro de computo (M2)">Centro de Cómputo (M2)</option>
                <option value="cie">CIE</option>
                <option value="contrapunto">Contrapunto</option>
                <option value="cubiculos">Cubículos</option>
                <option value="deportes">Deportes</option>
                <option value="direccion">Dirección</option>
                <option value="dti">DTI</option>
                <option value="equipo portatil">Equipo Portátil</option>
                <option value="multimedia 1">Multimedia 1</option>
                <option value="multimedia 3">Multimedia 3</option>
                <option value="posgrado">Posgrado</option>
                <option value="sala de maestros">Sala de Maestros</option>
                <option value="sociedad de alumnos">Sociedad de Alumnos</option>
                <option value="site">SITE</option>
              </select>
            </div>

            <div id="lugar" className='form-entry type-select'>
              <label>Lugar</label>
              <select>
                <option>Aula 1</option>
                <option>Aula 2</option>
              </select>
            </div>
          </div>
          <input className='update-button' id="actualizar" type='submit' value='Actualizar' />
        </form>
      </div>
    </>
  )
}
