import Header from "../Components/Header";
import SignUp from "./SignUp";
import Login from "./Login";
import OD from "../Components/OD";
import Aim from "../Components/Aim";
import Footer from "../Components/Footer";

import React from "react";
import { Link } from "react-router-dom";


const Home = () =>  {
  return (
    <>
      <Header></Header>
      {/* <SignUp></SignUp>
      <Login></Login> */}
      <OD></OD>
      <Aim></Aim>
      <Footer></Footer> 
    
    </>
  );
}

export default Home;
