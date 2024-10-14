import React from "react";
import h1 from "@/assets/images/h1.png";
import h2 from "@/assets/images/h2.png";
import h3 from "@/assets/images/h3.png";
import h4 from "@/assets/images/h4.png";
import Image from "next/image";
import Link from "next/link";
const Forsale = () => {
  return (
    <div className="mx-auto max-w-[1300px] py-12">
      <h1 className="text-xl font-bold sm:text-2xl">Homes for Sale</h1>
      <div className="h-1 w-20 bg-pink-500"></div>

      <div className="grid grid-cols-1 gap-3 py-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        <div className="cursor-pointer shadow-md">
          <Image
            src={h1}
            width={400}
            height={400}
            alt="home"
            className="h-64"
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
        </div>

        <div className="cursor-pointer shadow-md">
          <Image
            src={h2}
            width={400}
            height={400}
            alt="home"
            className="h-64"
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
        </div>
        <div className="cursor-pointer shadow-md">
          <Image
            src={h3}
            width={400}
            height={400}
            alt="home"
            className="h-64"
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
        </div>

        <div className="cursor-pointer shadow-md">
          <Image
            src={h4}
            width={400}
            height={400}
            alt="home"
            className="h-64"
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
        </div>
      </div>
      <Link href={`/sell`} className="text-blue-500">
        Explore more
      </Link>
    </div>
  );
};

export default Forsale;
