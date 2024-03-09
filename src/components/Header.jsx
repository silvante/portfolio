import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  const date = new Date();
  const year = date.getFullYear();
  const myOld = year - 2008;
  return (
    <header className="w-full flex justify-center">
      <div className="w-[90%] lg:w-contain flex justify-between py-6 items-center">
        <div>
          <p className="font-bold text-2xl">Mardonbek</p>
          <p className="font-bold text-2xl">Khamidov</p>
        </div>
        <p className="text-center hidden md:block">
          front-end developer <br />
          {myOld} years old, Uzbek
        </p>
        <a
          href="https://github.com/Khamidov-M/"
          className="bg-black text-white py-3 px-4 rounded hidden md:block"
          target="_blanck"
        >
          Open my gitHub <i className="bx bxl-github"></i>
        </a>
        <button className="text-4xl md:hidden">
          <i class="bx bx-menu"></i>
        </button>
      </div>
    </header>
  );
};

export default Header;
