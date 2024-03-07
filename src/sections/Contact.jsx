import { TextField } from "@mui/material";
import React, { useState } from "react";

const Contact = () => {
  const [show, setshow] = useState(false);
  return (
    <div className="w-full flex justify-center py-16">
      <div className="w-contain flex justify-center text-center">
        <div className="space-y-5">
          <h1 className="text-2xl font-bold">Contacts</h1>
          <div>
            <p>Want to know more or just chat? </p>
            <p>You are welcome!</p>
          </div>
          <form
            className={`transition-all${
              !show ? "translate-y-[-100%]" : "translate-y-[0%]"
            }`}
          >
            <div className=" w-96 mx-auto flex flex-col justify-start text-start mb-3">
              <label>name</label>
              <input
                type="text"
                className=" border-gray-400 bg-gray-200 border py-3 px-3 outline-none rounded-md"
              />
            </div>
            <div className=" w-96 mx-auto flex flex-col text-start mb-3">
              <label>email</label>
              <input
                type="email"
                className="border-gray-400 bg-gray-200 border py-3 px-3 outline-none rounded-md"
              />
            </div>
            <div className=" w-96 mx-auto flex flex-col text-start mb-3">
              <label>meassange</label>
              <textarea className="border-gray-400 h-32 resize-none bg-gray-200 border py-2 px-3 outline-none rounded-md"></textarea>
            </div>
            <button type="submit" className="bg-black text-white py-2 px-6 w-48 rounded-md mt-3">
              Send meassange
            </button>
          </form>
          <br />
          <br />
          <div className="space-x-10 text-5xl flex">
            <div className="border border-gray-300 shadow-md rounded-md hover:bg-black hover:text-white">
              <a
                className="px-5 py-4 inline-block"
                href="https://t.me/Khamidov_devs/"
                target="_blank"
              >
                <i className="bx bxl-telegram"></i>
              </a>
            </div>
            <div className="border border-gray-300 shadow-md rounded-md hover:bg-black hover:text-white">
              <a
                className="px-5 py-4 inline-block"
                href="https://github.com/Khamidov-M/"
                target="_blank"
              >
                <i className="bx bxl-github"></i>
              </a>
            </div>
            <div className="border border-gray-300 shadow-md rounded-md hover:bg-black hover:text-white">
              <a
                className="px-5 py-4 inline-block"
                href="https://yustas.netlify.app/"
                target="_blank"
              >
                <i className="bx bx-link-alt"></i>
              </a>
            </div>
            <div className="border border-gray-300 shadow-md rounded-md hover:bg-black hover:text-white">
              <a
                className="px-5 py-4 inline-block"
                href="https://mardonbekkhamidov69@gmail.com"
                target="_blank"
              >
                <i className="bx bx-envelope"></i>
              </a>
            </div>
          </div>
          <p>my Phone</p>
          <p className="text-xl font-bold">+998 (33) 303-82-82</p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
