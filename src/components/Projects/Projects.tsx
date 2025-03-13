"use client";
import * as React from "react";
import ProjectBento from "../ProjectBento";
import ReadMore from "../ReadMore";
import Link from "next/link";

import Image from "next/image";
import DpiImage from "../../../public/DPI-Mentorship.png";
import AetherImage from "../../../public/Aether.png";
import TicTacToeImage from "../../../public/TicTacToe.png";

import { useTrail } from "@react-spring/web";

function Projects() {
  // to implement dnd kit to make boxes draggable and reorganizable
  const DPI_TECHNOLOGIES = [
    "Ruby on Rails",
    "PostgreSQL",
    "AWS - S3",
    "Bootstrap",
    "jQuery",
  ];

  const AETHER_TECHNOLOGIES = [
    "TypeScript",
    "Nextjs",
    "Tailwind CSS",
    "ShadCN",
    "Zod",
    "React-Hook-Form",
    "Supabase",
  ];

  const TIC_TAC_TOE_TECHNOLOGIES = [
    "TypeScript",
    "React",
    "Tailwind CSS",
    "Express",
    "GitHub Actions",
  ];

  const PERSONAL_WEBSITE_TECHNOLOGIES = [
    "TypeScript",
    "Nextjs",
    "Tailwind CSS",
    "Zod",
    "Figma",
    "AWS - SES",
  ];

  const [play, setPlay] = React.useState<boolean>(false);

  const trails = useTrail(4, {
    from: { opacity: 0, transform: "translateY(100%)" },
    to: play ? { opacity: 1, transform: "translateY(0)" } : {},
  });

  React.useEffect(() => {
    setPlay(true);
  }, []);

  return (
    <div className="max-w-[1344px]">
      <h2 className="text-white font-bold text-3xl mb-5">
        {`Some Projects I've Worked On`}
      </h2>
      <div className="grid md:grid-cols-2 gap-3">
        <ProjectBento
          title="DPI Mentorship Platform"
          technologies={DPI_TECHNOLOGIES}
          repoUrl="https://github.com/jeeheezy/DPI-mentorship-platform"
          style={trails[0]}
        >
          <Image alt="dpi" src={DpiImage} quality={100} className="mb-3" />
          <h4 className="font-medium mb-3">{`An attempted alternative for the mentor/mentee pairing platform used
            at Discovery Partners Institute's full stack developer
            apprenticeship program.`}</h4>
          <ReadMore>
            <p className="mb-3">
              The project was built mainly using Rails and Postgres. The biggest
              challenges were planning complex database associations and
              figuring out the key features necessary for an MVP.
              <br />
              <br />I learned a great deal regarding databases, end-to-end
              development, and working with an MVC architecture.
            </p>
          </ReadMore>
        </ProjectBento>
        <ProjectBento
          title="Aether VTC"
          technologies={AETHER_TECHNOLOGIES}
          liveSiteUrl="https://www.aethervtc.com/"
          style={trails[1]}
        >
          <Image alt="dpi" src={AetherImage} quality={100} className="mb-3" />
          <h4 className="font-medium mb-3">
            Forms and database management for user information for a virtual
            wrestling training platform startup.
          </h4>
          <ReadMore>
            <p className="mb-3">
              I was primarily in charge of handling user information- from
              creating necessary database tables and buckets and determining
              access policies to creating forms for onboarding and updating said
              info.
              <br />
              <br />
              Though seemingly simple, there were many complexities- from
              implementing proper client-side and server-side validation to
              creating Postgres triggers and writing middleware to ensure
              streamlined collection and display of information.
              <br />
              <br />
              This project exposed me to many powerful technologies like Zod and
              Supabase, and taught me much on how to properly handle data.
              <br />
              <br />
              <strong>Note: </strong>
              {`The platform is closed source and has not yet been launched, so unfortunately I'm unable to
            provide a proper link to the site nor the codebase.`}
            </p>
          </ReadMore>
        </ProjectBento>
        <ProjectBento
          title="Ultimate Tic-Tac-Toe"
          technologies={TIC_TAC_TOE_TECHNOLOGIES}
          repoUrl="https://github.com/jeeheezy/ultimate-tic-tac-toe"
          liveSiteUrl="https://jeeheezy.github.io/ultimate-tic-tac-toe/"
          style={trails[2]}
        >
          <Image
            alt="dpi"
            src={TicTacToeImage}
            quality={100}
            className="mb-3"
          />
          <h4 className="font-medium mb-3">
            A spin on a classic React tutorial- a game of tic-tac-toe, with a
            bit more complexity.
          </h4>
          <ReadMore>
            <p className="mb-3">
              Looking to get more experience with TypeScript and React, I
              decided to try my hand at implementing a game I loved playing as a
              kid without any reference to tutorials or guides.
              <br />
              <br />
              This project helped solidify the basics of TypeScript and got me
              much more comfortable with using props and contexts to pass
              information through different layers of React components.
              <br />
              <br />
              {`I'm currently trying to overhaul the project and implement real-time
            multiplayer mode with an Express server and web sockets.`}
            </p>
          </ReadMore>
        </ProjectBento>
        <ProjectBento
          title="Personal Website"
          technologies={PERSONAL_WEBSITE_TECHNOLOGIES}
          style={trails[3]}
        >
          {/* TODO: include siteURL and repoURL and image */}
          <h4 className="font-medium mb-3">
            An interactive portfolio to highlight my skills, projects, and
            developer journey. I hope you are able to enjoy all the small
            interactive elements within the website and get a better
            understanding of my skills!
          </h4>
          <ReadMore>
            <p className="mb-3">
              The website you are currently on! While using similar technologies
              as other projects, there still were many new challenges and
              opportunities.
              <br />
              <br />
              {`This was my first time tackling version dependencies, SVG animations, SMTP and AWS SES, and serverless functions. This was also my first time extensively using Figma and working together with a designer (my sister!).`}
              <br />
              <br />
              If you have any feedback on what can be improved, feel free to
              send me a{" "}
              <Link href="/contact" className="underline underline-offset-2">
                message
              </Link>
              !
            </p>
          </ReadMore>
        </ProjectBento>
      </div>
    </div>
  );
}

export default Projects;
