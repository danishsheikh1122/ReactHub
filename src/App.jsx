import React from "react";
import "./App.css";
import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import Section2 from "./components/Section2";
import Section3 from "./components/Section3";
import Section4 from "./components/Section4";

// font-bricolage theme font 
// #CFCFCF theme color
const App = () => {
  return (
    <>
      <NavBar></NavBar>
      <Hero></Hero>
      <Section2></Section2>
      <Section3></Section3>
      <Section4></Section4>
      
    </>
  );
};

export default App;
