"use client";
import { useState } from "react";
import { github_icon, my_github_link, profile_picture } from "../data";
import Image from "next/image";

export default function Header() {
  const date = new Date();
  const year = date.getFullYear();
  const myOld = year - 2008;

  const [showNav, setshowNav] = useState(false);

  const handleTogle = () => {
    setshowNav(!showNav);
  };

  return (
    <header className="w-full flex justify-between py-6 items-center px-5">
      <div className="flex items-center gap-2 sm:gap-5">
        <div className="overflow-hidden rounded-full bg-slate-200 w-12 h-12 sm:w-16 sm:h-16 border border-white">
          <Image
            src={profile_picture}
            alt="Mardonbek Khamidov, profile picture, Xamidov Mardonbek"
            width={80}
            height={80}
          />
        </div>
        <div>
          <p className="font-semibold">Mardonbek Khamidov</p>
          <p className="opacity-70">{myOld} years old, Uzbek</p>
        </div>
      </div>
      <a
        href={my_github_link}
        className="text-white font-medium py-2 px-4 rounded hidden md:flex justify-center items-center gap-3"
        target="_blanck"
      >
        Open my gitHub{" "}
        <Image src={github_icon} alt="Open my github" width={48} height={48} />
      </a>
      <a
        href={my_github_link}
        target="_blanck"
        className="text-4xl md:hidden"
        onClick={handleTogle}
      >
        <Image src={github_icon} alt="Open my github" width={48} height={48} />
      </a>
    </header>
  );
}
