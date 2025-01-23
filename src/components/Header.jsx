import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  const date = new Date();
  const year = date.getFullYear();
  const myOld = year - 2008;

  const [showNav, setshowNav] = useState(false);

  const handleTogle = () => {
    setshowNav(!showNav);
  };
  return (
    <header className="w-full flex justify-center">
      <div className="w-[90%] lg:w-contain flex justify-between py-6 items-center">
        <div>
          <p className="font-bold text-2xl">Mardonbek</p>
          <p className="font-bold text-2xl">Khamidov</p>
        </div>
        <p className="text-center hidden md:block">
          Software engineer <br />
          {myOld} years old, Uzbek
        </p>
        <a
          href="https://github.com/silvante/"
          className="bg-black text-white py-3 px-4 rounded hidden md:block"
          target="_blanck"
        >
          Open my gitHub <i className="bx bxl-github"></i>
        </a>
        <button className="text-4xl md:hidden" onClick={handleTogle}>
          {showNav ? (
            <i className="bx bx-x"></i>
          ) : (
            <i className="bx bx-menu"></i>
          )}
        </button>
      </div>
      <div
        className={`bg-white border-b-2 border-black absolute top-28 w-full p-3 flex justify-center md:hidden transition-all ${
          !showNav ? "translate-x-[-100%]" : "translate-x-0"
        }`}
      >
        <div className="w-[90%] flex flex-col">
          <a href="#nav"
            className={
              "font-bold py-4 hover:bg-slate-300 px-2 transition-all rounded"
            }
          >
            Home
          </a>
          <a href="#about"
            className={
              "font-bold py-4 hover:bg-slate-300 px-2 transition-all rounded"
            }
          >
            About me
          </a>
          <a href="#skills"
            className={
              "font-bold py-4 hover:bg-slate-300 px-2 transition-all rounded"
            }
          >
            Skills
          </a>
          <a href="#portfolio"
            className={
              "font-bold py-4 hover:bg-slate-300 px-2 transition-all rounded"
            }
          >
            Portfolio
          </a>
          <a href="#contact"
            className={
              "font-bold py-4 hover:bg-slate-300 px-2 transition-all rounded"
            }
          >
            Contact
          </a>
          <a
            href="https://github.com/silvante/"
            className="bg-black text-white py-3 px-4 rounded text-center mt-4 hover:bg-gray-900"
            target="_blanck"
          >
            Open my gitHub <i className="bx bxl-github"></i>
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
