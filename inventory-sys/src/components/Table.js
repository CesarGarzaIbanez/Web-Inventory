import React, { useEffect } from 'react'
import DataTable from 'react-data-table-component'
import { columns } from '../helpers/tables.js'
import { useState } from "react";
import { Search } from './Search.js';
import { ViewData } from './ViewData.js';


export const Table = ({ computadoras, accesspoints, monitores, impresoras, generales, equipos, departamentos }) => {

  const [columnsState, setColumnsState] = useState(columns[0])
  const [tableState, setTableState] = useState('EQUIPO');
  const [deptData, setDeptData] = useState([]);
  const [dataState, setDataState] = useState(deptData);
  const [viewData,setViewData] = useState(false);
  // Seleccionar al dar click en la fila
  const [selectedData, setSelectedData] = useState();


  useEffect(() => {
    setDataState(deptData)
    changeTableData();
  }, [tableState,deptData]);
  // Escuchar por los cambios dentro de los padres 

  if (equipos && !deptData) {
    setDeptData(equipos)
  }
  
  // Cambiar los datos que se muestran
  const changeTableData = () => {
    switch (tableState) {
      case "EQUIPO":
        setDeptData(equipos);
        break;
      case "COMPUTADORAS":
        setDeptData(computadoras);
        break;
      case "ACCESSPOINT":
        setDeptData(accesspoints);
        break;
      case 'GENERAL':
        setDeptData(generales);
        break;
      case 'IMPRESORAS':
        setDeptData(impresoras);
        break;
      case 'MONITORES':
        setDeptData(monitores);
        break;
      default:
        break;
    }
  }

  const toggleViewData = (state) => {
    setSelectedData(state);
    setViewData(!viewData);
  };

  // Estilos de la tabla
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

  return (

    <div>
      {viewData && <ViewData
      setViewData={setViewData}
      selectedData={selectedData}
      departamentos={departamentos}
      tableState={tableState}
      computadoras={computadoras}
      monitores={monitores}/>}

      <section className="searchBar">
        <Search
          setColumnsState={setColumnsState}
          setTableState={setTableState}
          setDataState={setDataState}
          setDeptData={setDeptData}
          deptData={deptData}
          dataState={dataState}
          departamentos={departamentos}
        />
      </section>

      

      <DataTable
        fixedHeader
        className='dataTable'
        columns={columnsState}
        data={dataState}
        onRowClicked={toggleViewData}
        customStyles={customStyles}
        pagination
        striped
      />

    </div>
  )
}
