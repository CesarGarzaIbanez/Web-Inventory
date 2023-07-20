import React, { useEffect, useState } from 'react'

export const Create = ({ departamentos, computadoras, monitores }) => {

  const [category, setCategory] = useState('equipo')
  const [tipoState, setTipoState] = useState();
  const [fetchUrl, setFetchUrl] = useState();

  // Escuchar por el cambio de categoria y filtrar dependiendo de los requerimientos
  useEffect(() => {
    if (category !== 'computadora' && category !== 'general') {
      setTipoState(category.charAt(0).toUpperCase() + category.slice(1))
    } else {
      setTipoState()
    }
    changeFetchUrl();
  }, [category])

  // URL a la que se hara la petición POST dependiente de la categoria
  const changeFetchUrl = () => {
    const databaseURL = 'https://localhost:7271/api/';

    switch (category) {
      case 'equipo':
        setFetchUrl(databaseURL + 'Equipos')
        break;
      case 'computadora':
        setFetchUrl(databaseURL + 'Computadoras')
        break;
      case 'monitor':
        setFetchUrl(databaseURL + 'Monitores')
        break;
      case 'impresora':
        setFetchUrl(databaseURL + 'Impresoras')
        break;
      case 'accesspoint':
        setFetchUrl(databaseURL + 'Accesspoints')
        break;
      case 'general':
        setFetchUrl(databaseURL + 'Generales')
        break;
    }
  }
  // Peticion POST
  const postData = async (data) => {
    try {
      const response = await fetch(fetchUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data),
      });
      if (!response.ok) {
        throw new Error('Error en la solicitud');
      }
      const responseData = await response;
      console.log(responseData)
    } catch (error) {
      console.log(error)
    }
  }

  // Función para cambiar el estado de categoria y poder cambiar los datos del formulario
  const changeForm = (e) => {
    const value = e.target.value;
    setCategory(value)
  }
  // Estructura general de los valores del formulario
  const defineDataStructure = (data) => {
    let formValues = {
      tipo: data.tipo.value,
      departamentoId: data.departamento.value,
      area: data.area.value,
    }

    if (category != 'equipo') {
      formValues.marca = data.marca.value;
      formValues.modelo = data.modelo.value;
      formValues.serie = data.serie.value;
      formValues.activo = data.activo.value;
    }

    if (category === 'monitor' || category === 'general') {
      formValues.caracteristicas = data.caracteristicas.value;
    }

    switch (category) {
      case 'equipo':
        formValues.activoComputadora = data.activoComputadora.value
        formValues.activoMonitor = data.activoMonitor.value
        break;
      case 'impresora':
        formValues.tinta = data.tinta.value;
        formValues.c = data.c.value;
        formValues.m = data.m.value;
        formValues.y = data.y.value;
        formValues.k = data.k.value;
        formValues.cmyk = data.cmyk.value;
        break;
      case 'computadora':
        formValues.cpu = data.cpu.value;
        formValues.ram = data.ram.value;
        formValues.almacenamiento = data.almacenamiento.value;
        formValues.disco = data.disco.value;
        formValues.ip = data.ip.value;
        break;

      case 'accesspoint':
        formValues.puerto = data.puerto.value;
      default:
        break;
    }

    return formValues

  }

  // Transformación del objeto enviado al POST de equipo donde se busca por medio del activo para obtener los ids
  const postEquipo = (formValues) => {
    if (computadoras) {
      const objeto = computadoras.find(obj => obj.activo == formValues.activoComputadora);
      if (objeto) {
        formValues.computadoraId = objeto['computadoraId'];
      }
    }
    if (monitores) {
      let idArrays = []
      const arrayMonitores = formValues.activoMonitor.split(',')
      const activosMonitores = arrayMonitores.map(value => Number(value));
      activosMonitores.forEach(activo => {
        const objeto = monitores.find(obj => obj.activo == activo);
        if (objeto) {
          idArrays.push(objeto['monitorId'])
        }

      });
      formValues.monitorIds = idArrays
    }
    delete formValues.activoComputadora
    delete formValues.activoMonitor
  }

  // Logica que se ejecuta al enviar el formulario 
  // ******** FALTA REDIRECCIONAR *************
  const submitForm = (e) => {
    e.preventDefault();
    let data = e.target;
    let formValues = defineDataStructure(data)
    if (category === 'equipo') {
      postEquipo(formValues);
    }
    console.log(formValues);
    postData(formValues)
  };

  return (
    <>

      <h2>{category.toUpperCase()}</h2>
      <div className='form-container'>
        <form onSubmit={submitForm}>
          <div className='create-form'>


            <div id='categoria' className='form-entry type-select'>
              <label>Categoría</label>
              <select name='categoria' onChange={changeForm}>
                <option value='equipo'>Equipo</option>
                <option value='computadora'>Computadora</option>
                <option value='monitor'>Monitor</option>
                <option value='impresora'>Impresora</option>
                <option value='accesspoint'>Accesspoint</option>
                <option value='general'>General</option>
              </select>
            </div>

            <div id="tipo" className='form-entry type-input'>
              <label>Tipo</label>
              <input name='tipo' type='text' placeholder='Tipo' defaultValue={tipoState} />
            </div>

            {category === 'equipo' && (
              <>
                <div id="activo-computadora" className='form-entry type-input'>
                  <label>Activo Computadora</label>
                  <input name='activoComputadora' type="number" placeholder='Activo Computadora' />
                </div>

                <div id="activo-monitor" className='form-entry type-input' >
                  <label>Activo Monitor</label>
                  <input name='activoMonitor' type="text" placeholder='Activo Monitor' />
                </div>
              </>
            )}

            {category !== 'equipo' ? (
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

            {category === 'impresora' && (
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
                  <input name='c' type='date' placeholder='C' />
                </div>
                <div className='form-entry type-input'>
                  <label>M</label>
                  <input name='m' type='date' placeholder='M' />
                </div>
                <div className='form-entry type-input'>
                  <label>Y</label>
                  <input name='y' type='date' placeholder='Y' />
                </div>
                <div className='form-entry type-input'>
                  <label>K</label>
                  <input name='k' type='date' placeholder='K' />
                </div>
                <div className='form-entry type-input'>
                  <label>CMYK</label>
                  <input name='cmyk' type='date' placeholder='C' />
                </div>
              </>
            )}

            {category === 'computadora' && (
              <>
                <div id="cpu" className='form-entry type-input'>
                  <label>CPU</label>
                  <input name='cpu' type='text' placeholder='CPU' />
                </div>

                <div id="ram" className='form-entry type-input'>
                  <label>RAM</label>
                  <input name='ram' type='number' placeholder='RAM' />
                </div>

                <div id="almacenamiento" className='form-entry type-input'>
                  <label>Almacenamiento</label>
                  <input name='almacenamiento' type='text' placeholder='Almacenamiento' />
                </div>

                <div id="disco" className='form-entry type-input'>
                  <label>Disco</label>
                  <input name='disco' type='text' placeholder='Disco' />
                </div>

                <div id="ip" className='form-entry type-input'>
                  <label>IP</label>
                  <input name='ip' type='text' placeholder='IP' />
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

            {category === 'monitor' || category === 'general' ? (
              <>
                <div id="caracteristicas" className='form-entry type-textarea'>
                  <label>Características</label>
                  <textarea name='caracteristicas'></textarea>
                </div>
              </>
            ) : null}

            {category !== 'equipo' ? (
              <>
                <div id="serie" className='form-entry type-input'>
                  <label>Serie</label>
                  <input name='serie' type='text' placeholder='Serie' />
                </div>

                <div id="activo" className='form-entry type-input'>
                  <label>Activo</label>
                  <input name='activo' type='number' placeholder='Activo' />
                </div>
              </>
            ) : null}


            <div id="departamento" className='form-entry type-select'>
              <label>Departamento</label>
              <select name='departamento'>
                {departamentos
                  .sort((a, b) => a.nombre.localeCompare(b.nombre)) // Ordenar por dept.nombre
                  .map((dept) => (
                    <option key={dept.departamentoId} value={dept.departamentoId}>
                      {dept.nombre}
                    </option>
                  ))}
              </select>
            </div>

            <div id="area" className='form-entry type-select'>
              <label>Area</label>
              <input name='area' />
            </div>
          </div>
          <input className='update-button' id="actualizar" type='submit' value='Actualizar' />
        </form>
      </div>
    </>
  )
}
