import * as React from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

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
          <div className="flex flex-col justify-center items-center group">
            <span className="text-black font-black font-red_hat group-hover:text-white">
              Read Less
            </span>
            <ChevronUp className="group-hover:text-white" />
          </div>
        ) : (
          <div className="flex flex-col justify-center items-center group">
            <span className="text-black font-black font-red_hat group-hover:text-white">
              Read More
            </span>
            <ChevronDown className="group-hover:text-white" />
          </div>
        )}
      </div>
    </>
  );
}

export default ReadMore;
