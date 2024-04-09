import Header from "../Components/Header";
import SignUp from "./SignUp";
import Login from "./Login";
import OD from "../Components/OD";
import Aim from "../Components/Aim";
import Footer from "../Components/Footer";
import FAQ from "./FAQ";
import React from "react";
// import { Link } from "react-router-dom";
import RegisForm from "./RegisForm";

const Home = () => {
  return (
    <>
      <Header></Header>
      {/* <SignUp></SignUp>
      <Login></Login> */}
      <OD></OD>
      {/* <FAQ></FAQ> */}
      <Aim></Aim>
      <Footer></Footer>
    </>
  );
};

export default Home;
