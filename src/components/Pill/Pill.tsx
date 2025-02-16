import * as React from "react";
import clsx from "clsx";
type PillProps = {
  children: React.ReactNode;
  className?: string;
};

function Pill({ children, className }: PillProps) {
  return (
    <div className={clsx("border rounded-full py-2 px-5", className)}>
      {children}
    </div>
  );
}

export default Pill;
