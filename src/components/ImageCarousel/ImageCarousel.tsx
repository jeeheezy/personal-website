import * as React from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "react-feather";
import { useSpring, animated, easings } from "@react-spring/web";
import useBoop from "@/hooks/use-boop";

type ImageCarouselProps = {
  images: string[];
  startIndex: number;
};

function ImageCarousel({ images, startIndex }: ImageCarouselProps) {
  const [leftArrow, leftTrigger] = useBoop({ x: -2 });
  const [rightArrow, rightTrigger] = useBoop({ x: 2 });
  const [middleIndex, setMiddleIndex] = React.useState<number>(startIndex);
  const isAnimatingRef = React.useRef(false);

  function indexRollOver(index: number) {
    return (index + images.length) % images.length;
  }

  const imagePositions = React.useMemo(
    () => ({
      left: {
        transform: `translateX(-30%) scale(0.7)`,
        opacity: 1,
        zIndex: 10,
      },
      right: {
        transform: `translateX(30%) scale(0.7)`,
        opacity: 1,
        zIndex: 10,
      },
      center: {
        transform: `translateX(0%) scale(1)`,
        zIndex: 20,
      },
      back1: {
        opacity: 0,
        transform: `translateX(0%) scale(0.5)`,
        zIndex: 1,
      },
      back2: {
        opacity: 0,
        transform: `translateX(0%) scale(0.5)`,
        zIndex: 1,
      },
    }),
    []
  );

  const [leftImage, leftApi] = useSpring(() => ({
    ...imagePositions.left,
    config: { duration: 300, easing: easings.easeInOutCubic },
  }));

  const [centerImage, centerApi] = useSpring(() => ({
    ...imagePositions.center,
    config: { duration: 300, easing: easings.easeInOutCubic },
  }));

  const [rightImage, rightApi] = useSpring(() => ({
    ...imagePositions.right,
    config: { duration: 300, easing: easings.easeInOutCubic },
  }));

  const [backImage1, backApi1] = useSpring(() => ({
    ...imagePositions.back1,
    config: { duration: 300, easing: easings.easeInOutCubic },
  }));
  const [backImage2, backApi2] = useSpring(() => ({
    ...imagePositions.back2,
    config: { duration: 300, easing: easings.easeInOutCubic },
  }));

  function animate(dir: "left" | "right") {
    if (isAnimatingRef.current) return;
    isAnimatingRef.current = true;

    if (dir === "right") {
      leftApi.start({
        ...imagePositions.back1,
        immediate: (key) => key === "zIndex",
      });
      rightApi.start({
        ...imagePositions.center,
        immediate: (key) => key === "zIndex",
      });
      backApi2.start({
        ...imagePositions.right,
        immediate: (key) => key === "zIndex",
      });
      centerApi.start({
        ...imagePositions.left,
        immediate: (key) => key === "zIndex",
        onRest: () => {
          const newIndex = indexRollOver(middleIndex + 1);
          setMiddleIndex(newIndex);
          resetSprings();
          isAnimatingRef.current = false;
        },
      });
    } else {
      leftApi.start({
        ...imagePositions.center,
        immediate: (key) => key === "zIndex",
      });
      rightApi.start({
        ...imagePositions.back2,
        immediate: (key) => key === "zIndex",
      });
      backApi1.start({
        ...imagePositions.left,
        immediate: (key) => key === "zIndex",
      });
      centerApi.start({
        ...imagePositions.right,
        immediate: (key) => key === "zIndex",
        onRest: () => {
          const newIndex = indexRollOver(middleIndex - 1);
          setMiddleIndex(newIndex);
          resetSprings();
          isAnimatingRef.current = false;
        },
      });
    }
  }

  const resetSprings = React.useCallback(() => {
    leftApi.start({
      ...imagePositions.left,
      immediate: true,
    });
    centerApi.start({
      ...imagePositions.center,
      immediate: true,
    });
    rightApi.start({
      ...imagePositions.right,
      immediate: true,
    });
    backApi1.start({
      ...imagePositions.back1,
      immediate: true,
    });
    backApi2.start({
      ...imagePositions.back2,
      immediate: true,
    });
  }, [leftApi, centerApi, rightApi, backApi1, backApi2, imagePositions]);

  React.useEffect(() => {
    resetSprings();
  });

  return (
    <div className="flex flex-row justify-items-center items-center gap-5 sm:gap-10">
      <button onMouseEnter={leftTrigger}>
        <animated.div
          className="flex items-center justify-center z-20 cursor-pointer h-[200px] sm:h-[400px]"
          onClick={() => {
            animate("left");
          }}
          style={leftArrow}
        >
          <ChevronLeft
            className="h-full w-10 hover:stroke-blue-950"
            color="white"
          />
        </animated.div>
      </button>
      <div className="relative w-[250px] sm:w-[400px] flex flex-row justify-center items-center">
        <animated.div
          style={{
            ...leftImage,
            position: "absolute",
            width: "100%",
            willChange: "transform, opacity, z-index",
          }}
        >
          <Image
            alt={`${images[indexRollOver(middleIndex - 1)].replace("/", "")}`}
            src={images[indexRollOver(middleIndex - 1)]}
            width={400}
            height={467}
            style={{
              width: "100%",
              height: "auto",
              userSelect: "none",
            }}
          />
        </animated.div>
        <animated.div
          style={{
            ...centerImage,
            position: "absolute",
            width: "100%",
            willChange: "transform, opacity, z-index",
          }}
        >
          <Image
            alt={`${images[middleIndex].replace("/", "")}`}
            src={images[middleIndex]}
            width={400}
            height={467}
            style={{
              width: "100%",
              height: "auto",
              userSelect: "none",
            }}
          />
        </animated.div>
        <animated.div
          style={{
            ...rightImage,
            position: "absolute",
            width: "100%",
            willChange: "transform, opacity, z-index",
          }}
        >
          <Image
            alt={`${images[indexRollOver(middleIndex + 1)].replace("/", "")}`}
            src={images[indexRollOver(middleIndex + 1)]}
            width={400}
            height={467}
            style={{
              height: "auto",
              width: "100%",
              userSelect: "none",
            }}
          />
        </animated.div>
        <animated.div
          style={{
            ...backImage1,
            position: "absolute",
            width: "100%",
            willChange: "transform, opacity, z-index",
          }}
        >
          <Image
            alt={`${images[indexRollOver(middleIndex - 2)].replace("/", "")}`}
            src={images[indexRollOver(middleIndex - 2)]}
            width={400}
            height={467}
            style={{
              height: "auto",
              width: "100%",
              userSelect: "none",
            }}
          />
        </animated.div>
        <animated.div
          style={{
            ...backImage2,
            position: "absolute",
            width: "100%",
            willChange: "transform, opacity, z-index",
          }}
        >
          <Image
            alt={`${images[indexRollOver(middleIndex + 2)].replace("/", "")}`}
            src={images[indexRollOver(middleIndex + 2)]}
            width={400}
            height={467}
            style={{
              height: "auto",
              width: "100%",
              userSelect: "none",
            }}
          />
        </animated.div>
      </div>
      <button onMouseEnter={rightTrigger}>
        <animated.div
          className="flex items-center justify-center z-20 cursor-pointer h-[200px] sm:h-[400px]"
          onClick={() => {
            animate("right");
          }}
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

export default ImageCarousel;
