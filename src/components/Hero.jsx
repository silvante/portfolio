import React from "react";

const Hero = () => {
  return (
    <div className="w-full flex justify-center">
      <div className="w-contain bg-img rounded overflow-hidden">
        <div className="w-full h-full py-10 px-5 bg-black/70">
            <h1 className="text-white w-[50%] text-4xl font line-h">Your <span className="text-black bg-white">misstakes</span> will grow you, from zero to <span className="text-black bg-white">expert</span></h1>
        </div>
      </div>
    </div>
  );
};

export default Hero;
