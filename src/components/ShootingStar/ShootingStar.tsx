import * as React from "react";
import { useSpring, easings, animated } from "@react-spring/web";
import clsx from "clsx";

type AllowedFractions =
  | "1/8"
  | "1/4"
  | "3/8"
  | "1/2"
  | "5/8"
  | "3/4"
  | "7/8"
  | "-1/8"
  | "-1/4"
  | "-3/8"
  | "-1/2"
  | "-5/8"
  | "-3/4"
  | "-7/8";

type ShootingStarProps = {
  toggle: boolean;
  // windowSize: number[];
  duration: number;
  delay?: number;
  className?: string;
  offset?: {
    x?: AllowedFractions;
    y?: AllowedFractions;
  };
};

function ShootingStar({
  toggle,
  // windowSize,
  offset,
  duration,
  delay = 0,
  className,
}: ShootingStarProps) {
  const [style, api] = useSpring(() => ({
    from: {
      transform: `translate(-10vw, -10vh)`,
      opacity: 0,
    },
    immediate: true,
  }));

  function parseFraction(fraction: string): number {
    const [numerator, denominator] = fraction.split("/").map(Number);
    if (isNaN(numerator) || isNaN(denominator) || denominator === 0) {
      throw new Error(`Invalid fraction: ${fraction}`);
    }
    return numerator / denominator;
  }

  let xTranslate = -120,
    yTranslate = 120;
  // for sake of simplicity for now, will control inset with top and right, disregarding left and right
  let top = "top-0",
    right = "right-0";
  if (offset) {
    if (offset.x) {
      xTranslate = xTranslate + parseFraction(offset.x) * 100;
      yTranslate = yTranslate - parseFraction(offset.x) * 100;
      right = `${offset.x.startsWith("-") ? "-" : ""}right-${offset.x.replace(
        "-",
        ""
      )}`;
    }
    if (offset.y) {
      yTranslate = yTranslate - parseFraction(offset.y) * 100;
      xTranslate = xTranslate + parseFraction(offset.y) * 100;
      top = `${offset.y.startsWith("-") ? "-" : ""}top-${offset.y.replace(
        "-",
        ""
      )}`;
    }
  }

  React.useEffect(() => {
    api.set({
      transform: "translate(0vw, 0vh)",
      opacity: 0,
    });
    api.start({
      reset: true,
      to: async (next) => {
        while (true) {
          await Promise.all([
            next({
              delay: delay,
              transform: `translate(${xTranslate}vw, ${yTranslate}vh)`,
              config: { duration: duration, easing: easings.easeInOutCubic },
            }),
            (async () => {
              await next({
                delay: delay,
                opacity: 1,
                config: { duration: duration * 0.5 },
              });
              await next({
                opacity: 0,
                config: { duration: duration * 0.5 },
              });
            })(),
          ]);
          // await next({
          //   delay: delay,
          //   transform: `translate(${xTranslate}vw, ${yTranslate}vh)`,
          //   opacity: 1,
          // });
          await next({
            transform: "translate(0vw, 0vh)",
            opacity: 0,
            immediate: true,
          });
        }
      },
    });
  }, [api, delay, duration, xTranslate, yTranslate]);
  return (
    <animated.span
      className={clsx(
        "absolute w-1 h-1 bg-white before:absolute before:w-80 before:h-1 before:bg-gradient-to-r from-white to-transparent before:rotate-[310deg] md:before:rotate-[320deg] lg:before:rotate-[340deg]  before:origin-left before:left-0 rounded-full shadow-custom opacity-0",
        top,
        right,
        className
      )}
      style={toggle ? style : {}}
    ></animated.span>
  );
}

export default ShootingStar;
