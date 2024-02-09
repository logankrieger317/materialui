import React from 'react'
import Navbar from '../../Navbar/navbar'
import { DataGrid, GridRowsProp, GridColDef } from '@mui/x-data-grid';


function Database() {

const rows: GridRowsProp = [
  { id: 1, col1: 'Luke', col2: 'Skywalker', col3: 'LSkywalker@rebel.net', col4: '254.585.5874', col5: '100' },
  { id: 2, col1: 'Leia', col2: 'Organa', col3: 'LOrgana@rebel.org', col4: '254.585.5874', col5: '101' },
  { id: 3, col1: 'Han', col2: 'Solo', col3: 'HSolo@rebel.com', col4: '963.555.5555', col5: '102' },
  { id: 4, col1: 'C', col2: '3PO', col3: '3PO@rebel.net', col4: '555.555.5555', col5: '103' },
  { id: 5, col1: 'Anakin', col2: 'Skywalker', col3: 'DVader@empire.com', col4: '595.515.5548', col5: '104' },
  { id: 6, col1: 'Obi-Wan', col2: 'Kenobi', col3: 'ObiWan@jediorder.org', col4: '999.999.9999', col5: '105' },
  { id: 7, col1: 'Mace', col2: 'Windu', col3: 'MaceWindu@empire.gov', col4: '444.444.4444', col5: '106' },
  { id: 8, col1: 'Darth', col2: 'Vader', col3: 'DarthVader@empire.com', col4:'555.555.5555', col5: '107' },
  
 

];

const columns: GridColDef[] = [
  { field: 'col1', headerName: 'First Name', width: 150 },
  { field: 'col2', headerName: 'Last Name', width: 150 },
  { field: 'col3', headerName: 'Email', width: 150 },
  { field: 'col4', headerName: 'Phone', width: 150 },
  { field: 'col5', headerName: 'Unit Number', width: 150 },
];

  return (
    <>
    <Navbar/>
    <h1 style={{display:'flex', justifyContent:'center'}}>Customer List</h1>
    <div style={{ marginLeft:'25%', marginTop:'25px',height: 800, width: '80%' }}>
      <DataGrid style={{marginRight: "25%"}} rows={rows} columns={columns} pageSize={5} />
    </div>
    
    </>
  )
}

export default Database