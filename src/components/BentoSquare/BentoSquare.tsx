import * as React from "react";
import clsx from "clsx";
type BentoSquareProps = {
  children: React.ReactNode;
  className?: string;
};

function BentoSquare({ children, className }: BentoSquareProps) {
  return (
    <div
      className={clsx("border border-solid border-black rounded-md", className)}
    >
      {children}
    </div>
  );
}

export default BentoSquare;
