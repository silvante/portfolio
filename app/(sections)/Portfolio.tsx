import Image from "next/image";
import { projects } from "../data";

export default function Portfolio() {
  const proj = projects.sort((a, b) => b.star - a.star);
  return (
    <div className="w-full">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 w-full">
        {proj.map((project) => {
          return (
            <div
              key={project.id}
              className="body_bg rounded-xl overflow-hidden shadow-md"
            >
              <div className="rounded overflow-hidden relative shadow-md aspect-video">
                <Image
                  src={project.image}
                  alt={`Mardonbek's Project named ${project.image}`}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="text-start space-y-2 p-5">
                <p className="font-bold text-lg truncate">{project.name}</p>
                <p>{project.info}</p>
                <div className="space-x-3 flex flex-wrap">
                  {project.texnos.map((textno) => {
                    return (
                      <p className="text-blue-500 cursor-pointer" key={textno}>
                        {textno}
                      </p>
                    );
                  })}
                </div>
                <div className="w-full space-x-2">
                  {project.link && (
                    <a
                      href={project.link}
                      className="bg-black text-white rounded py-2 px-4 inline-block"
                      target="_blanck"
                    >
                      Link <i className="bx bxl-netlify"></i>
                    </a>
                  )}
                  {project.gitHub && (
                    <a
                      href={project.gitHub}
                      className="bg-black text-white rounded py-2 px-4 inline-block"
                      target="_black"
                    >
                      Github <i className="bx bxl-github"></i>
                    </a>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
