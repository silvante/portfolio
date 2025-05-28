import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="w-full px-3 hidden md:flex justify-center" id="nav">
      <div className="w-contain flex justify-between py-5 border-b border-b-black">
        <a href="#nav" className={"font-bold"}>Home</a>
        <a href="#about" className={"font-bold"}>About me</a>
        <a href="#skills" className={"font-bold"}>Skills</a>
        <a href="#portfolio" className={"font-bold"}>Portfolio</a>
        <a href="#contact" className={"font-bold"}>Contact</a>
      </div>
    </nav>
  );
};

export default Navbar;
