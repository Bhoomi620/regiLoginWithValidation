import React, { useState } from 'react'
import {Formik,Form,Field} from 'formik'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';

export default function UserRegistrationForm() {

    const navi= useNavigate();
  return (
        <Formik  

        initialValues ={
                {
                    title:"",
                    firstName: "",
                    lastName: "",
                    email: "",
                    // userName: "",
                    password : "",
                    confirmPassword : "",
                    acceptTerms: true
                }
        }
       
        onSubmit = {async (values) => {
      
            let d = await axios.post("https://real-pear-fly-kilt.cyclic.app/accounts/register",values)
             console.log(d.data)
            if(d.status==200){
                navi("/login")

            }
             }}
       
    >

   <Form>

        <Field name="title" placeholder="title"/>
        <Field name="firstName" placeholder="firstName"/>
        <Field name="lastName" placeholder="lastName" />
        <Field name="email" placeholder="email"/>
        {/* <Field name="userName" placeholder="userName"/> */}
        <Field name="password" placeholder="password" />
        <Field name="confirmPassword" placeholder="confirmPassword"/>
        <Field name="acceptTerms" type='checkbox'/>

        <button type="submit">Submit</button>
    </Form>
        </Formik>
    )
}
