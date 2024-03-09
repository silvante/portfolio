import React from "react";
import pfp from "../assets/mardonbek.jpg"

const Hero = () => {
  return (
    <div className="w-full flex justify-center">
      <div className="w-contain bg-img rounded overflow-hidden">
        <div className="w-full h-full py-10 px-10 bg-black/70 space-y-5 flex flex-col md:flex-row text-center justify-between items-center">
          <h1 className="text-white w-[100%] md:w-[50%] text-2xl font md:text-start sm:text-4xl sm:leading-tight">
            Your <span className="text-black bg-white">misstakes</span> will
            grow you, from zero to{" "}
            <span className="text-black bg-white">hero</span>
          </h1>
          <div className="w-[100%] md:w-[50%] flex justify-center md:justify-end">
            <img src={pfp} alt="my image" width={"300px"} height={"300px"} className="rounded-full border-2 border-white"/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
