import React from "react";

const Contact = () => {
  return (
    <div className="w-full flex justify-center py-16">
      <div className="w-contain flex justify-center text-center">
        <div className="space-y-5">
          <h1 className="text-2xl font-bold">Contacts</h1>
          <div>
            <p>Want to know more or just chat? </p>
            <p>You are welcome!</p>
          </div>
          <button className="bg-black text-white py-2 px-6 rounded-full">
            Send messange
          </button>
          <br />
          <br />
          <div className="space-x-10 text-5xl flex">
            <div className="border border-gray-200 shadow-md rounded-md hover:bg-black hover:text-white">
              <a className="px-5 py-4 inline-block" href="https://t.me/Khamidov_devs/" target="_blank">
                <i className="bx bxl-telegram"></i>
              </a>
            </div>
            <div className="border border-gray-200 shadow-md rounded-md hover:bg-black hover:text-white">
              <a className="px-5 py-4 inline-block" href="https://github.com/Khamidov-M/" target="_blank">
                <i className="bx bxl-github"></i>
              </a>
            </div>
            <div className="border border-gray-200 shadow-md rounded-md hover:bg-black hover:text-white">
              <a className="px-5 py-4 inline-block" href="https://yustas.netlify.app/" target="_blank">
                <i className="bx bx-link-alt"></i>
              </a>
            </div>
            <div className="border border-gray-200 shadow-md rounded-md hover:bg-black hover:text-white">
              <a className="px-5 py-4 inline-block" href="https://mardonbekkhamidov69@gmail.com" target="_blank">
                <i className="bx bx-envelope"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
