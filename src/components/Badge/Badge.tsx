import * as React from "react";
import clsx from "clsx";

type BadgeProps = {
  children: string;
  className?: string;
};

function Badge({ children, className }: BadgeProps) {
  return (
    <li
      className={clsx(
        `inline-block border-[1.75px] bg-black border-black text-white  text-sm font-medium px-2.5 py-0.5 rounded-full`,
        className
      )}
    >
      {children}
    </li>
  );
}

export default Badge;
