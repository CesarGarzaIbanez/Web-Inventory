import React from 'react'
import DataTable from 'react-data-table-component'
import { columns, data } from '../helpers/tables.js'
import { useState } from "react";
import { Search } from './Search.js';

export const Table = ({computadoras}) => {

  const hola=Object.values(computadoras);
  console.log(hola)
  const [columnsState, setColumnsState] = useState(columns[0])
  const [tableState, setTableState] = useState('PC');
  const [deptData, setDeptData] = useState(data);
  const [dataState, setDataState] = useState(deptData);
  // Seleccionar al dar click en la fila
  const [selectedData, setSelectedData] = useState();

  console.log(dataState)

  const handleChange = (state) => {
    setSelectedData(state);
  };

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

  console.log(selectedData);



  return (

    <div>
      <section className="searchBar">
        <Search
          setColumnsState={setColumnsState}
          setTableState={setTableState}
          setDataState={setDataState}
          setDeptData={setDeptData}
          deptData={deptData}
        />
      </section>


      <DataTable
        fixedHeader
        className='dataTable'
        columns={columnsState}
        data={dataState}
        onRowClicked={handleChange}
        customStyles={customStyles}
        pagination
        striped
      />
    </div>
  )
}
