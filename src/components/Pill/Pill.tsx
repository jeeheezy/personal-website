import * as React from "react";
import clsx from "clsx";
type PillProps = {
  children: React.ReactNode;
  className?: string;
  onMouseEnter?: () => void;
};

function Pill({ children, className, onMouseEnter }: PillProps) {
  return (
    <div
      className={clsx("rounded-full py-2 px-5 hover:bg-zinc-300", className)}
      onMouseEnter={onMouseEnter}
    >
      {children}
    </div>
  );
}

export default Pill;
