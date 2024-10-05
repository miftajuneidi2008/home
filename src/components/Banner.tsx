import React from "react";
import back from "../assets/images/back.png";
import { Search } from "lucide-react";
import Image from "next/image";
const Banner = () => {
  return (
    <div className="relative my-2 h-[55vh] w-full">
      <Image
        src={back}
        width={600}
        height={1000}
        alt="Back"
        className="h-full w-full rounded-md object-cover"
      />
      <div className="absolute bottom-0 left-0 right-0 top-0 flex h-full w-full flex-col items-center justify-center bg-black/50">
        <div>
          <h1 className="text-2xl font-semibold text-white md:text-4xl">
            Find Your Dream Home Today
          </h1>
          <div className="my-4 flex w-full items-center rounded-full bg-white px-1">
            <input
              type="text"
              name="search"
              placeholder="Enter an address,city"
              className="flex-grow rounded-full px-2 py-4 focus:outline-none"
            />
            <button>
              {" "}
              <Search />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
