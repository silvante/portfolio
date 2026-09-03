"use client";
import { useState } from "react";
import Link from "next/link";
import {MoveRight} from "lucide-react";
import Nav from "@/app/(components)/Nav";

export default function Header() {
  const date = new Date();
  const year = date.getFullYear();
  const myOld = year - 2008;

  const [showNav, setshowNav] = useState(false);

  const handleTogle = () => {
    setshowNav(!showNav);
  };

  return (
    <header className="w-full py-4 px-5 border-b border-b-gray-200 flex justify-center items-center sticky top-0 left-0 bg-white/90 backdrop-blur-md z-50">
        <section className="container flex justify-between items-center">
            <div className="flex items-center gap-2 sm:gap-5">
                <Link href={"/"}>
                    <p className="font-semibold text-4xl">Xamidov<span className="base_text">.</span></p>
                </Link>
            </div>
            <div className="flex items-center gap-6">
                <Nav />
                <Link href={"/contacts"} className="base_btn">Bog'lanish <MoveRight /></Link>
            </div>
        </section>
    </header>
  );
}
