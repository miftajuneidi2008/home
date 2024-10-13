import React from "react";

import Image from "next/image";
import { images } from "./data";
import Link from "next/link";
const Grid = () => {
  return (
    <div className="grid grid-cols-1 gap-3 py-6 sm:grid-cols-2 md:grid-cols-3">
      {images.map((img) => (
        <Link
          href={`/homes/${img.index}`}
          className="transform cursor-pointer shadow-sm transition delay-150 duration-500 ease-in-out hover:scale-105"
          key={img.index}
        >
          <Image
            src={img.src}
            width={400}
            height={400}
            alt="home"
            className="h-64 rounded-md"
          />
          <div className="p-4">
            <p className="font-bold text-slate-700 sm:text-xl">
              13,000,000 ETB
            </p>
            <p className="py-2 font-semibold text-slate-500">
              2 bed and 2 bath
            </p>
            <p className="text-slate-500">Adama,Ethiopia</p>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Grid;
