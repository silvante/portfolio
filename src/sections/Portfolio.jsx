import React from "react";
import { projects } from "../data";
import { Link } from "react-router-dom";

const Portfolio = () => {
  const proj = projects.sort((a, b) => b.star - a.star);
  return (
    <div
      className="bg-gray-200 w-full flex justify-center py-16"
      id="portfolio"
    >
      <div className="w-[90%] lg:w-contain text-center space-y-10">
        <div className="space-y-5">
          <h2 className="text-2xl font-bold">Portfolio</h2>
          <p>This is all my projects</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {proj.map((project) => {
            return (
              <div
                key={project.id}
                className="s3 bg-white rounded-md shadow-md p-5 space-y-5"
              >
                <div className="rounded overflow-hidden border-black border-2 relative">
                  {/* <div className="w-full py-4 absolute top-0 right-0 linear-bottom"></div> */}
                  <img src={project.image} alt={project.name} />
                  {/* <div className="w-full py-4 absolute bottom-0 left-0 linear-top"></div> */}
                </div>
                <div className="text-start space-y-2">
                  <p className="font-bold text-xl">{project.name}</p>
                  <p>{project.info}</p>
                  <div className="space-x-3 flex flex-wrap">
                    {project.texnos.map((textno) => {
                      return (
                        <Link className="text-blue-500" key={textno}>
                          {textno}
                        </Link>
                      );
                    })}
                  </div>
                  <div className="w-full space-x-2">
                    <a
                      href={project.link}
                      className="bg-black text-white rounded py-2 px-4 inline-block"
                      target="_blanck"
                    >
                      Link <i className="bx bxl-netlify"></i>
                    </a>
                    <a
                      href={project.gitHub}
                      className="bg-black text-white rounded py-2 px-4 inline-block"
                      target="_black"
                    >
                      Github <i className="bx bxl-github"></i>
                    </a>
                  </div>
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
