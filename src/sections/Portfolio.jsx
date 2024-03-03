import React from "react";
import { projects } from "../data";

const Portfolio = () => {
  return (
    <div className="bg-gray-200 w-full flex justify-center py-16">
      <div className="w-contain text-center space-y-5">
        <h2 className="text-2xl font-bold">Portfolio</h2>
        <p>This is all my projects</p>
        <div className="grid grid-cols-2 gap-10">
          {projects.map((project) => {
            return (
              <div key={project.id} className="space-y-3">
                <div className="rounded overflow-hidden border-black border-2">
                  <img className="img" src={project.image} alt={project.name} />
                </div>
                <div className="w-full flex justify-between items-center">
                    <a href={project.link} className="bg-black text-white rounded py-2 px-3" target="_blanck">Link <i class='bx bxl-netlify'></i></a>
                    <p className="font-bold">{project.name}</p>
                    <a href={project.gitHub} className="bg-black text-white rounded py-2 px-3" target="_black">Github <i class='bx bxl-github' ></i></a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
