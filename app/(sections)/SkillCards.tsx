import Image from "next/image";
import { skills } from "../data";

export default function SkillCards() {
  return (
    <ul className="grid w-full gap-5 grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
      {skills.map((skill) => {
        return (
          <li
            className="body_bg w-full h-full flex justify-center items-center flex-col p-3 cursor-pointer rounded-xl border-4 border-transparent hover:border-violet-600 transition-all"
            key={skill.id}
          >
            <div className="flex items-center justify-center relative w-[80px] h-[80px]">
              {skill.isLearning && (
                <p className="bg-black text-white px-2 rounded-full absolute bottom-0">
                  learning...
                </p>
              )}
              <Image src={skill.logo} alt={skill.name} width={50} />
            </div>
            <div className="space-y-6">
              <div>
                <p className="truncate font-semibold text-center w-full">
                  {skill.name}
                </p>
              </div>
            </div>
          </li>
        );
      })}
    </ul>
  );
}
