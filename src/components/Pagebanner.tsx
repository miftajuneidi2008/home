import React from "react";
import Filter from "./Filter";
import Image, { StaticImageData } from "next/image";
import { cn } from "@/lib/utils";
import { ClassValue } from "clsx";
type bannerProps = {
  title: string;
  desc: string;
  img: string | StaticImageData;
  className?: ClassValue;
};
const Pagebanner = ({ title, desc, img, className }: bannerProps) => {
  return (
    <div className={cn("", className)}>
      <div className="flex h-64 w-full justify-between">
        <div className="flex flex-col gap-4 px-8 py-10 sm:px-16 lg:px-32">
          <h1 className="max-w-xl text-xl font-semibold md:text-3xl lg:text-4xl">
            {title}
          </h1>
          <p className="max-w-xl text-slate-600">{desc}</p>
        </div>
        <div>
          <Image
            src={img}
            width={500}
            height={500}
            alt="Home"
            className="h-[200px] object-contain"
          />
        </div>
      </div>
      <Filter />
    </div>
  );
};

export default Pagebanner;
