"use client";
import axios from "axios";
import React, { useState } from "react";
import toast from "react-hot-toast";

export default function Contact() {
  const success = () => {
    toast.success("your massange send");
  };
  const error = () => {
    toast.error("please fill the form");
  };
  //   const [open, setOpen] = React.useState(0);
  const [link, setlink] = useState("https://yustas.netlify.app/");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [massange, setmassange] = useState("");

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    if (name === "" || email === "" || massange === "") {
      error();
    } else {
      success();
      const telegram_bot_id = "8196784580:AAGgjaKGPMvJi9EzNzbX7Kqena2NTSmhKdc";
      const chat_id = "7734275555";

      const telegramMessage = `
      ${link} from your portfolio came new\n Ⓜ️assange\n\n massange send by: ${name}\n email of visitor: ${email}\n\n the massange was:\n ${massange}\n\n please check the massange and answer ✅
      `;

      await axios
        .post(`https://api.telegram.org/bot${telegram_bot_id}/sendMessage`, {
          chat_id,
          text: telegramMessage,
        })
        .then((response) => {
          setName("");
          setEmail("");
          setmassange("");
        })
        .catch((error) => {
          console.error(error);
          error();
        });
    }
  };
  return (
    <div className="w-full flex justify-center py-10" id="contact">
      <div className="w-[90%] lg:w-contain flex justify-center text-center">
        <div className="space-y-5">
          <h2 className="text-2xl font-semibold">Send Quick Message</h2>
          <div>
            <p>Want to know more or just chat? </p>
            <p>You are welcome!</p>
          </div>
          <form onSubmit={handleSubmit} className="w-full sm:w-96 mx-auto">
            <div className="w-full mx-auto flex flex-col justify-start text-start mb-3">
              <label>name</label>
              <input
                onChange={(e) => setName(e.target.value)}
                value={name}
                type="text"
                required
                className="py-3 px-3 outline-none rounded-xl border-none body_bg"
              />
            </div>
            <div className="w-full mx-auto flex flex-col text-start mb-3">
              <label>email</label>
              <input
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                type="email"
                required
                className="py-3 px-3 outline-none rounded-xl border-none body_bg"
              />
            </div>
            <div className="w-full mx-auto flex flex-col text-start mb-3">
              <label>meassange</label>
              <textarea
                onChange={(e) => setmassange(e.target.value)}
                value={massange}
                required
                className="py-2 px-3 outline-none rounded-xl border-none body_bg resize-none"
              ></textarea>
            </div>
            <button
              type="submit"
              className="bg-violet-600 text-white py-2 px-6 rounded-full mt-2"
            >
              Send message
            </button>
          </form>
          <p>See you leter!</p>
        </div>
      </div>
    </div>
  );
}
