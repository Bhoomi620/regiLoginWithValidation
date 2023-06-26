import React, { useState } from 'react'
import { useFormik } from 'formik';

import { TextField,Button } from '@mui/material';
import ReactDOM from 'react-dom';
import RegistrationField from '../helper/RegistrationField';


export default function RegistrationForm() {

    const {values,handleChange,errors,touched,handleSubmit} = useFormik({
        initialValues :RegistrationField,
        onSubmit: (values)=> {
            console.log(values);

        }
    }) 
    
  return (
    <div>
<form onSubmit={handleSubmit}>
    <TextField
          fullWidth
          id="email"
          name="email"
          label="Email"
          value={values.email}
          onChange={handleChange}
          error={touched.email && Boolean(errors.email)}
          helperText={touched.email && errors.email}
        />

<TextField
          fullWidth
          id="firstname"
          name="firstname"
          label="firstname"
          value={values.firstname}
          onChange={handleChange}
          error={touched.firstname && Boolean(errors.firstname)}
          helperText={touched.firstname && errors.firstname}
        />

<TextField
          fullWidth
          id="lastname"
          name="lastname"
          label="lastname"
          value={values.lastname}
          onChange={handleChange}
          error={touched.lastname && Boolean(errors.lastname)}
          helperText={touched.lastname && errors.lastname}
        />

<TextField
          fullWidth
          id="mobilenumber"
          name="mobilenumber"
          label="mobilenumber"
          value={values.mobilenumber}
          onChange={handleChange}
          error={touched.mobilenumber && Boolean(errors.mobilenumber)}
          helperText={touched.mobilenumber && errors.mobilenumber}
        />


<Button color="primary" variant="contained"  type="submit">
          Submit
        </Button>

        </form>

    </div>
  )
}


