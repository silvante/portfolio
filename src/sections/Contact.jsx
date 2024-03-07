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
          <button className="bg-black text-white py-2 px-6 rounded-full">Send messange</button>
          <br />
          <br />
          <div className="space-x-10 text-5xl">
            <a href="https://t.me/Khamidov_devs"><i className='bx bxl-telegram'></i></a>
            <a href="#"><i className='bx bxl-github'></i></a>
            <a href="#"><i className='bx bx-link-alt'></i></a>
            <a href="#"><i className='bx bx-envelope'></i></a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
