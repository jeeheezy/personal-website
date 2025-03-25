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
        className="justify-self-center mb-5 outline-none hover:outline hover:outline-black px-10 rounded-md cursor-pointer"
      >
        {expanded ? (
          <div className="flex flex-col justify-center items-center">
            <span className="text-black">View Less</span>
            <ChevronUp color="black" />
          </div>
        ) : (
          <div className="flex flex-col justify-center items-center">
            <span className="text-black">View More</span>
            <ChevronDown color="black" />
          </div>
        )}
      </div>
    </>
  );
}

export default ReadMore;
