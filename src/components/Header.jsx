import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  const date = new Date();
  const year = date.getFullYear();
  const myOld = year - 2008;
  return (
    <header className="w-full flex justify-center">
      <div className="w-contain flex justify-between py-4 items-center">
        <div>
          <p className="font-bold text-2xl">Mardonbek</p>
          <p className="font-bold text-2xl">Khamidov</p>
        </div>
        <p className="text-center">
          front-end developer <br />
          {myOld} years old, Uzbek
        </p>
        <a
          href="https://github.com/Khamidov-M/"
          className="bg-black text-white py-3 px-4"
          target="_blanck"
        >
          Open my gitHub <i class="bx bxl-github"></i>
        </a>
      </div>
    </header>
  );
};

export default Header;
