import React, { useEffect, useState } from "react";
import { github_icon, my_github_link, profile_picture } from "../data";

const Header = () => {
  const date = new Date();
  const year = date.getFullYear();
  const myOld = year - 2008;

  const [showNav, setshowNav] = useState(false);

  const handleTogle = () => {
    setshowNav(!showNav);
  };
  return (
    <header className="w-full flex justify-between py-6 items-center px-5">
      <div className="flex items-center gap-5">
        <div className="overflow-hidden rounded-full bg-slate-200 w-16 h-16">
          <img
            src={profile_picture}
            alt="my picture"
            className=""
            width={"80px"}
            height={"80px"}
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
        Open my gitHub <img src={github_icon} alt="Open my github" width={"48px"} />
      </a>
      <a href={my_github_link} target="_blanck" className="text-4xl md:hidden" onClick={handleTogle}>
        <img src={github_icon} alt="Open my github" width={"48px"} />
      </a>
    </header>
  );
};

export default Header;
