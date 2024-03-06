import React, { useRef } from "react";
import Hero from "../components/Hero";
import AboutMe from "../sections/AboutMe";
import Skills from "../sections/Skills";
import Portfolio from "../sections/Portfolio";

const Home = () => {
  const scrollRef = useRef(null);

  const handleScroll = () => {
    if (scrollRef.current) {
      const scrollIndex = scrollRef.current.scrollTop;
      console.log("Scroll Index:", scrollIndex);
      // Do something with the scroll index
    }
  };
  return (
    <div className="space-y-10">
      <Hero />
      <AboutMe />
      <Skills />
      <Portfolio
        ref={scrollRef}
        style={{ height: "300px", overflowY: "scroll" }}
        onScroll={handleScroll}
      />
    </div>
  );
};

export default Home;
