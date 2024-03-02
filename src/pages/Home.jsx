import React from "react";
import Hero from "../components/Hero";
import AboutMe from "../sections/AboutMe";
import Skills from "../sections/Skills";

const Home = () => {
  return (
    <div className="space-y-10">
      <Hero />
      <AboutMe />
      <Skills />
    </div>
  );
};

export default Home;
