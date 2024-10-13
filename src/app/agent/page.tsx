import React from "react";
import broker from "@/assets/images/broker.png";
import Image from "next/image";
import { lusitana, roboto_mono } from "../fonts/font";
import Agents from "@/components/Agents";
const page = () => {
  return (
    <section className="my-1">
      <div className="flex h-[50vh] items-center bg-gradient-to-r from-gray-300">
        <div className="mx-auto flex h-full w-full items-center justify-between px-8 md:px-16 lg:px-32">
          <div className={`${roboto_mono.className} `}>
            <h1
              className={`max-w-[500px] bg-purple-500 bg-gradient-to-r from-blue-500 bg-clip-text text-xl font-bold text-transparent md:text-3xl`}
            >
              We're Here to Help You Find Your Home.
            </h1>
            <p className="py-2 text-[18px] lg:py-6">
              Let Us Find Your Perfect Rental
            </p>
          </div>
          <div className="">
            <Image
              src={broker}
              width={400}
              height={400}
              alt="Broker"
              className="rounded-md object-contain"
            />
          </div>
        </div>
      </div>
      <div className="my-2 w-full">
        <Agents />
      </div>
    </section>
  );
};

export default page;
