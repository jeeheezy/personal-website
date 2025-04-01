"use client";

import * as React from "react";
import BentoSquare from "../BentoSquare";
import Link from "next/link";
import Image from "next/image";
import { useSpring, easings, useTransition, animated } from "@react-spring/web";
import Pill from "../Pill";
import { ArrowRight, ArrowDown } from "react-feather";

function AboutMe() {
  const [play, setPlay] = React.useState<boolean>(false);

  const spring1 = useSpring({
    from: { opacity: 0, transform: "translateX(-100%)" },
    to: play ? { opacity: 1, transform: "translateY(0)" } : {},
    config: {
      duration: 1000,
      easing: easings.easeOutCubic,
    },
  });
  const spring2 = useSpring({
    from: { opacity: 0, transform: "translateX(100%)" },
    to: play ? { opacity: 1, transform: "translateY(0)" } : {},
    delay: 100,
    config: {
      duration: 1000,
      easing: easings.easeOutCubic,
    },
  });

  const imageAndPosition = [
    {
      key: "/Japan6.png",
      gridPosition: "-rotate-[1.5deg] col-start-1 row-start-1",
    },
    {
      key: "/Japan4.png",
      gridPosition: "rotate-[1deg] col-start-2 row-start-1",
    },
    {
      key: "/UK1.png",
      gridPosition:
        "rotate-[1.5deg] col-start-1 row-start-2 xl:col-start-3 xl:row-start-1",
    },
    {
      key: "/Japan3.png",
      gridPosition: "rotate-[1.5deg] col-start-2 row-start-2 xl:col-start-1",
    },
    {
      key: "/Japan1.png",
      gridPosition:
        "-rotate-[0.5deg] col-start-1 row-start-3 xl:col-start-2 xl:row-start-2",
    },
    {
      key: "/Portugal1.png",
      gridPosition:
        "-rotate-[1.5deg] col-start-2 row-start-3 xl:col-start-3 xl:row-start-2",
    },
    {
      key: "/UK2.png",
      gridPosition: "-rotate-[1.5deg] col-start-1 row-start-4 xl:row-start-3",
    },
    {
      key: "/Portugal2.png",
      gridPosition: "-rotate-[1deg] col-start-2 row-start-4 xl:row-start-3",
    },
    {
      key: "/Japan2.png",
      gridPosition:
        "rotate-[1.5deg] col-start-1 row-start-5 xl:col-start-3 xl:row-start-3",
    },
  ];

  const initialPhotos = [
    {
      key: 1,
      gridPosition: "-rotate-[1.5deg] col-start-1 row-start-1",
    },
    {
      key: 2,
      gridPosition: "rotate-[1deg] col-start-2 row-start-1",
    },
    {
      key: 3,
      gridPosition:
        "rotate-[1.5deg] col-start-1 row-start-2 xl:col-start-3 xl:row-start-1",
    },
    {
      key: 4,
      gridPosition: "rotate-[1.5deg] col-start-2 row-start-2 xl:col-start-1",
    },
    {
      key: 5,
      gridPosition:
        "-rotate-[0.5deg] col-start-1 row-start-3 xl:col-start-2 xl:row-start-2",
    },
    {
      key: 6,
      gridPosition:
        "-rotate-[1.5deg] col-start-2 row-start-3 xl:col-start-3 xl:row-start-2",
    },
    {
      key: 7,
      gridPosition: "-rotate-[1.5deg] col-start-1 row-start-4 xl:row-start-3",
    },
    {
      key: 8,
      gridPosition: "-rotate-[1deg] col-start-2 row-start-4 xl:row-start-3",
    },
    {
      key: 9,
      gridPosition:
        "rotate-[1.5deg] col-start-1 row-start-5 xl:col-start-3 xl:row-start-3",
    },
  ];

  const [clickButton, setClickButton] = React.useState<boolean>(false);
  const [hasMounted, setHasMounted] = React.useState<boolean>(false);
  const [photos, setPhotos] =
    React.useState<Array<{ key: string | number; gridPosition: string }>>(
      initialPhotos
    );

  function handleClick() {
    if (!clickButton) {
      setClickButton(true);
      setPhotos(imageAndPosition);
    }
  }

  const photoTransitions = useTransition(photos, {
    from: { opacity: 0 },
    enter: { opacity: 1, immediate: true },
    leave: { opacity: 0 },
    config: { duration: 3000 },
    immediate: !hasMounted,
  });

  React.useEffect(() => {
    setPlay(true);
    setHasMounted(true);
  }, []);

  return (
    <div className="overflow-x-hidden grid grid-rows-1 grid-cols-1 md:grid-cols-2 gap-3 max-w-[1344px] text-white">
      <BentoSquare
        className="bg-lily_white text-black mb-5 md:mb-0"
        trailStyle={spring1}
      >
        <h3 className="font-black text-2xl mb-8 font-red_hat">About Me</h3>
        <p className="text-xl mb-3">
          {`I'm a mostly self-taught full-stack developer that enjoys building things and has a strong focus for details. I have a civil engineering background, but found my passion for software development after working with code as a technical solutions engineer. I love the satisfaction of finding a solution- especially after a long, challenging effort- and the learning process that comes with it.`}
          <br />
          <br />
          I&apos;ve worked mostly recently with <strong>React</strong> and{" "}
          <strong>TypeScript</strong>, but also have experience with{" "}
          <strong>Python</strong>, <strong>Ruby</strong>, <strong>SQL</strong>,
          and <strong>MUMPS</strong>.{" "}
          <Link href="/projects" className="underline underline-offset-2">
            Check out some of my projects
          </Link>
          , or if you have a project in mind to work on together,{" "}
          <Link
            href="/contact"
            className="underline underline-offset-2"
          >{`I'd love to hear from you!`}</Link>
          <br />
          <br />
          {`When I'm not working on a project, I'm likely planning my next travel adventures and places to eat!`}
        </p>
        <Pill
          className="bg-white text-black font-bold text-xl w-fit hover:bg-blue-950 hover:text-white flex flex-row justify-items-center items-center gap-3"
          onClick={() => handleClick()}
        >
          View Some Photos
          <ArrowRight className="hidden md:block" />
          <ArrowDown className="block md:hidden" />
        </Pill>
      </BentoSquare>
      <BentoSquare
        className="bg-gray_light_blue text-black px-2 md:px-10"
        trailStyle={spring2}
      >
        <div className="grid grid-cols-2 xl:grid-cols-3 gap-2 place-items-center">
          {photoTransitions((style, photo, key) => {
            return typeof key.key.key === "number" ? (
              <animated.div
                className={`relative w-full max-w-[171px] h-auto -rotate-[1.5deg] col-span-1 row-span-1 ${photo.gridPosition} z-30`}
                style={style}
              >
                <Image
                  src="/Empty.png"
                  alt="empty polaroid"
                  width={200}
                  height={200}
                  className="max-w-[171px] w-full h-auto object-contain"
                />
              </animated.div>
            ) : (
              <animated.div
                className={`relative w-full max-w-[171px] h-auto -rotate-[1.5deg] col-span-1 row-span-1 ${photo.gridPosition} z-10 hover:scale-125`}
                style={style}
              >
                <Image
                  src={photo.key as string}
                  alt="empty polaroid"
                  width={200}
                  height={200}
                  className="max-w-[171px] w-full h-auto object-contain"
                />
              </animated.div>
            );
          })}
          {/* <div className="relative w-full max-w-[171px] h-auto -rotate-[1.5deg]">
            <Image
            src="/Empty.png"
            alt="empty polaroid"
              width={200}
              height={200}
              className="max-w-[171px] w-full h-auto object-contain"
            />
          </div>
          <div className="relative w-full max-w-[171px] h-auto rotate-[1deg]">
            <Image
              src="/Empty.png"
              alt="empty polaroid"
              width={200}
              height={200}
              className="max-w-[171px] w-full h-auto object-contain"
            />
          </div>
          <div className="relative w-full max-w-[171px] h-auto rotate-[1.5deg]">
            <Image
              src="/Empty.png"
              alt="empty polaroid"
              width={200}
              height={200}
              className="max-w-[171px] w-full h-auto object-contain"
            />
          </div>
          <div className="relative w-full max-w-[171px] h-auto rotate-[1.5deg]">
            <Image
              src="/Empty.png"
              alt="empty polaroid"
              width={200}
              height={200}
              className="max-w-[171px] w-full h-auto object-contain"
            />
          </div>
          <div className="relative w-full max-w-[171px] h-auto -rotate-[0.5deg]">
            <Image
              src="/Empty.png"
              alt="empty polaroid"
              width={200}
              height={200}
              className="max-w-[171px] w-full h-auto object-contain"
            />
          </div>
          <div className="relative w-full max-w-[171px] h-auto -rotate-[1.5deg]">
            <Image
              src="/Empty.png"
              alt="empty polaroid"
              width={200}
              height={200}
              className="max-w-[171px] w-full h-auto object-contain"
            />
          </div>
          <div className="relative w-full max-w-[171px] h-auto -rotate-[1.5deg]">
            <Image
              src="/Empty.png"
              alt="empty polaroid"
              width={200}
              height={200}
              className="max-w-[171px] w-full h-auto object-contain"
            />
          </div>
          <div className="relative w-full max-w-[171px] h-auto -rotate-[1deg]">
            <Image
              src="/Empty.png"
              alt="empty polaroid"
              width={200}
              height={200}
              className="max-w-[171px] w-full h-auto object-contain"
            />
          </div>
          <div className="relative w-full max-w-[171px] h-auto rotate-[1.5deg]">
            <Image
              src="/Empty.png"
              alt="empty polaroid"
              width={200}
              height={200}
              className="max-w-[171px] w-full h-auto object-contain"
            />
          </div> */}
        </div>
      </BentoSquare>
    </div>
  );
}

export default AboutMe;
