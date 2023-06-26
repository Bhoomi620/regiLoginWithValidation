import React from 'react'
import {Formik,Form,Field} from 'formik'

export default function UserRegistrationForm() {
  return (
        <Formik  

        initialValues ={
{

    firstname:"",
    lastname:""

}
        }
    >

    <Form>

<Field name="firstname" type='text'></Field>
<Field name="lastname" type='text'></Field>

    </Form>
        </Formik>
    )
}
