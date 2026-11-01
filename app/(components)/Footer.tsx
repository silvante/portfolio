import Link from "next/link";
import {contacts} from "@/app/data";
import Image from "next/image";
import icon from "@/app/assets/marketting/icon.svg"

export default function Footer() {
  const date = new Date();
  const year = date.getFullYear();

  return (
    <footer className="p-5 lg:p-10 border-t border-gray-200">
      <div className="container md:flex justify-between items-center mx-auto space-y-4 md:space-y-0">
          <div className="flex gap-8 flex-1 justify-start items-center">
              {contacts.map((c) => (
                  <a href={c.link} target="_blank" key={c.id}>{c.name}</a>
              ))}
          </div>
          <Link href={"/"} className="flex">
              <Image src={icon} alt={"Xamidov & Associates"} width={30} />
          </Link>
          <div className={"flex-1 flex justify-end items-center"}>
              <p>© {year} Xamidov.uz</p>
          </div>
      </div>
    </footer>
  );
}
