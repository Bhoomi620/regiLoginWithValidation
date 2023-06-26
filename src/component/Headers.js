import React from 'react'
import { Link } from 'react-router-dom'
    


export default function Headers() {
  return (
    <ul>
    
    <li>
        <Link to='/Home'>
            Home
    </Link>
    </li>

    
    <li>
        <Link to='/Login'>
            Login
    </Link>
    </li>


    <li>
        <Link to='/reg'> UserRegistrationForm </Link>
    </li>


</ul>
  )
}

