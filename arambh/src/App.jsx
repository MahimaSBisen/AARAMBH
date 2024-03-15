// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import "../scss/styles.scss";
import * as bootstrap from "bootstrap";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./Components/Header";
import OD from "./Components/OD";
import FAQ from "./Pages/FAQ";
import Footer from "./Components/Footer";
import RegisForm from "./Pages/RegisForm";

function App() {
  return (
    <>
      <Header></Header>
      <OD></OD>
      <FAQ></FAQ>
      <Footer></Footer>
      <RegisForm></RegisForm>
    </>
  );
}

export default App;
