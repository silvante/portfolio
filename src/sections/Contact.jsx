import { TextField } from "@mui/material";
import React, { useState } from "react";
import axios from "axios";

const Contact = () => {
  const [open, setOpen] = React.useState(0);
  const [link, setlink] = useState("https://yustas.netlify.app/");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [massange, setmassange] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name === "" || email === "" || massange === "") {
      alert("malumotni toldiring");
    } else {
      alert("malumot yuborildi");
      const telegram_bot_id = "7143795380:AAF4yahdu77vrEkyPDWW-Ck8P0gERrxn7bw";
      const chat_id = "6940337371";

      const telegramMessage = `
      ${link} from your portfolio come massange\n massange send by:\n ${name}\n\n email of visitor:\n ${email}\n\n the massange was:\n ${massange}\n\n please check the massange and answer ✅
      `;

      axios
        .post(`https://api.telegram.org/bot${telegram_bot_id}/sendMessage`, {
          chat_id,
          text: telegramMessage,
        })
        .then((response) => {
          setName("");
          setEmail("");
          setmassange("");
        });
      // .catch((error) => {
      //   console.error(error);
      // });
    }
    if (!validateEmail(email)) {
      setError("Hatolik! Malumot email formatida emas");
      return;
    }
  };
  return (
    <div className="w-full flex justify-center py-16">
      <div className="w-contain flex justify-center text-center">
        <div className="space-y-5">
          <h1 className="text-2xl font-bold">Contacts</h1>
          <div>
            <p>Want to know more or just chat? </p>
            <p>You are welcome!</p>
          </div>
          <form onSubmit={handleSubmit}>
            <div className=" w-96 mx-auto flex flex-col justify-start text-start mb-3">
              <label>name</label>
              <input
                onChange={(e) => setName(e.target.value)}
                value={name}
                type="text"
                className=" border-gray-400 bg-gray-200 border py-3 px-3 outline-none rounded-md"
              />
            </div>
            <div className=" w-96 mx-auto flex flex-col text-start mb-3">
              <label>email</label>
              <input
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                type="email"
                className="border-gray-400 bg-gray-200 border py-3 px-3 outline-none rounded-md"
              />
            </div>
            <div className=" w-96 mx-auto flex flex-col text-start mb-3">
              <label>meassange</label>
              <textarea
                onChange={(e) => setmassange(e.target.value)}
                value={massange}
                className="border-gray-400 h-32 resize-none bg-gray-200 border py-2 px-3 outline-none rounded-md"
              ></textarea>
            </div>
            <button
              type="submit"
              className="bg-black text-white py-2 px-6 rounded-full mt-2"
            >
              Send meassange
            </button>
          </form>
          <p>sokial connections</p>
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