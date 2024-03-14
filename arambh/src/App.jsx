// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import "./App.css";
import "../scss/styles.scss";
import * as bootstrap from "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./Header";
import OD from "./OD";
import FAQ from "./FAQ";
import Footer from "./Footer";

function App() {
  return (
    <>
      <Header></Header>
      <OD></OD>
      <FAQ></FAQ>
      <Footer></Footer>
    </>
  );
}

export default App;
