import React from "react";
import Space from "../lottie/Space";
import { team_members } from "../data";

const Banner = () => {
  return (
    <div className="w-full flex justify-between p-5 gap-5">
      <div className="flex-1 flex-col flex justify-center items-start gap-3">
        <p>Mardonbek Khamidov</p>
        <h1 className="text-4xl font-bold">
          A passionate Software Engineer, javaScript developer and Ruby
          enthusiast.
        </h1>
        <p>team - {team_members.length} members</p>
        <div class="flex -space-x-4 rtl:space-x-reverse">
          {team_members.map((member) => {
            return (
              <a id={member.id} href={member.link} target="_blanck">
                <img
                  className='className="w-10 h-10 border-2 border-white rounded-full dark:border-gray-800"'
                  src={member.img}
                  alt={member.name}
                />
              </a>
            );
          })}
        </div>
      </div>
      <div className="max-w-[380px]">
        <Space />
      </div>
    </div>
  );
};

export default Banner;
