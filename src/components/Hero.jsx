import React from "react";
import hero_image from "../assets/logo_transparent.png";
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
    title: "All learned skills",
  },
  {
    id: 3,
    number: languages,
    title: "Speaking languages",
  },
  {
    id: 4,
    number: "25+",
    title: "All created Projects",
  },
];

const Hero = () => {
  return (
    <div className="w-full flex justify-center">
      <div className="w-[90%] lg:w-contain space-y-5">
        <div className="bg-img rounded overflow-hidden">
          <div className="w-full h-full px-10 bg-black/70 space-y-5 flex flex-col md:flex-row text-center justify-between items-center">
            <div className="text-white w-[100%] md:w-[50%] py-10 md:py-0 text-start flex flex-col items-start">
              <h1 className="text-2xl font md:text-start sm:text-4xl sm:leading-tight">
                The best <span className="text-black bg-white">way to</span>{" "}
                predict the <span className="text-black bg-white">future</span>{" "}
                is to invent it.
              </h1>
              <p className="my-5 text-center md:text-start">
                - David Heinemeier Hansson
              </p>
              <a
                href="https://muhammdal1-fr-portfolio.netlify.app/"
                target="_blanck"
                className="bg-white px-4 py-2 text-black text-start flex items-center gap-3"
              >
                View Partner <i class='bx bx-right-arrow-alt'></i>
              </a>
            </div>
            <div className="w-[100%] md:w-[50%] flex justify-center md:justify-end">
              <img
                src={hero_image}
                alt="my image"
                width={"400px"}
                height={"400px"}
                className=""
              />
            </div>
          </div>
        </div>
        <div className="grid w-full grid-cols-2 gap-4 md:grid-cols-4">
          {counter.map((e) => {
            return (
              <div
                key={e.id}
                className=" space-y-3 px-5 transition-all bg-white border-2 border-gray-400 hover:scale-110 hover:bg-black hover:text-white hover:border-none text-center py-5"
              >
                <span className="text-4xl font-bold">{e.number}</span>
                <p className="font-bold">{e.title}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Hero;
