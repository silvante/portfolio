import React from "react";
import pfp from "../assets/mardonbek.jpg"

const Hero = () => {
  return (
    <div className="w-full flex justify-center">
      <div className="w-contain bg-img rounded overflow-hidden">
        <div className="w-full h-full py-10 px-10 bg-black/70 flex justify-between items-center">
          <h1 className="text-white w-[50%] text-4xl font line-h">
            Your <span className="text-black bg-white">misstakes</span> will
            grow you, from zero to{" "}
            <span className="text-black bg-white">hero</span>
          </h1>
          <div className="w-[50%] flex justify-end">
            <img src={pfp} alt="my image" width={"300px"} height={"300px"} className="rounded-full border-2 border-white"/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
