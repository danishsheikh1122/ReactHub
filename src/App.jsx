import React from "react";
import "./App.css";
import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import Section1 from "./components/Section1";
import Section2 from "./components/Section2";
import Section3 from "./components/Section3";
import Section4 from "./components/Section4";
import Section5 from "./components/Section5";
import Section6 from "./components/Section6";
import Section7 from "./components/Section7";
import Section8 from "./components/Section8";
import Section9Footer from "./components/Section9Footer";

// font-bricolage theme font
// text-[#CFCFCF] theme color
// text-[#E1AC18]theme color
const App = () => {
  return (
    <main>
      <NavBar></NavBar>
      <Hero></Hero>
      <Section1></Section1>
      <Section2></Section2>
      <Section3></Section3>
      <Section4></Section4>
      <Section5></Section5>
      <Section6></Section6>
      <Section7></Section7>
      <Section8></Section8>
      <Section9Footer></Section9Footer>
    </main>
  );
};

export default App;
