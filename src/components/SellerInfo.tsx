"use client";
import React, { useState } from "react";
import { PhoneCall, Phone } from "lucide-react";

const SellerInfo = () => {
  const [show, setShow] = useState(false);
  return (
    <div className="flex w-full flex-col gap-3">
      <button
        onClick={() => setShow((prev) => !prev)}
        className="mx-auto w-[60%] rounded-md bg-gradient-to-r from-sky-400 to-purple-500 px-3 py-2 text-xl text-white"
      >
        {!show ? (
          <p className="flex w-full items-center justify-center">
            <PhoneCall /> <span className="ml-4">+251***</span>
          </p>
        ) : (
          `+251920181846`
        )}
      </button>
      <button className="mx-auto flex w-[60%] items-center justify-center gap-4 rounded-md bg-green-600 px-3 py-2 text-white">
        <Phone />
        Telegram
      </button>
      <div className="my-3">
        <h2 className="text-center text-xl font-bold">Contact via Email</h2>
        <form action="" className="mx-auto flex w-[90%] flex-col gap-4">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            className="rounded-md border-[1px] border-slate-300 px-3 py-2 focus:outline-none"
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            className="rounded-md border-[1px] border-slate-300 px-3 py-2 focus:outline-none"
          />
          <textarea
            name="message"
            placeholder="Your Message"
            className="border-[1px] border-slate-300 px-3 py-2 focus:outline-none"
          />
          <button className="rounded-md bg-pink-500 px-3 py-2 text-white transition duration-300 ease-in-out hover:bg-pink-700">
            Contact Seller
          </button>
        </form>
      </div>
    </div>
  );
};

export default SellerInfo;
