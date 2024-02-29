import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="w-full flex justify-center">
      <div className="w-contain flex justify-between py-5 border-b border-b-black">
        <NavLink className={"font-bold"}>Home</NavLink>
        <NavLink className={"font-bold"}>About me</NavLink>
        <NavLink className={"font-bold"}>Skills</NavLink>
        <NavLink className={"font-bold"}>Portfolio</NavLink>
        <NavLink className={"font-bold"}>Contact</NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
