import Space from "../lottie/Space";
import { team_members } from "../data";
import Link from "next/link";
import Image from "next/image";

export default function Banner() {
  return (
    <div className="w-full flex flex-col md:flex-row justify-between sm:p-5 gap-5">
      <div className="flex-1 flex-col flex justify-center items-start gap-3">
        <p>Mardonbek Khamidov</p>
        <h1 className="text-2xl lg:text-4xl font-bold">
          A passionate Software Engineer, javaScript developer and Ruby
          enthusiast.
        </h1>
        <p>team - {team_members.length} members</p>
        <div className="flex -space-x-4 rtl:space-x-reverse">
          {team_members.map((member) => {
            return (
              <a key={member.id} href={member.link} target="_blanck">
                <Image
                  className='className="w-10 h-10 border-2 border-white rounded-full dark:border-gray-800"'
                  src={member.img}
                  alt={member.name}
                  width={40}
                  height={40}
                />
              </a>
            );
          })}
        </div>
        <Link
          href={"/info"}
          className="px-4 py-2 bg-violet-600 rounded-xl inline-block mt-4"
        >
          About me →
        </Link>
      </div>
      <div className="max-w-full md:max-w-[280px] lg:max-w-[380px]">
        <Space />
      </div>
    </div>
  );
}
