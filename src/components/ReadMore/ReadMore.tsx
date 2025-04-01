import * as React from "react";
import { ChevronDown, ChevronUp } from "react-feather";

type ReadMoreProps = {
  children: React.ReactNode;
};

function ReadMore({ children }: ReadMoreProps) {
  const [expanded, setExpanded] = React.useState<boolean>(false);

  return (
    <>
      {expanded && children}
      <div
        onClick={() => setExpanded(!expanded)}
        className="justify-self-center mb-5 outline-none px-10 cursor-pointer"
      >
        {expanded ? (
          <div className="flex flex-col justify-center items-center">
            <span className="text-black font-black font-red_hat">
              Read Less
            </span>
            <ChevronUp color="black" />
          </div>
        ) : (
          <div className="flex flex-col justify-center items-center">
            <span className="text-black font-black font-red_hat">
              Read More
            </span>
            <ChevronDown color="black" />
          </div>
        )}
      </div>
    </>
  );
}

export default ReadMore;
