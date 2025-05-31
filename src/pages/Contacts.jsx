import React from "react";
import Contact from "../sections/Contact";
import { Github, Link, Send, Youtube } from "lucide-react";
import { my_github_link } from "../data";

const Contacts = () => {
  return (
    <div className="p-5 space-y-5">
      <h1 className="text-2xl font-semibold">Contacts</h1>
      <p>
        As a person who does not like jokes, I remember you, please whire or
        call to me only about something important, non-important messages and
        call will be ignored or even spammed. thank you for understanding and
        those are all of my social contacts, phone number and email, mostly I
        can answer from 9:00 to 22:00, thank you!
      </p>
      <div className="space-y-3">
        <p>-- My Email</p>
        <h3 className="text-xl font-semibold">info@xamidov.uz</h3>
      </div>
      <div className="space-y-3">
        <p>-- My phone number</p>
        <h3 className="text-xl font-semibold">+998 (33) 303 82 82</h3>
      </div>
      <div className="space-y-3">
        <p>-- My social account</p>
        <ul className="flex flex-wrap gap-3">
          <li>
            <a href="https://t.me/newassembler" target="_blanck" className="flex items-center gap-3 py-2 px-4 bg-blue-500 rounded-md"><Send /> Telegram</a>
          </li>
          <li>
            <a href={my_github_link} target="_blanck" className="flex items-center gap-3 py-2 px-4 bg-gray-950 rounded-md"><Github /> GitHub</a>
          </li>
          <li>
            <a href="https://xamidov.uz" target="_blanck" className="flex items-center gap-3 py-2 px-4 bg-violet-600 rounded-md"><Link /> Portfolio</a>
          </li>
          <li>
            <a href="https://www.youtube.com/@valentine_82" target="_blanck" className="flex items-center gap-3 py-2 px-4 bg-red-600 rounded-md"><Youtube /> Youtube</a>
          </li>
        </ul>
      </div>
      <Contact />
    </div>
  );
};

export default Contacts;
// 