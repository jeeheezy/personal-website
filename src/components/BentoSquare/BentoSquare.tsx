import * as React from "react";
import clsx from "clsx";
import { animated, SpringValues } from "@react-spring/web";
type BentoSquareProps = {
  children: React.ReactNode;
  className?: string;
  style?: SpringValues<{
    opacity: number;
    transform: string;
  }>;
};

function BentoSquare({ children, className, style }: BentoSquareProps) {
  return style ? (
    <animated.div
      className={clsx(
        "border border-solid border-black rounded-lg p-10",
        className
      )}
      style={style}
    >
      {children}
    </animated.div>
  ) : (
    <div
      className={clsx(
        "border border-solid border-black rounded-md p-10",
        className
      )}
      style={style}
    >
      {children}
    </div>
  );
}

export default BentoSquare;
