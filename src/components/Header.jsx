import React, { useEffect, useState } from "react";
import { profile_picture } from "../data";

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
        <div className="overflow-hidden rounded-full bg-slate-200">
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
        href="https://github.com/silvante/"
        className="base_bg text-white py-3 px-4 rounded hidden md:block"
        target="_blanck"
      >
        Open my gitHub <i className="bx bxl-github"></i>
      </a>
      <button className="text-4xl md:hidden" onClick={handleTogle}>
        {showNav ? <i className="bx bx-x"></i> : <i className="bx bx-menu"></i>}
      </button>
    </header>
  );
};

export default Header;
