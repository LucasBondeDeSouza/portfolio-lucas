import React, { useState, useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';

import Header from "./components/Header";
import ButtonDarkMode from "./components/ButtonDarkMode";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import MainHeader from "./components/MainHeader";
import Footer from "./components/Footer";

export default () => {
  useEffect(() => {
    AOS.init({ duration: 1500 });
  }, []);

  const [language, setLanguage] = useState('pt');
  const [darkMode, setDarkMode] = useState(false)

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  }

  return (
    <div>
      <Header 
        language={language} 
        setLanguage={setLanguage}
        darkMode={darkMode}
      />

      <ButtonDarkMode toggleDarkMode={toggleDarkMode} darkMode={darkMode} />

      <main className={darkMode ? 'bg-main-light' : 'bg-main-dark'}>
        <div id="mainHeader"></div>
        <div data-aos="fade-up">
          <MainHeader language={language} darkMode={darkMode} />
        </div>

        <div id="about"></div>
        <div data-aos="fade-up">
          <About language={language} darkMode={darkMode} />
        </div>

        <div id="skills"></div>
        <div data-aos="fade-up">
          <Skills language={language} darkMode={darkMode} />
        </div>

        <div id="projects"></div>
        <div data-aos="fade-up">
          <Projects language={language} darkMode={darkMode} />
        </div>
      </main>

      <Footer language={language} darkMode={darkMode} />
    </div>
  );
};