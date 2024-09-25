import React, { useState } from "react";
import Header from "./components/Header";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import MainHeader from "./components/MainHeader";

export default () => {
  const [language, setLanguage] = useState('pt');
  const [lightMode, setLightMode] = useState(false)

  return (
    <div>
      <Header 
        language={language} 
        setLanguage={setLanguage}
        lightMode={lightMode}
        setLightMode={setLightMode}
      />

      <main className={lightMode ? 'bg-main-light' : 'bg-main-dark'}>
        <MainHeader language={language} lightMode={lightMode} />
        <About language={language} lightMode={lightMode} />
        <Skills language={language} lightMode={lightMode} />
        <Projects language={language} lightMode={lightMode} />
      </main>
    </div>
  );
};