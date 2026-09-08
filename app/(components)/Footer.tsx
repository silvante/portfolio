import Link from "next/link";
import {contacts} from "@/app/data";

export default function Footer() {
  const date = new Date();
  const year = date.getFullYear();

  return (
    <footer className="p-5 lg:p-10 border-t border-gray-200">
      <div className="container md:flex justify-between items-center mx-auto space-y-4 md:space-y-0">
          <Link href={"/"} className="flex">
            <p className="font-semibold text-4xl">Xamidov<span className="base_text">.</span></p>
          </Link>
          <div className="flex gap-8">
              {contacts.map((c) => (
                  <a href={c.link} target="_blank" key={c.id}>{c.name}</a>
              ))}
          </div>
          <p>© {year} Xamidov.uz</p>
      </div>
    </footer>
  );
}
