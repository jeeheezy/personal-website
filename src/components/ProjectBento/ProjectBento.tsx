import * as React from "react";
import BentoSquare from "../BentoSquare";
import Badge from "../Badge";
import AnimatedPill from "../AnimatedPill";
import { SpringValues } from "@react-spring/web";

type ProjectBentoProps = {
  title: string;
  technologies: Array<string>;
  repoUrl?: string;
  liveSiteUrl?: string;
  style?: SpringValues<{
    opacity: number;
    transform: string;
  }>;
  children: React.ReactNode;
};

function ProjectBento({
  title,
  technologies,
  repoUrl,
  liveSiteUrl,
  style,
  children,
}: ProjectBentoProps) {
  return (
    <BentoSquare className="bg-project_green" style={style}>
      <h3 className="mb-3 font-bold text-lg">{title}</h3>
      {children}
      <ul className="flex gap-1 flex-wrap mb-3">
        {technologies.map((technology) => {
          return <Badge key={technology}>{technology}</Badge>;
        })}
      </ul>
      <div className="flex flex-row gap-3">
        {repoUrl && (
          <a href={repoUrl} target="_blank">
            <AnimatedPill className="gap-3 !bg-white border-white text-black font-semibold w-fit">
              View Code
            </AnimatedPill>
          </a>
        )}
        {liveSiteUrl && (
          <a href={liveSiteUrl} target="_blank">
            <AnimatedPill className="gap-3 !bg-white border-white text-black font-semibold w-fit ">
              View Site
            </AnimatedPill>
          </a>
        )}
      </div>
    </BentoSquare>
  );
}

export default ProjectBento;
