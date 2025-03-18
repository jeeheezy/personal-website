"use-client";
import * as React from "react";
// import { animated, useSpring, easings } from "@react-spring/web";
import ShootingStar from "../ShootingStar";
type ToggledBackgroundProp = {
  toggle: boolean;
};

function ToggledBackground({ toggle }: ToggledBackgroundProp) {
  const [windowSize, setWindowSize] = React.useState([0, 0]);
  const ref = React.useRef(null);

  React.useEffect(() => {
    function windowSizeHandler() {
      setWindowSize([
        document.documentElement.getBoundingClientRect().height,
        document.documentElement.getBoundingClientRect().width,
      ]);

      if (ref.current) {
        (ref.current as HTMLElement).style.height = `${
          document.documentElement.getBoundingClientRect().height
        }px`;
      }
    }
    // calling here to set innerHeight and innerWidth on mount
    windowSizeHandler();

    if (toggle) {
      window.addEventListener("resize", windowSizeHandler);
    }

    return () => {
      window.removeEventListener("resize", windowSizeHandler);
    };
  }, [toggle]);

  return (
    <div
      className="absolute w-full -z-10 top-0 left-0 overflow-hidden"
      ref={ref}
    >
      {toggle && (
        <>
          <ShootingStar
            toggle={toggle}
            windowSize={windowSize}
            duration={8000}
          />
          <ShootingStar
            toggle={toggle}
            windowSize={windowSize}
            duration={5000}
            delay={1000}
            className="right-60"
          />

          <ShootingStar
            toggle={toggle}
            windowSize={windowSize}
            duration={4000}
            delay={1000}
            className="right-1/2"
          />
          <ShootingStar
            toggle={toggle}
            windowSize={windowSize}
            duration={4000}
            delay={2000}
            className="right-3/4"
          />
          <ShootingStar
            toggle={toggle}
            windowSize={windowSize}
            duration={5000}
            className="right-1/4"
          />
          <ShootingStar
            toggle={toggle}
            windowSize={windowSize}
            duration={5000}
            className="left-96"
          />
          <ShootingStar
            toggle={toggle}
            windowSize={windowSize}
            duration={5000}
            delay={3000}
            className="top-1/2"
          />

          <ShootingStar
            toggle={toggle}
            windowSize={windowSize}
            duration={5000}
            className="top-1/4"
          />
          <ShootingStar
            toggle={toggle}
            windowSize={windowSize}
            duration={5000}
            delay={1000}
            className="top-3/4"
          />
          <ShootingStar
            toggle={toggle}
            windowSize={windowSize}
            duration={7000}
            delay={3000}
            className="-top-2/3"
          />
          <ShootingStar
            toggle={toggle}
            windowSize={windowSize}
            duration={4000}
            delay={1000}
            className="-top-1/2"
          />
          <ShootingStar
            toggle={toggle}
            windowSize={windowSize}
            duration={4000}
            className="top-40"
          />
          <ShootingStar
            toggle={toggle}
            windowSize={windowSize}
            duration={2000}
            className="bottom-60"
          />
          <ShootingStar
            toggle={toggle}
            windowSize={windowSize}
            duration={6000}
            delay={500}
            className="right-1/4 -top-40"
          />
          <ShootingStar
            toggle={toggle}
            windowSize={windowSize}
            duration={3500}
            delay={500}
            className="right-96 -top-40"
          />
          <ShootingStar
            toggle={toggle}
            windowSize={windowSize}
            duration={3500}
            delay={500}
            className="right-1/4 -top-1/2"
          />
          <ShootingStar
            toggle={toggle}
            windowSize={windowSize}
            duration={7000}
            delay={500}
            className="-right-1/2 -top-96"
          />
          <ShootingStar
            toggle={toggle}
            windowSize={windowSize}
            duration={4000}
            delay={500}
            className="-right-3/4 -top-1/2"
          />
          <ShootingStar
            toggle={toggle}
            windowSize={windowSize}
            duration={4000}
            delay={1000}
            className="-right-3/4"
          />
          <ShootingStar
            toggle={toggle}
            windowSize={windowSize}
            duration={3000}
            delay={500}
            className="-right-1/2"
          />
        </>
      )}
    </div>
  );
}

export default ToggledBackground;
