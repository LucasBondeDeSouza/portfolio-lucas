import React from "react";

import MainHeader from "./components/MainHeader";
import Header from "./components/Header";
import About from "./components/About";
import Navigation from "./components/Navigation";

export default () => {
  return (
    <div className="bg-dark">
      <Header />
      <MainHeader />
      <About />
      <Navigation />
    </div>
  )
}