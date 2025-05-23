import React from "react";
import { SpringValues, useSpring } from "@react-spring/web";

type BoopStyle = SpringValues<{
  transform: string;
}>;

function useBoop({
  x = 0,
  y = 0,
  rotation = 0,
  scale = 1,
  timing = 150,
  springConfig = { tension: 300, friction: 10 },
}): [BoopStyle, () => void] {
  const [isBooped, setIsBooped] = React.useState<boolean>(false);

  const style = useSpring({
    display: "inline-block",
    backfaceVisibility: "hidden",
    transform: isBooped
      ? `translate(${x}px, ${y}px) rotate(${rotation}deg) scale(${scale})`
      : `translate(0px, 0px) rotate(0deg) scale(1)`,
    config: springConfig,
  });

  React.useEffect(() => {
    if (!isBooped) {
      return;
    }

    const timeoutId = window.setTimeout(() => {
      setIsBooped(false);
    }, timing);

    return () => {
      window.clearTimeout(timeoutId);
    };
  }, [isBooped, timing]);

  const trigger = React.useCallback(() => {
    setIsBooped(true);
  }, []);

  return [style, trigger];
}

export default useBoop;
