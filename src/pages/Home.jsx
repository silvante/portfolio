import React from "react";
import Hero from "../components/Hero";
import AboutMe from "../sections/AboutMe";

const Home = () => {
  return (
    <div className="space-y-10">
      <Hero />
      <AboutMe />
    </div>
  );
};

export default Home;
