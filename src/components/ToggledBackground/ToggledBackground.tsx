"use-client";
import * as React from "react";
// import { animated, useSpring, easings } from "@react-spring/web";
import ShootingStar from "../ShootingStar";
type ToggledBackgroundProp = {
  toggle: boolean;
};

function ToggledBackground({ toggle }: ToggledBackgroundProp) {
  return (
    <div className="fixed w-screen h-screen inset-0 -z-10 overflow-hidden">
      {toggle && (
        <>
          <ShootingStar toggle={toggle} duration={8000} />
          <ShootingStar
            toggle={toggle}
            duration={10000}
            offset={{ x: "1/8" }}
          />
          <ShootingStar
            toggle={toggle}
            duration={4000}
            delay={3000}
            offset={{ x: "1/4" }}
          />
          <ShootingStar toggle={toggle} duration={5000} offset={{ x: "3/8" }} />
          <ShootingStar
            toggle={toggle}
            duration={4000}
            delay={1000}
            offset={{ x: "1/2" }}
          />
          <ShootingStar toggle={toggle} duration={6000} offset={{ x: "5/8" }} />
          <ShootingStar
            toggle={toggle}
            duration={7000}
            delay={2000}
            offset={{ x: "3/4" }}
          />
          <ShootingStar
            toggle={toggle}
            duration={4000}
            delay={500}
            offset={{ x: "7/8" }}
          />
          <ShootingStar toggle={toggle} duration={2000} offset={{ y: "1/8" }} />
          <ShootingStar
            toggle={toggle}
            duration={8000}
            delay={500}
            offset={{ y: "1/4" }}
          />
          <ShootingStar
            toggle={toggle}
            duration={4000}
            delay={3000}
            offset={{ y: "3/8" }}
          />
          <ShootingStar
            toggle={toggle}
            duration={8000}
            delay={3000}
            offset={{ y: "1/2" }}
          />
          <ShootingStar toggle={toggle} duration={8000} offset={{ y: "5/8" }} />
          <ShootingStar
            toggle={toggle}
            duration={5000}
            delay={3000}
            offset={{ y: "3/4" }}
          />
          <ShootingStar
            toggle={toggle}
            duration={7000}
            delay={1000}
            offset={{ y: "7/8" }}
          />
          <ShootingStar
            toggle={toggle}
            duration={5000}
            offset={{ x: "-1/8", y: "-1/8" }}
          />
          <ShootingStar
            toggle={toggle}
            duration={7000}
            delay={500}
            offset={{ x: "-1/8", y: "-1/4" }}
          />
          <ShootingStar
            toggle={toggle}
            duration={6000}
            delay={500}
            offset={{ x: "-1/8", y: "-3/8" }}
          />
          <ShootingStar
            toggle={toggle}
            duration={5000}
            delay={500}
            offset={{ x: "-1/8", y: "-1/2" }}
          />
          <ShootingStar
            toggle={toggle}
            duration={7000}
            delay={100}
            offset={{ x: "-1/4", y: "1/8" }}
          />
          <ShootingStar
            toggle={toggle}
            duration={6000}
            offset={{ x: "-1/4", y: "1/4" }}
          />
          <ShootingStar
            toggle={toggle}
            duration={8000}
            delay={500}
            offset={{ x: "-1/4", y: "3/8" }}
          />
          <ShootingStar
            toggle={toggle}
            duration={6000}
            delay={1000}
            offset={{ x: "-1/4", y: "1/2" }}
          />
          <ShootingStar
            toggle={toggle}
            duration={7000}
            delay={200}
            offset={{ x: "-1/4", y: "-1/8" }}
          />
          <ShootingStar
            toggle={toggle}
            duration={6000}
            offset={{ x: "-1/4", y: "-1/4" }}
          />
          <ShootingStar
            toggle={toggle}
            duration={8000}
            delay={100}
            offset={{ x: "-1/4", y: "-3/8" }}
          />
          <ShootingStar
            toggle={toggle}
            duration={6000}
            delay={300}
            offset={{ x: "-1/4", y: "-1/2" }}
          />
          <ShootingStar
            toggle={toggle}
            duration={7000}
            delay={1500}
            offset={{ x: "-3/8", y: "-1/8" }}
          />
          <ShootingStar
            toggle={toggle}
            duration={8000}
            offset={{ x: "-3/8", y: "-1/4" }}
          />
          <ShootingStar
            toggle={toggle}
            duration={5000}
            delay={1000}
            offset={{ x: "-3/8", y: "-3/8" }}
          />
          <ShootingStar
            toggle={toggle}
            duration={6000}
            delay={500}
            offset={{ x: "-3/8", y: "-1/2" }}
          />
          <ShootingStar
            toggle={toggle}
            duration={5000}
            offset={{ x: "1/4", y: "-1/8" }}
          />
          <ShootingStar
            toggle={toggle}
            duration={8000}
            offset={{ x: "1/4", y: "-1/4" }}
          />
          <ShootingStar
            toggle={toggle}
            duration={6000}
            offset={{ x: "1/4", y: "-3/8" }}
          />
          <ShootingStar
            toggle={toggle}
            duration={9000}
            offset={{ x: "1/4", y: "-1/2" }}
          />
          <ShootingStar
            toggle={toggle}
            duration={7000}
            offset={{ x: "3/8", y: "-1/4" }}
          />
          <ShootingStar
            toggle={toggle}
            duration={7000}
            offset={{ x: "3/8", y: "-3/8" }}
          />
          <ShootingStar
            toggle={toggle}
            duration={5000}
            offset={{ x: "3/8", y: "-1/2" }}
          />
        </>
      )}
    </div>
  );
}

export default ToggledBackground;
