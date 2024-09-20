import React from "react";

import MainHeader from "./components/MainHeader";
import Header from "./components/Header";
import About from "./components/About";
import Navigation from "./components/Navigation";
import Skills from "./components/Skills";
import Projects from "./components/Projects";

export default () => {
  return (
    <div>
      <Header />

      <main>
        <MainHeader />
        <About />
        <Skills />
        <Projects />
      </main>

      <Navigation />
    </div>
  )
}