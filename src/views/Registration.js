import React from 'react'
import RegistrationForm from '../component/RegistrationForm'
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { AppBar } from '@mui/material';

export default function Registration() {
  return (
    <div>
<Container maxWidth="sm">
    <Box sx={{ bgcolor: 'pink', height: '100vh' }} >
<RegistrationForm/>
    </Box>
  </Container>



    </div>
  )
}
