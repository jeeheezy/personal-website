"use client";
import * as React from "react";
import ProjectBento from "../ProjectBento";
import ReadMore from "../ReadMore";
import Link from "next/link";
import Image from "next/image";
import { useTrail } from "@react-spring/web";

import {
  DndContext,
  closestCenter,
  KeyboardSensor,
  PointerSensor,
  useSensor,
  useSensors,
  DragEndEvent,
  UniqueIdentifier,
} from "@dnd-kit/core";
import {
  SortableContext,
  arrayMove,
  sortableKeyboardCoordinates,
  rectSortingStrategy,
} from "@dnd-kit/sortable";
import { restrictToWindowEdges } from "@/utils/restrictToWindowEdges";

// TODO: remove imports of Images and just use Public url
type Project = {
  title: string;
  image: string;
  technologies: string[];
  summary: string;
  description: string;
  trailNum: number;
  link?: {
    words: string;
    url: string;
  };
  repoUrl?: string;
  liveSiteUrl?: string;
};

const Project_Consts: { [key: UniqueIdentifier]: Project } = {
  DPI: {
    title: "DPI Mentorship Platform",
    image: "/DPI-Mentorship.png",
    technologies: [
      "Ruby on Rails",
      "PostgreSQL",
      "AWS - S3",
      "Bootstrap",
      "jQuery",
    ],
    summary: `An alternative for the mentor/mentee pairing platform for Discovery Partners Institute's full stack developer apprenticeship program.`,
    description: `The project was built mainly using Rails and Postgres. The biggest challenges were planning complex database associations and figuring out the key features necessary for an MVP.\n\nI learned a great deal regarding databases, end-to-end development, and working with an MVC architecture.\n\nNote: I've taken down the deployed site to avoid continuous charges, but the codebase will be linked.`,
    trailNum: 0,
    repoUrl: "https://github.com/jeeheezy/DPI-mentorship-platform",
  },
  Aether: {
    title: "Aether VTC",
    image: "/Aether.png",
    technologies: [
      "TypeScript",
      "Nextjs",
      "Tailwind CSS",
      "ShadCN",
      "Zod",
      "React-Hook-Form",
      "Supabase",
    ],
    summary: `Forms and database management for user information for a virtual wrestling training platform startup.`,
    description: `I was primarily in charge of handling user information- from creating necessary database tables and buckets and determining access policies to creating forms for onboarding and updating said info.\n\nThough seemingly simple, there were many complexities- from implementing proper client-side and server-side validation to creating Postgres triggers and writing middleware to ensure streamlined collection and display of information.\n\nThis project exposed me to many powerful technologies like Zod and Supabase, and taught me much on how to properly handle data.\n\nNote: The platform is closed source and has not yet been launched, so unfortunately I'm unable to provide a proper link to the site nor the codebase.`,
    trailNum: 1,
    liveSiteUrl: "https://www.aethervtc.com/",
  },
  TicTacToe: {
    title: "Ultimate Tic-Tac-Toe",
    image: "/TicTacToe.png",
    technologies: [
      "TypeScript",
      "React",
      "Tailwind CSS",
      "Express",
      "GitHub Actions",
    ],
    summary: `A spin on a classic React tutorial- a game of tic-tac-toe, with a bit more complexity.`,
    description: `Looking to get more experience with TypeScript and React, I decided to try my hand at implementing a game I loved playing as a kid without any reference to tutorials or guides.\n\n This project helped solidify the basics of TypeScript and got me much more comfortable with using props and contexts to pass information through different layers of React components.\n\nI'm currently trying to overhaul the project and implement real-time multiplayer mode with an Express server and web sockets.`,
    trailNum: 2,
    repoUrl: "https://github.com/jeeheezy/ultimate-tic-tac-toe",
    liveSiteUrl: "https://jeeheezy.github.io/ultimate-tic-tac-toe/",
  },
  Portfolio: {
    title: "Personal Website",
    // to change image here
    image: "/DPI-Mentorship.png",
    technologies: [
      "TypeScript",
      "Nextjs",
      "Tailwind CSS",
      "Zod",
      "Figma",
      "AWS - SES",
    ],
    summary: `An interactive portfolio to highlight my skills, projects, and developer journey, filled with many interactive elements.`,
    description: `The website you are currently on! While using similar technologies as other projects, there still were many new challenges and opportunities.\n\nThis was my first time tackling version dependencies, SVG animations, SMTP and AWS SES, and serverless functions. This was also my first time collaborating with a designer (my sister) and taking consideration of color accessibility, font, etc.\n\nIf you have any feedback on what can be improved, feel free to send me a `,
    trailNum: 3,
    link: { words: "message!", url: "/contact" },
    // to put repo and liveSite url once pushed to github
    // repoUrl: "",
    // liveSiteUrl: "",
  },
};

