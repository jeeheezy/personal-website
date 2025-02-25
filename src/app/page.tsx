"use client";

import Link from "next/link";

import BentoSquare from "@/components/BentoSquare";
import Pill from "@/components/Pill";
import useBoop from "@/hooks/use-boop";
import { animated } from "@react-spring/web";

import ProjectsIcon from "@/assets/projects.svg";
import EmailIcon from "@/assets/contacts.svg";
import GitHubIcon from "@/assets/github.svg";
import LinkedInIcon from "@/assets/linkedin.svg";
import Arrow from "@/assets/arrow-out.svg";

export default function Home() {
  const [aboutBoopStyle, aboutBoopTrigger] = useBoop({ x: 2, y: -2 });
  const [resumeBoopStyle, resumeBoopTrigger] = useBoop({ x: 2, y: -2 });
  const [projectBoopStyle, projectBoopTrigger] = useBoop({ x: 2, y: -2 });
  const [contactBoopStyle, contactBoopTrigger] = useBoop({ x: 2, y: -2 });
  const [githubBoopStyle, githubBoopTrigger] = useBoop({ x: 2, y: -2 });
  const [linkedinBoopStyle, linkedinBoopTrigger] = useBoop({ x: 2, y: -2 });

  return (
    <div className="grid grid-cols-4 grid-rows-2 gap-4 lg:gap-6 max-w-[1512px]">
      <BentoSquare className="col-span-2 row-span-1 bg-lily_white flex flex-col justify-center p-10">
        <p className="font-black text-4xl mb-6">JEEHO LEE</p>
        {/* TODO: replace placeholder text */}
        <p className="font-normal text-2xl mb-6">
          is a Chicago-based full-stack developer, passionate about crafting
          sleek, user-friendly code that brings digital experiences to life.
        </p>
        <div className="flex gap-3">
          <Link href="/about">
            <Pill
              className="bg-white flex gap-2 justify-center items-center"
              onMouseEnter={aboutBoopTrigger}
            >
              <span className="font-black text-2xl">About</span>
              <animated.span style={aboutBoopStyle}>
                <Arrow />
              </animated.span>
            </Pill>
          </Link>
          <Link href="">
            <Pill
              className="bg-white hover:bg-stone-200 flex gap-2 justify-center items-center"
              onMouseEnter={resumeBoopTrigger}
            >
              <span className="font-black text-2xl">Resume (PDF)</span>
              <animated.span style={resumeBoopStyle}>
                <Arrow />
              </animated.span>
            </Pill>
          </Link>
        </div>
      </BentoSquare>
      <BentoSquare className="col-start-3 col-span-1 row-start-1 row-span-2 bg-white">
        <p>Animation</p>
      </BentoSquare>
      <BentoSquare className="col-start-4 col-span-1 bg-contact_red flex flex-col justify-center items-center gap-5">
        <EmailIcon />
        <Link href="/contact">
          <Pill
            className="bg-white flex gap-2 justify-center items-center"
            onMouseEnter={contactBoopTrigger}
          >
            <span className="font-black text-2xl">Contact</span>
            {/* https://medium.com/@abilsavio/email-contact-form-using-nextjs-app-router-60c29fe70644 */}
            <animated.span style={contactBoopStyle}>
              <Arrow />
            </animated.span>
          </Pill>
        </Link>
      </BentoSquare>
      <BentoSquare className="col-start-4 col-span-1 row-start-2 bg-gray_light_blue flex justify-center items-center">
        <label className="inline-flex items-center cursor-pointer">
          <input type="checkbox" className="sr-only peer" />
          <div
            className="relative w-[var(--slider-width)] h-[var(--slider-height)] bg-gray-300 rounded-full transition-all ease-in-out duration-300
            after:content-[''] after:bg-white after:border-gray-300 after:border after:absolute
            after:rounded-full after:h-[var(--button-width)] after:w-[var(--button-width)] after:transition-all after:ease-in-out after:duration-300
            after:top-[var(--button-offset)] after:start-[var(--button-offset)]
            peer-checked:bg-blue-500
            peer-checked:after:translate-x-[var(--toggle-distance)]
            peer-active:after:w-[var(--button-hold-width)]
            peer-active:peer-checked:after:translate-x-[--button-hold-offset]
          "
          ></div>
        </label>
      </BentoSquare>
      <BentoSquare className="col-start-1 col-span-1 row-start-2 bg-project_green flex flex-col justify-center items-center gap-5">
        <ProjectsIcon />
        <Link href="/projects">
          <Pill
            className="bg-white flex gap-2 justify-center items-center"
            onMouseEnter={projectBoopTrigger}
          >
            <span className="font-black text-2xl">Projects</span>
            <animated.span style={projectBoopStyle}>
              <Arrow />
            </animated.span>
          </Pill>
        </Link>
      </BentoSquare>
      <div className="grid grid-rows-2 gap-3 col-start-2 col-span-1 row-start-2">
        <BentoSquare className="bg-peach flex justify-center items-center">
          <a href="https://github.com/jeeheezy" target="_blank">
            <Pill
              className="bg-white flex justify-center items-center gap-3"
              onMouseEnter={githubBoopTrigger}
            >
              <GitHubIcon />
              <animated.span style={githubBoopStyle}>
                <Arrow />
              </animated.span>
            </Pill>
          </a>
        </BentoSquare>
        <BentoSquare className="bg-linkedin_blue flex justify-center items-center">
          <a href="https://www.linkedin.com/in/jeehol1999/" target="_blank">
            <Pill
              className="bg-white flex justify-center items-center gap-3"
              onMouseEnter={linkedinBoopTrigger}
            >
              <LinkedInIcon />
              <animated.span style={linkedinBoopStyle}>
                <Arrow />
              </animated.span>
            </Pill>
          </a>
        </BentoSquare>
      </div>
    </div>
  );
}
