import React from 'react'
import DataTable from 'react-data-table-component'
import { columns, data } from '../helpers/tables.js'
import { useState } from "react";
import { Search } from './Search.js';

export const Table = () => {

  const [columnsState, setColumnsState] = useState(columns[0])
  const [tableState, setTableState] = useState('PC');
  const [deptData, setDeptData] = useState(data);
  const [dataState, setDataState] = useState(deptData);
  const [selectedData, setSelectedData] = useState();

  const handleChange = (state) => {
    setSelectedData(state);
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
        title={tableState}
        fixedHeader
        className='dataTable'
        columns={columnsState}
        data={dataState}
        onRowClicked={handleChange}

        pagination
      />
    </div>
  )
}
