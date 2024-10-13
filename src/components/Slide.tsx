"use client";
import React, { useState } from "react";
import { slides } from "./data";
import Image from "next/image";

const Slide = () => {
  const [images, setImages] = useState(slides[0].images);
  return (
    <>
      <div className="h-[400px] w-full">
        <Image
          src={images}
          width={500}
          height={500}
          alt="home"
          className="h-full w-full rounded-md"
        />
      </div>
      <div className="my-2 flex gap-2">
        {slides.map((datas) => (
          <Image
            src={datas.images}
            width={128}
            height={128}
            alt="images"
            key={datas.index}
            onClick={() => setImages(datas.images)}
            className="w-[25%] cursor-pointer rounded-md"
          />
        ))}
      </div>
    </>
  );
};

export default Slide;
