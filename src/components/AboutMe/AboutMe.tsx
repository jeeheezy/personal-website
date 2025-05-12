"use client";

import * as React from "react";
import BentoSquare from "../BentoSquare";
import Link from "next/link";
import Image from "next/image";
import { useSpring, easings, useTransition, animated } from "@react-spring/web";
import Pill from "../Pill";
import { ArrowRight, ArrowDown, X as Close } from "lucide-react";
import { Dialog, DialogPanel, DialogBackdrop } from "@headlessui/react";
import ImageCarousel, { CarouselRef } from "../ImageCarousel";
import useBoop from "@/hooks/use-boop";

// can't completely automate positioning as grid positions necessary to make sure overlaps between DOMs in grid can happen
// the best abstraction I could do for now is have an object to define all the tailwind CSS for grid positioning
// adding image to imageUrls should automatically find the appropriate grid position based off the array index
const positionAndRotation: { [key: number]: string } = {
  1: "-rotate-[1.5deg] col-start-1 row-start-1",
  2: "rotate-[1deg] col-start-2 row-start-1",
  3: "rotate-[1.5deg] col-start-3 row-start-1 md:col-start-1 md:row-start-2 xl:col-start-3 xl:row-start-1",
  4: "rotate-[1.5deg] col-start-1 md:col-start-2 row-start-2 xl:col-start-1",
  5: "-rotate-[0.5deg] col-start-2 row-start-2 md:col-start-1 md:row-start-3 xl:col-start-2 xl:row-start-2",
  6: "-rotate-[1.5deg] col-start-3 row-start-2 md:col-start-2 md:row-start-3 xl:col-start-3 xl:row-start-2",
  7: "-rotate-[1.5deg] row-start-3 col-start-1 md:row-start-4 xl:row-start-3",
  8: "-rotate-[1deg] row-start-3 col-start-2 md:row-start-4 xl:row-start-3",
  9: "rotate-[1.5deg] col-start-3 row-start-3 md:col-start-1 md:row-start-5 xl:col-start-3 xl:row-start-3",
};

const imageUrls = [
  "/Japan6.png",
  "/Japan4.png",
  "/UK1.png",
  "/Japan3.png",
  "/Japan1.png",
  "/Portugal1.png",
  "/UK2.png",
  "/Portugal2.png",
  "/Japan2.png",
];

const imageAndPosition: Array<{ key: string; gridPosition: number }> = [];

imageUrls.forEach((url, index) => {
  imageAndPosition.push({
    key: url,
    gridPosition: index + 1,
  });
});

const initialPhotos: Array<{ key: number; gridPosition: number }> = [];
for (let i = 1; i < imageUrls.length + 1; i++) {
  initialPhotos.push({
    key: i,
    gridPosition: i,
  });
}

function AboutMe() {
  const [play, setPlay] = React.useState<boolean>(false);
  const [clickButton, setClickButton] = React.useState<boolean>(false);
  const [hasMounted, setHasMounted] = React.useState<boolean>(false);
  const [showModal, setShowModal] = React.useState<boolean>(false);
  const [photos, setPhotos] =
    React.useState<Array<{ key: string | number; gridPosition: number }>>(
      initialPhotos
    );
  const [closeStyle, closeTrigger] = useBoop({ rotation: 10 });
  const modalCarouselRef = React.useRef<CarouselRef>(null);

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

  function handleClick() {
    if (!clickButton) {
      setClickButton(true);
      setPhotos(imageAndPosition);
    }
  }

  function openModal(index: number) {
    setShowModal(true);
    // using requestAnimationFrame here to allow time for showModal state to be set first
    // otherwise, modal opens to the first image every single time
    requestAnimationFrame(() => {
      modalCarouselRef.current?.goToIndex(index, true);
    });
  }

  function closeModal() {
    setShowModal(false);
  }

  const photoTransitions = useTransition(photos, {
    from: { opacity: 0 },
    enter: { opacity: 1, immediate: true },
    leave: { opacity: 0 },
    config: { duration: 1000 },
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
        <h3 className="font-black text-lg md:text-2xl mb-3 md:mb-8 font-red_hat">
          About Me
        </h3>
        <p className="text-md md:text-xl mb-3">
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
          className="bg-white text-black font-bold text-xl w-fit hover:bg-blue-950 hover:text-white hover:cursor-pointer flex flex-row justify-items-center items-center gap-3"
          onClick={handleClick}
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
        <div className="grid grid-cols-3 md:grid-cols-2 xl:grid-cols-3 gap-2 place-items-center">
          {photoTransitions((style, photo) => {
            return typeof photo.key === "number" ? (
              <animated.div
                className={`relative w-full max-w-[171px] h-auto -rotate-[1.5deg] col-span-1 row-span-1 ${
                  positionAndRotation[photo.gridPosition]
                } z-30`}
                style={style}
              >
                <Image
                  src="/Empty.png"
                  alt="Empty Polaroid"
                  width={171}
                  height={200}
                  style={{ height: "auto", width: "100%" }}
                  sizes="(max-width: 171px) 100vw, 171px"
                  priority
                />
              </animated.div>
            ) : (
              <animated.div
                className={`relative w-full max-w-[171px] h-auto -rotate-[1.5deg] col-span-1 row-span-1 ${
                  positionAndRotation[photo.gridPosition]
                } z-10 hover:scale-125 hover:cursor-pointer`}
                style={style}
                onClick={() => openModal(photo.gridPosition - 1)}
              >
                <Image
                  src={photo.key as string}
                  alt={`${photo.key.replace("/", "")}`}
                  width={171}
                  height={200}
                  style={{ height: "auto", width: "100%" }}
                  sizes="(max-width: 171px) 100vw, 171px"
                  loading="eager"
                />
              </animated.div>
            );
          })}
        </div>
      </BentoSquare>
      <Dialog open={showModal} onClose={closeModal}>
        <DialogBackdrop className="fixed inset-0 backdrop-blur-sm duration-300 ease-out" />
        <div className="fixed inset-0 w-screen flex items-center justify-center overflow-y-auto z-10">
          <DialogPanel
            transition
            className="relative w-full max-w-xl flex items-center justify-center duration-300 ease-out data-[closed]:transform-[scale(95%)] data-[closed]:opacity-0"
          >
            <button
              onClick={closeModal}
              onMouseEnter={closeTrigger}
              className="absolute -bottom-28 sm:-bottom-20 hover:cursor-pointer group"
            >
              <animated.span style={closeStyle}>
                <Close
                  color="white"
                  size={48}
                  className="group-hover:stroke-red-600"
                />
              </animated.span>
            </button>
            <ImageCarousel
              images={imageUrls}
              startIndex={0}
              ref={modalCarouselRef}
            />
          </DialogPanel>
        </div>
      </Dialog>
    </div>
  );
}

export default AboutMe;