function Projects() {
  const [items, setItems] = React.useState<Array<UniqueIdentifier>>([
    "DPI",
    "Aether",
    "TicTacToe",
    "Portfolio",
  ]);
  const sensors = useSensors(
    useSensor(PointerSensor, {
      activationConstraint: {
        delay: 100,
        tolerance: 5,
      },
    }),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  );

  function handleDragEnd(event: DragEndEvent) {
    const { active, over } = event;

    if (!active || !over) return;
    if (active.id !== over.id) {
      setItems((currItems) => {
        const oldIndex = currItems.indexOf(active.id);
        const newIndex = currItems.indexOf(over.id);
        const newItems = arrayMove(currItems, oldIndex, newIndex);
        return newItems;
      });
    }
  }

  const [play, setPlay] = React.useState<boolean>(false);
  const [animationDone, setAnimationDone] = React.useState<boolean>(false);

  const trails = useTrail(4, {
    from: { opacity: 0, transform: "translateY(100%)" },
    to: play ? { opacity: 1, transform: "translateY(0)" } : {},
    onRest: () => {
      setTimeout(() => setAnimationDone(true), 1000);
    },
  });

  React.useEffect(() => {
    setPlay(true);
  }, []);

  return (
    <div className="max-w-[1344px]">
      {/* <h2 className="text-white font-bold text-4xl mb-8 font-red_hat">{`Projects`}</h2> */}
      <DndContext
        sensors={sensors}
        collisionDetection={closestCenter}
        onDragEnd={handleDragEnd}
        id="project-dnd"
        modifiers={[restrictToWindowEdges]}
      >
        <SortableContext items={items} strategy={rectSortingStrategy}>
          <div className="grid md:grid-cols-2 gap-3 relative">
            {items.map((item) => {
              return (
                <ProjectBento
                  title={Project_Consts[item].title}
                  technologies={Project_Consts[item].technologies}
                  key={item}
                  id={item}
                  trailStyle={trails[Project_Consts[item].trailNum]}
                  animationDone={animationDone}
                  repoUrl={Project_Consts[item].repoUrl}
                  liveSiteUrl={Project_Consts[item].liveSiteUrl}
                >
                  <Image
                    alt="dpi"
                    src={`${Project_Consts[item].image}`}
                    width={400}
                    height={300}
                    style={{ width: "100%", height: "auto" }}
                    className="mb-3"
                  />
                  <h4 className="font-normal italic mb-3 text-black">
                    {Project_Consts[item].summary}
                  </h4>
                  <ReadMore>
                    <p className="mb-3 text-black">
                      {Project_Consts[item].description
                        .split("\n")
                        .flatMap((line, index) =>
                          index > 0 ? [<br key={index} />, line] : line
                        )}
                      {Project_Consts[item].link && (
                        <Link
                          href={Project_Consts[item].link.url}
                          className="underline underline-offset-2 hover:text-white"
                        >
                          {Project_Consts[item].link.words}
                        </Link>
                      )}
                    </p>
                  </ReadMore>
                </ProjectBento>
              );
            })}
          </div>
        </SortableContext>
      </DndContext>
    </div>
  );
}

export default Projects;
