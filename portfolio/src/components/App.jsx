import React from "react";

import Header from "./Header.jsx";
import MainHeader from "./MainHeader.jsx";
import About from "./About.jsx";
import Skills from "./Skills.jsx";
import Projects from "./Projects.jsx";

export default () => {
  return (
    <>
      <MainHeader />
      <About />
      <Skills />
      <Projects />
    </>
  )
}