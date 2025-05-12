import * as React from "react";
import clsx from "clsx";
import { animated, SpringValues } from "@react-spring/web";

type BentoSquareProps = {
  children: React.ReactNode;
  className?: string;
  trailStyle?: SpringValues<{
    opacity: number;
    transform: string;
  }>;
  dragStyle?: {
    transform?: string | undefined;
    transition?: string | undefined;
  };
  animationDone?: boolean;
};

function BentoSquare(
  {
    children,
    className,
    trailStyle,
    dragStyle,
    animationDone,
  }: BentoSquareProps,
  ref: React.Ref<HTMLDivElement>
) {
  return trailStyle ? (
    <animated.div
      className={clsx(
        "border border-solid border-black rounded-lg p-10",
        className
      )}
      style={animationDone ? dragStyle : trailStyle}
      ref={ref}
    >
      {children}
    </animated.div>
  ) : (
    <div
      className={clsx(
        "border border-solid border-black rounded-md p-10",
        className
      )}
    >
      {children}
    </div>
  );
}

export default React.forwardRef(BentoSquare);
