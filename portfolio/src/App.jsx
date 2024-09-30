import React, { useState, useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';

import Header from "./components/Header";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import MainHeader from "./components/MainHeader";

export default () => {
  useEffect(() => {
    AOS.init({ duration: 1500 });
  }, []);

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
        <div id="mainHeader"></div>
        <div data-aos="fade-up">
          <MainHeader language={language} lightMode={lightMode} />
        </div>

        <div id="about"></div>
        <div data-aos="fade-up">
          <About language={language} lightMode={lightMode} />
        </div>

        <div id="skills"></div>
        <div data-aos="fade-up">
          <Skills language={language} lightMode={lightMode} />
        </div>

        <div id="projects"></div>
        <div data-aos="fade-up">
          <Projects language={language} lightMode={lightMode} />
        </div>
      </main>
    </div>
  );
};