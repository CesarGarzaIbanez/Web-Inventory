import React, { useState } from 'react'

export const Create = () => {

  const [category, setCategory] = useState('pc')
  const [formValues, setFormValues] = useState({});


  const changeForm = (e) => {
    const value = e.target.value;
    setCategory(value)
  }

  const defineDataStructure = (data) => {
    let formValues = {
      categoria: data.categoria.value,
      tipo: data.tipo.value,
      departamento: data.departamento.value,
      lugar: data.lugar.value,
    }

    if (category != 'pc'){
      formValues.marca = data.marca.value;
      formValues.modelo = data.modelo.value;
      formValues.serie = data.serie.value;
      formValues.activo = data.activo.value;
    }

    if(category === 'monitores' || category === 'general'){
      formValues.caracteristicas = data.caracteristicas.value;
    }

    switch (category) {
      case 'pc':
        formValues.activoComputadora = data.activoComputadora.value
        formValues.activoMonitor = data.activoMonitor.value
        break;
      case 'impresoras':
        formValues.tinta = data.tinta.value;
        formValues.c = data.c.value;
        formValues.m = data.m.value;
        formValues.y = data.y.value;
        formValues.k = data.k.value;
        formValues.cmyk = data.cmyk.value;
        break;
      case 'computadoras':
        formValues.cpu = data.cpu.value;
        formValues.ram = data.ram.value;
        formValues.almacenamiento = data.almacenamiento.value;
        formValues.disco = data.disco.value;
        break;
      case 'monitores':
        formValues.teclado = data.teclado.value;
        formValues.mouse = data.mouse.value;
        break;
      case 'accesspoint':
        formValues.puerto = data.puerto.value;
      default:
        break;
    }

    return formValues

  }

  const print = (e) => {
    e.preventDefault();
    let data = e.target;
    let formValues = defineDataStructure(data)
    console.log(formValues);
    setFormValues(formValues);
  };


  return (
    <>

      <h2>{category.toUpperCase()}</h2>
      <div className='form-container'>
        <form onSubmit={print}>
          <div className='create-form'>


            <div id='categoria' className='form-entry type-select'>
              <label>Categoría</label>
              <select name='categoria' onChange={changeForm}>
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
              <input name='tipo' type='text' placeholder='Tipo' />
            </div>

            {category === 'pc' && (
              <>
                <div id="activo-computadora" className='form-entry type-input'>
                  <label>Activo Computadora</label>
                  <input name='activoComputadora' type="text" placeholder='Activo Computadora' />
                </div>

                <div id="activo-monitor" className='form-entry type-input' >
                  <label>Activo Monitor</label>
                  <input name='activoMonitor' type="text" placeholder='Activo Monitor' />
                </div>
              </>
            )}

            {category !== 'pc' ? (
              <>
                <div id="marca" className='form-entry type-input'>
                  <label>Marca</label>
                  <input name='marca' type='text' placeholder='Marca' />
                </div>

                <div id="modelo" className='form-entry type-input'>
                  <label>Modelo</label>
                  <input name='modelo' type='text' placeholder='Modelo' />
                </div>
              </>
            ) : null}

            {category === 'impresoras' && (
              <>
                <div className='form-entry type-select'>
                  <label>Tinta</label>
                  <select name='tinta'>
                    <option>Múltiple</option>
                    <option>Única</option>
                  </select>
                </div>

                <div className='form-entry type-input'>
                  <label>C</label>
                  <input name='c' type='text' placeholder='C' />
                </div>
                <div className='form-entry type-input'>
                  <label>M</label>
                  <input name='m' type='text' placeholder='M' />
                </div>
                <div className='form-entry type-input'>
                  <label>Y</label>
                  <input name='y' type='text' placeholder='Y' />
                </div>
                <div className='form-entry type-input'>
                  <label>K</label>
                  <input name='k' type='text' placeholder='K' />
                </div>
                <div className='form-entry type-input'>
                  <label>CMYK</label>
                  <input name='cmyk' type='text' placeholder='C' />
                </div>
              </>
            )}

            {category === 'computadoras' && (
              <>
                <div id="cpu" className='form-entry type-input'>
                  <label>CPU</label>
                  <input name='cpu' type='text' placeholder='CPU' />
                </div>

                <div id="ram" className='form-entry type-input'>
                  <label>RAM</label>
                  <input name='ram' type='text' placeholder='RAM' />
                </div>

                <div id="almacenamiento" className='form-entry type-input'>
                  <label>Almacenamiento</label>
                  <input name='almacenamiento' type='text' placeholder='Almacenamiento' />
                </div>

                <div id="disco" className='form-entry type-input'>
                  <label>Disco</label>
                  <input name='disco' type='text' placeholder='Disco' />
                </div>
              </>
            )}
            {category === 'monitores' && (
              <>
                <div id="teclado" className='form-entry type-textarea'>
                  <label>Teclado</label>
                  <input name='teclado' type='text' placeholder='Teclado' />
                </div>
                <div id="mouse" className='form-entry type-textarea'>
                  <label>Mouse</label>
                  <input name='mouse' type='text' placeholder='Mouse' />
                </div>
              </>
            )}
            {category === 'accesspoint' && (
              <>
                <div id="puerto" className='form-entry type-textarea'>
                  <label>Puerto</label>
                  <input name='puerto' type='text' placeholder='Puerto' />
                </div>
              </>
            )}

            {category === 'monitores' || category === 'general' ? (
              <>
                <div id="caracteristicas" className='form-entry type-textarea'>
                  <label>Características</label>
                  <textarea name='caracteristicas'></textarea>
                </div>
              </>
            ) : null}

            {category !== 'pc' ? (
              <>
                <div id="serie" className='form-entry type-input'>
                  <label>Serie</label>
                  <input name='serie' type='text' placeholder='Serie' />
                </div>

                <div id="activo" className='form-entry type-input'>
                  <label>Activo</label>
                  <input name='activo' type='text' placeholder='Activo' />
                </div>
              </>
            ) : null}


            <div id="departamento" className='form-entry type-select'>
              <label>Departamento</label>
              <select name='departamento'>
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
              <select name='lugar'>
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
