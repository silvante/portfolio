import React from "react";
import pfp from "../assets/mardonbek.jpg";
import { projects } from "../data";
import { skills } from "../data";
const languages = 3;

export const counter = [
  {
    id: 1,
    number: projects.length,
    title: "Published projects",
  },
  {
    id: 2,
    number: skills.length,
    title: "all learned skills",
  },
  {
    id: 3,
    number: languages,
    title: "Learned languages",
  },
  {
    id: 3,
    number: '25+',
    title: "All created Projects",
  },
];


const Hero = () => {
  return (
    <div className="w-full flex justify-center">
      <div className="w-[90%] lg:w-contain space-y-5">
        <div className="bg-img rounded overflow-hidden">
          <div className="w-full h-full py-10 px-10 bg-black/70 space-y-5 flex flex-col md:flex-row text-center justify-between items-center">
            <h1 className="text-white w-[100%] md:w-[50%] text-2xl font md:text-start sm:text-4xl sm:leading-tight">
              Your <span className="text-black bg-white">misstakes</span> will
              grow you, from zero to{" "}
              <span className="text-black bg-white">hero</span>
            </h1>
            <div className="w-[100%] md:w-[50%] flex justify-center md:justify-end">
              <img
                src={pfp}
                alt="my image"
                width={"300px"}
                height={"300px"}
                className="rounded-full border-2 border-white"
              />
            </div>
          </div>
        </div>
        <div className="grid w-full grid-cols-2 gap-4 md:grid-cols-4">
          {
            counter.map((e) =>{
              return(
                <div key={e.id} className=" space-y-3 px-5 transition-all bg-white border-2 border-gray-400 hover:scale-110 hover:bg-black hover:text-white hover:border-none text-center py-5">
                  <span className="text-4xl font-bold">
                    {e.number}
                  </span>
                  <p className="font-bold">{e.title}</p>
                </div>
              )
            })
          }
        </div>
      </div>
    </div>
  );
};

export default Hero;
