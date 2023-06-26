import React, { useState } from 'react'
import StudentForm from '../component/StudentForm'
import { Button } from '@mui/material';
import StudentDisplay from '../component/StudentDisplay';

export default function Student() {

    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };

//Delete

    const handleDelete=(id)=>{
      let my=[...data].filter(y=>{
        return y.id!=id;
      })
      setData(my);
    }

//edit

    const handleEdit=(id)=>{

 
      setEdit(id);
      setOpen(true);
    }


    const [data, setData] = useState([]);
    const [edit, setEdit] = useState(-1);


  return (
    <div>
        <Button variant="outlined" onClick={handleClickOpen}>Open Dialog
         </Button>

         
        <StudentForm handleClose={handleClose} open={open} data={data} 
        setData={setData} setEdit={setEdit}
        editID={edit}>

        </StudentForm>
        <StudentDisplay mydata={data} myd={handleDelete} t={handleEdit}></StudentDisplay> 
   
    </div>
  )
}
