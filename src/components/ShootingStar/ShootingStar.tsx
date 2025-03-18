import * as React from "react";
import { useSpring, easings, animated } from "@react-spring/web";
import clsx from "clsx";

type ShootingStarProps = {
  toggle: boolean;
  windowSize: number[];
  duration: number;
  delay?: number;
  className?: string;
};

function ShootingStar({
  toggle,
  windowSize,
  duration,
  delay = 0,
  className,
}: ShootingStarProps) {
  const [style, api] = useSpring(() => ({
    from: {
      transform: `translate(0px, 0px)`,
      opacity: 0,
    },
    immediate: true,
  }));

  React.useEffect(() => {
    const x = -windowSize[1] - 300;
    const y = windowSize[0] + 100;
    api.set({
      transform: "translate(0px, 0px)",
      opacity: 0,
    });
    api.start({
      reset: true,
      to: async (next) => {
        while (true) {
          await next({
            delay: delay,
            transform: `translate(${x}px, ${y}px)`,
            opacity: 1,
          });
          await next({
            transform: "translate(0px, 0px)",
            opacity: 0,
            immediate: true,
          });
        }
      },
      config: { duration: duration, easing: easings.easeInOutCubic },
    });
  }, [windowSize, api, delay, duration]);
  return (
    <animated.span
      className={clsx(
        "absolute w-1 h-1 bg-white before:absolute before:w-80 before:h-1 before:bg-gradient-to-r from-white to-transparent before:rotate-[320deg] md:before:rotate-[340deg]  before:origin-left before:left-0 top-0 right-0 rounded-full shadow-custom opacity-0",
        className
      )}
      style={toggle ? style : {}}
    ></animated.span>
  );
}

export default ShootingStar;
