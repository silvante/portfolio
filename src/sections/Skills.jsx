import React from "react";
import { skills } from "../data";
import { Rating } from "@mui/material";

const Skills = () => {
  const starColor = "black";
  return (
    <div className="w-full flex justify-center">
      <div className="w-contain text-center space-y-5">
        <h2 className="text-2xl font-bold">Skills</h2>
        <p>I work in programs like</p>
        <ul className="flex flex-wrap justify-center items-start gap-10">
          {skills.map((skill) => {
            return (
              <li className="w-[150px]" key={skill.id}>
                <div className="h-[120px] flex items-center justify-center">
                  <img
                    src={skill.logo}
                    alt={skill.name}
                    width={"80px"}
                    height={"100px"}
                  />
                </div>
                <div className="space-y-3">
                  <div>
                    <p>{skill.name}</p>
                  </div>
                  <Rating
                    name="read-only"
                    value={skill.star}
                    className=""
                    readOnly
                    style={{ color: starColor }}
                  />
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Skills;
