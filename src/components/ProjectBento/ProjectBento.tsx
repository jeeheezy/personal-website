import * as React from "react";
import BentoSquare from "../BentoSquare";
import Badge from "../Badge";
import AnimatedPill from "../AnimatedPill";
import { SpringValues } from "@react-spring/web";

import { UniqueIdentifier } from "@dnd-kit/core";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";

type ProjectBentoProps = {
  title: string;
  technologies: Array<string>;
  repoUrl?: string;
  liveSiteUrl?: string;
  id: UniqueIdentifier;
  trailStyle?: SpringValues<{
    opacity: number;
    transform: string;
  }>;
  children: React.ReactNode;
  animationDone: boolean;
};

function ProjectBento({
  title,
  technologies,
  repoUrl,
  liveSiteUrl,
  id,
  trailStyle,
  children,
  animationDone,
}: ProjectBentoProps) {
  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({
      id: id,
      transition: {
        duration: 150, // milliseconds
        easing: "cubic-bezier(0.25, 1, 0.5, 1)",
      },
    });
  const dragStyle = {
    transform: CSS.Translate.toString(transform),
    transition,
  };

  return (
    <BentoSquare
      className="bg-project_green "
      animationDone={animationDone}
      trailStyle={trailStyle}
      dragStyle={dragStyle}
      ref={setNodeRef}
      attributes={attributes}
      listeners={listeners}
      dragHandle={true}
    >
      <h3 className="mb-3 font-bold text-lg font-red_hat">{title}</h3>
      <ul className="flex gap-1 flex-wrap mb-3">
        {technologies.map((technology) => {
          return <Badge key={technology}>{technology}</Badge>;
        })}
      </ul>
      {children}
      <div className="flex flex-row gap-3">
        {repoUrl && (
          <a href={repoUrl} target="_blank">
            <AnimatedPill className="gap-3 !bg-white border-white text-black font-bold w-fit">
              View Code
            </AnimatedPill>
          </a>
        )}
        {liveSiteUrl && (
          <a href={liveSiteUrl} target="_blank">
            <AnimatedPill className="gap-3 !bg-white border-white text-black font-bold w-fit">
              View Site
            </AnimatedPill>
          </a>
        )}
      </div>
    </BentoSquare>
  );
}

export default ProjectBento;
