"use client";
import Link from "next/link";
import React, { useState } from "react";
import { Plus, AlignJustify, X } from "lucide-react";
import Button from "./Button";
import { links } from "./data";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";
import { roboto_mono } from "@/app/fonts/font";
const Navbar = () => {
  const pathname = usePathname();
  const [nav, setNav] = useState(false);
  return (
    <header
      className={`${roboto_mono.className} sticky top-0 z-50 h-[80px] w-full bg-slate-50 shadow-sm`}
    >
      <nav className="container relative mx-auto flex h-full w-full items-center">
        {/* for large devices */}
        <div className="hidden w-full items-center justify-between sm:flex">
          <div className="flex h-full w-full items-center gap-4">
            <Link
              href={`/`}
              className="pr-3 text-xl font-bold text-blue-600 lg:text-2xl"
            >
              Birra Home
            </Link>
            {links.map((link) => (
              <Link
                href={link.to}
                key={link.name}
                className={cn(
                  "rounded-md px-2 py-[6px] uppercase text-slate-600 hover:bg-teal-500 hover:text-white md:px-3",
                  {
                    "text-indigo-800": pathname === link.to,
                  },
                )}
              >
                {link.name}
              </Link>
            ))}
          </div>
          <div className="flex h-full w-2/4 items-center justify-end gap-3">
            <Button className="bg-indigo-600 px-2 text-white">
              <Plus />
              Post Add
            </Button>
            <Button className="border-[1px] border-indigo-300 px-4">
              Login
            </Button>
          </div>
        </div>

        {/* for mobile devices */}
        <div className="mx-2 flex w-full items-center justify-between sm:hidden">
          <Link href={`/`} className="pr-4 text-xl font-bold text-blue-600">
            Birra Home
          </Link>
          <button onClick={() => setNav((prev) => !prev)}>
            {!nav ? <AlignJustify size={34} /> : <X size={34} />}
          </button>
        </div>

        <div
          className={`absolute right-0 top-[80px] ${nav ? "flex flex-col items-center gap-6" : "hidden"} min-h-screen w-[70%] bg-slate-100 sm:hidden`}
        >
          {links.map((link) => (
            <Link
              href={link.to}
              key={link.name}
              className={cn(
                "mx-auto w-[90%] py-2 text-center uppercase text-slate-600 hover:bg-teal-500 hover:text-white",
                {
                  "text-indigo-800": pathname === link.to,
                },
              )}
            >
              {link.name}
            </Link>
          ))}

          <div className="flex h-full w-full flex-col items-center gap-3">
            <Button className="bg-indigo-600 px-2 text-white">
              <Plus />
              Post Add
            </Button>
            <Button className="border-[1px] border-indigo-300 px-4">
              Login
            </Button>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
