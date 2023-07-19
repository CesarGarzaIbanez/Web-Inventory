import React, { useEffect } from 'react'
import DataTable from 'react-data-table-component'
import { columns, data } from '../helpers/tables.js'
import { useState } from "react";
import { Search } from './Search.js';

export const Table = ({ computadoras, accesspoints, monitores, impresoras, generales, equipos, departamentos }) => {

  const [columnsState, setColumnsState] = useState(columns[0])
  const [tableState, setTableState] = useState('PC');
  const [deptData, setDeptData] = useState([]);
  const [dataState, setDataState] = useState(deptData);
  const [shownData, setShownData] = useState(dataState);
  // Seleccionar al dar click en la fila
  const [selectedData, setSelectedData] = useState();


  useEffect(() => {
    setDataState(deptData)
    setShownData(dataState)
    changeTableData();
  }, [tableState,deptData,dataState]);
  // Escuchar por los cambios dentro de los padres 

  if (equipos && !deptData) {
    setDeptData(equipos)
  }
  
  const changeTableData = () => {
    switch (tableState) {
      case "PC":
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





  const handleChange = (state) => {
    setSelectedData(state);
    console.log(selectedData)
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

  // console.log(selectedData);



  return (

    <div>
      <section className="searchBar">
        <Search
          setColumnsState={setColumnsState}
          setTableState={setTableState}
          setDataState={setDataState}
          setDeptData={setDeptData}
          setShownData={setShownData}
          deptData={deptData}
          dataState={dataState}
          departamentos={departamentos}
        />
      </section>


      <DataTable
        fixedHeader
        className='dataTable'
        columns={columnsState}
        data={shownData}
        onRowClicked={handleChange}
        customStyles={customStyles}
        pagination
        striped
      />
    </div>
  )
}
