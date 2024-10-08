import { cn } from "@/lib/utils";
import { ClassValue } from "clsx";
import React from "react";
type containerProps = {
  children: React.ReactNode;
  className?: ClassValue;
};
const Container = ({ children, className }: containerProps) => {
  return (
    <div className={cn("mx-auto max-w-[1300px]", className)}>{children}</div>
  );
};

export default Container;
