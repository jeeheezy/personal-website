import * as React from "react";
import clsx from "clsx";
import { animated, SpringValues } from "@react-spring/web";
import { Move } from "react-feather";

import { DraggableAttributes } from "@dnd-kit/core";
import { useSortable } from "@dnd-kit/sortable";
type BentoSquareProps = {
  children: React.ReactNode;
  className?: string;
  trailStyle?: SpringValues<{
    opacity: number;
    transform: string;
  }>;
  dragStyle?: {
    transform?: string | undefined;
    transition?: string | undefined;
  };
  animationDone?: boolean;
  attributes?: DraggableAttributes;
  listeners?: ReturnType<typeof useSortable>["listeners"];
  dragHandle?: boolean;
  // style?: SpringValues<{
  //   opacity: number;
  //   transform: string;
  // }>;
};

function BentoSquare(
  {
    children,
    className,
    trailStyle,
    dragStyle,
    animationDone,
    attributes,
    listeners,
    dragHandle,
  }: BentoSquareProps,
  ref: React.Ref<HTMLDivElement>
) {
  return trailStyle ? (
    <animated.div
      className={clsx(
        "border border-solid border-black rounded-lg p-10",
        className
      )}
      style={animationDone ? dragStyle : trailStyle}
      ref={ref}
    >
      {dragHandle && (
        <button
          className="justify-self-end block touch-none"
          {...attributes}
          {...listeners}
        >
          <Move className="active:text-white duration-150" />
        </button>
      )}

      {children}
    </animated.div>
  ) : (
    <div
      className={clsx(
        "border border-solid border-black rounded-md p-10",
        className
      )}
    >
      {children}
    </div>
  );
}

export default React.forwardRef(BentoSquare);
