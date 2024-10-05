import { ClassValue } from "clsx";
import React from "react";
import { cn } from "../lib/utils";
type buttonType = {
  children: React.ReactNode;
  className: ClassValue;
};
const Button = ({ children, className }: buttonType) => {
  return (
    <button
      className={cn(
        "flex gap-2 rounded-md py-[6px] transition delay-150 duration-300 ease-in-out hover:scale-105",
        className,
      )}
    >
      {children}
    </button>
  );
};

export default Button;
