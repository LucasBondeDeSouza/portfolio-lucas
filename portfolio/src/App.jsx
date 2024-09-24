import React, { useState } from "react";
import Header from "./components/Header";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import MainHeader from "./components/MainHeader";

export default () => {
  const [language, setLanguage] = useState('pt');

  return (
    <div>
      <Header language={language} setLanguage={setLanguage} />

      <main>
        <MainHeader language={language} />
        <About language={language} />
        <Skills language={language} />
        <Projects language={language} />
      </main>
    </div>
  );
};