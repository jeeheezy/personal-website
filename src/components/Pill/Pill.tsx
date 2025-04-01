import * as React from "react";
import clsx from "clsx";
type PillProps = {
  children: React.ReactNode;
  className?: string;
  onMouseEnter?: () => void;
  onClick?: () => void;
};

function Pill({ children, className, onMouseEnter, onClick }: PillProps) {
  return (
    <div
      className={clsx(
        "rounded-full py-2 px-5 hover:bg-blue-950 hover:text-white font-red_hat",
        className
      )}
      onMouseEnter={onMouseEnter}
      onClick={onClick}
    >
      {children}
    </div>
  );
}

export default Pill;
