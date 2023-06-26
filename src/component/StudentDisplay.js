import React from 'react'
import { DataGrid } from '@mui/x-data-grid';

export default function StudentDisplay(props) {
// console.log(props.mydata)


const columns = [
  {field:'id'},

  
  { field: 'firstName', headerName: 'First Name', width: 130},
  // valueFormatter : (params)=> params.value.toLowercase() },
  { field: 'lastName', headerName: 'Last Name', width: 330,
//  valueGetter:(params)=>{

   // return params.row.firstName +''+params.row.LastName
  //}
},
  {
    field: 'address.city',
    headerName: 'City',
    width: 90,
    valueGetter: (params) =>{
    return params.row.address.city }

  },

  {
    field: 'address.state',
    headerName: 'State',
    width: 90,
    valueGetter: (params) =>{
      return params.row.address.state }
  
  },
  
  {
    field: 'Edit',
    headerName: 'Edit',
    width: 90,
     renderCell:(params)=>{
      console.log(params);

      return(<button onClick={()=>{
        props.t(params.row.id)}}>Edit</button>)
     }
  },
  {
    field: 'Delete',
    headerName: 'Delete',
    width: 90,
    renderCell:(params)=>{
      console.log(params)
      return(<button onClick={()=>{

        props.myd(params.row.id);
      }}>Delete</button>)
     }
  },
]

console.log(props.mydata);

  return (
    <div>StudentDisplay

<DataGrid

rows={props.mydata}
columns={columns}
pageSize={5}
rowPerPageOption={[5]}
checkboxSelection></DataGrid>

    </div>
  )
}
