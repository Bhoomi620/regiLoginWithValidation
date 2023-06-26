import React, { useEffect, useState } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';


export default function StudentForm(props) {
 const [form,setform] = useState({
    firstName:"",
    lastName:"",
    address:{
        city:"",
        state:""
    }
 })

const changeHandler =(e)=>{
  if(e.target.name.includes('.'))
    {
    let d={...form,[e.target.name.split(".")[0]]:{
      ...form[e.target.name.split(".")[0]],
      [e.target.name.split(".")[1]]:e.target.value}};
      setform(d);
    }

    else
    {   
          let d = {...form,[e.target.name]:e.target.value}
          setform(d);

    }
    }


useEffect(()=>{

        if(props.editID > 0)
        {
        
        let t = props.data.find((value)=>
          {
          return value.id == props.editID;
          })  


          alert(JSON.stringify(t));
          

        setform(t);
        }
      else
      {
        setform({
          firstName:"",
          lastName:"",
          address:{
              city:"",
              state:""
          }
        })
      }
},[props.editID])

const handleSave=()=>
{
    console.log(form);

    let t = [...props.data];
   // t.push({...form,id :t?.length + 1});
     if(props.editID >0)
     {

        t = t.map((value)=>{
          if(value.id == props.editID)
          {
            return form;
          }
          else
          {
              return value;
          }
        })
     }
    else{
      t.push({...form,id:t?.length+1});
    }
 

    props.setEdit(-1);
    props.setData(t);
    props.handleClose();
  }
  return (
    <div>
    
    <Dialog open={props.open} onClose={props.handleClose}>
      <DialogTitle>Student Information</DialogTitle>
      <DialogContent>
        <DialogContentText>
       Please Fill detail
        </DialogContentText>
        <TextField
          autoFocus
          margin="dense"
          id="firstName"
          name='firstName'
          label="firstName"
          type="text"
          fullWidth
          variant="standard"
          value={form.firstName}
          onChange={changeHandler}
        />
         <TextField
          autoFocus
          margin="dense"
          id="lastName"
          name="lastName"
          label="lastName"
          type="text"
          fullWidth
          variant="standard"
          value={form.lastName}
          onChange={changeHandler}
        /> 
        <TextField
        autoFocus
        margin="dense"
        id="address.city"
        name="address.city"
        label="address.city"
        type="text"
        fullWidth
        variant="standard"
        value={form.address.city}
        onChange={changeHandler}
      />
      <TextField
        autoFocus
        margin="dense"
        id="address.state"
        label="address.state"
        type="text"
        name="address.state"
        fullWidth
        variant="standard"
        value={form.address.state}
        onChange={changeHandler}
      />
      </DialogContent>
      <DialogActions>
        <Button onClick={handleSave}>Save</Button>
        <Button onClick={props.handleClose}>Cancel</Button>
      </DialogActions>
    </Dialog>
  </div>
);
  
  }
