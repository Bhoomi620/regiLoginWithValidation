import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Registration from './views/Registration';
import {Link, BrowserRouter, Route, Routes } from "react-router-dom";
import Headers from './component/Headers';
import UserRegistration from './views/UserRegistration';
import RegistrationForm from './component/RegistrationForm';
import UserRegistrationForm from './component/UserRegistrationForm';
import UserLogin from './views/UserLogin';
import Student from './views/Student';
import UserAppBar from './component/UserAppBar'
import EmployeeFullForm from './EmployeeFullForm/EmployeeFullForm';
import Appoinment from './Appoinment';
import AppointmentDisplay from './AppoinmentDisplay';
import { Provider } from 'react-redux';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  

  <React.StrictMode>

{/* <Provider store={store}> */}

  
  {/* <UserList/> */}



  {/* <Appoinment/> */}

  
{/* </Provider> */}

    {/* <EmployeeFullForm/> */}
    {/* <AppoinmentDisplay/> */}
   {/* <Appoinment/> */}
    <BrowserRouter>
    <UserAppBar>
    <Headers>
      
    </Headers>

    </UserAppBar>
    <Routes>
     <Route path='/Home' element= {<App/>}/>
     <Route path='/Login' element= {<UserLogin/>}/>
     <Route path='/reg' element= {<UserRegistrationForm/>}/>
     <Route path='/Student' element= {<Student></Student>}/>

    </Routes >
      
  </BrowserRouter>

  

  {/* <Registration/> */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
