import React, { useRef } from "react";
import Hero from "../components/Hero";
import AboutMe from "../sections/AboutMe";
import Skills from "../sections/Skills";
import Portfolio from "../sections/Portfolio";

const Home = () => {
  return (
    <div className="space-y-10">
      <Hero />
      <AboutMe />
      <Skills />
      <Portfolio />
    </div>
  );
};

export default Home;
