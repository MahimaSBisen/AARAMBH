import React from "react";
// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import "../scss/styles.scss";
import * as bootstrap from "bootstrap";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./Pages/Home";
import SignUp from "./Pages/SignUp";
import Aim from "./Components/Aim";
import FAQ from "./Pages/FAQ";
import RegisForm from "./Pages/RegisForm";
import Login from "./Pages/Login";
import { BrowserRouter , Routes, Route, Link} from "react-router-dom";


const App = () => {
  return (
    <BrowserRouter>
    <Routes>
<Route path='/' element={<Home/>}/>
<Route path='faq' element={<FAQ/>}/>
<Route path='log-in' element={<Login/>}/>
<Route path='sign-up' element={<SignUp/>}/>

<Route path='regis-form' element={<RegisForm/>}/>




    </Routes>

   
      
     
    </BrowserRouter>
  );
};

export default App;
