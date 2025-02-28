"use client";

import * as React from "react";
import useBoop from "@/hooks/use-boop";
import { animated } from "@react-spring/web";

import Pill from "../Pill";
import Arrow from "@/assets/arrow-out.svg";
import clsx from "clsx";

type AnimatedPillProps = {
  className?: string;
  children: React.ReactNode;
};

function AnimatedPill({ className, children }: AnimatedPillProps) {
  const [style, trigger] = useBoop({ x: 2, y: -2 });

  return (
    <Pill
      className={clsx(
        "bg-white hover:bg-stone-200 flex gap-2 justify-center items-center",
        className
      )}
      onMouseEnter={trigger}
    >
      {children}
      <animated.span style={style}>
        <Arrow className="h-small_icon" />
      </animated.span>
    </Pill>
  );
}

export default AnimatedPill;
