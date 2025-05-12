import * as React from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useSprings, animated, easings } from "@react-spring/web";
import useBoop from "@/hooks/use-boop";

type ImageCarouselProps = {
  images: string[];
  startIndex: number;
};

export type CarouselRef = {
  goToIndex: (index: number, skipAnimation: boolean) => void;
};

const ImageCarousel = React.forwardRef<CarouselRef, ImageCarouselProps>(
  ({ images, startIndex }, ref) => {
    const middleIndexRef = React.useRef(startIndex);
    const [leftArrow, leftTrigger] = useBoop({ x: -2 });
    const [rightArrow, rightTrigger] = useBoop({ x: 2 });
    const skipAnimationRef = React.useRef<boolean>(false);

    function indexRollOver(index: number) {
      return (index + images.length) % images.length;
    }

    function getPositionTransform(
      position: "left" | "center" | "right" | "back"
    ) {
      switch (position) {
        case "left":
          return "translateX(-30%) scale(0.7) translateZ(100px)";
        case "center":
          return "translateX(0%) scale(1) translateZ(200px)";
        case "right":
          return "translateX(30%) scale(0.7) translateZ(100px)";
        case "back":
          return "translateX(0%) scale(0.5) translateZ(10px)";
      }
    }

    function getPositionStyles(index: number) {
      const leftIndex = indexRollOver(middleIndexRef.current - 1);
      const rightIndex = indexRollOver(middleIndexRef.current + 1);
      if (index === middleIndexRef.current) {
        return {
          transform: getPositionTransform("center"),
          opacity: 1,
        };
      } else if (index === leftIndex) {
        return {
          transform: getPositionTransform("left"),
          opacity: 1,
        };
      } else if (index === rightIndex) {
        return {
          transform: getPositionTransform("right"),
          opacity: 1,
        };
      }
      return {
        transform: getPositionTransform("back"),
        opacity: 0,
      };
    }

    function rotate(direction: "left" | "right") {
      if (skipAnimationRef.current === true) {
        skipAnimationRef.current = false;
      }
      let newIndex;
      switch (direction) {
        case "left":
          newIndex =
            (middleIndexRef.current - 1 + images.length) % images.length;
          break;
        case "right":
          newIndex = (middleIndexRef.current + 1) % images.length;
          break;
      }
      animateToIndex(newIndex);
    }

    const [springs, api] = useSprings(images.length, (i) => ({
      ...getPositionStyles(i),
      config: { duration: 300, easing: easings.easeInOutCubic },
    }));

    function animateToIndex(newIndex: number) {
      middleIndexRef.current = newIndex;
      api.start((i) => ({
        ...getPositionStyles(i),
        immediate: skipAnimationRef.current,
      }));
    }

    React.useImperativeHandle(ref, () => ({
      goToIndex: (newIndex: number, skipAnimation: boolean) => {
        skipAnimationRef.current = skipAnimation;
        animateToIndex(newIndex);
      },
    }));

    return (
      <div className="flex flex-row justify-items-center items-center gap-10 sm:gap-10">
        <button onClick={leftTrigger}>
          <animated.div
            className="flex items-center justify-center z-20 cursor-pointer h-[200px] sm:h-[400px]"
            onClick={() => rotate("left")}
            style={leftArrow}
          >
            <ChevronLeft
              className="h-full w-10 hover:stroke-blue-950"
              color="white"
            />
          </animated.div>
        </button>
        <div
          className="relative w-[250px] sm:w-[300px] flex flex-row justify-center items-center"
          style={{ perspective: "1000px", transformStyle: "preserve-3d" }}
        >
          {springs.map((style, i) => (
            <animated.div
              key={i}
              style={{
                ...style,
                position: "absolute",
                width: "100%",
                willChange: "transform, opacity",
              }}
            >
              <Image
                src={images[i]}
                alt={`image-${i}`}
                width={400}
                height={467}
                style={{
                  width: "100%",
                  height: "auto",
                  userSelect: "none",
                }}
              />
            </animated.div>
          ))}
        </div>
        <button onClick={rightTrigger}>
          <animated.div
            className="flex items-center justify-center z-20 cursor-pointer h-[200px] sm:h-[400px]"
            onClick={() => rotate("right")}
            style={rightArrow}
          >
            <ChevronRight
              className="h-full w-10 hover:stroke-blue-950"
              color="white"
            />
          </animated.div>
        </button>
      </div>
    );
  }
);

ImageCarousel.displayName = "ImageCarousel";

export default ImageCarousel;
