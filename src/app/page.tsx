import Link from "next/link";

import BentoSquare from "@/components/BentoSquare";
import AnimatedPill from "@/components/AnimatedPill";

import ProjectsIcon from "@/assets/projects.svg";
import EmailIcon from "@/assets/contacts.svg";
import GitHubIcon from "@/assets/github.svg";
import LinkedInIcon from "@/assets/linkedin.svg";

export default function Home() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 sm:grid-rows-4 lg:grid-cols-4 lg:grid-rows-2 gap-4 lg:gap-6 max-w-[1344px]">
      <BentoSquare className="lg:col-span-2 lg:row-span-1 bg-lily_white flex flex-col justify-center">
        <p className="font-black text-2xl lg:text-4xl mb-6">JEEHO LEE</p>
        {/* TODO: replace placeholder text */}
        <p className="font-normal text-xl lg:text-2xl mb-6">
          is a Chicago-based full-stack developer, passionate about crafting
          sleek, user-friendly code that brings digital experiences to life.
        </p>
        <div className="flex flex-col xl:flex-row gap-3">
          <Link href="/about">
            <AnimatedPill>
              <span className="font-black text-xl lg:text-2xl">About</span>
            </AnimatedPill>
          </Link>
          <a
            href={"resume.pdf"}
            target="_blank"
            rel="noopener noreferrer"
            download="JeehoResume.pdf"
          >
            <AnimatedPill>
              <span className="lg:whitespace-nowrap font-black text-xl lg:text-2xl">
                Resume (PDF)
              </span>
            </AnimatedPill>
          </a>
        </div>
      </BentoSquare>
      <BentoSquare className="lg:col-start-3 lg:col-span-1 lg:row-start-1 lg:row-span-2 bg-white">
        <p>Animation</p>
      </BentoSquare>
      <BentoSquare className="lg:col-start-4 lg:col-span-1 bg-contact_red flex flex-col justify-center items-center gap-5">
        <EmailIcon className="h-medium_icon" />
        <Link href="/contact">
          <AnimatedPill>
            <span className="font-black text-xl lg:text-2xl">Contact</span>
          </AnimatedPill>
        </Link>
      </BentoSquare>
      <BentoSquare className="lg:col-start-1 lg:col-span-1 lg:row-start-2 bg-project_green flex flex-col justify-center items-center gap-5">
        <ProjectsIcon className="h-medium_icon" />
        <Link href="/projects">
          <AnimatedPill>
            <span className="font-black text-xl lg:text-2xl">Projects</span>
          </AnimatedPill>
        </Link>
      </BentoSquare>
      <div className="grid grid-row-1 grid-cols-2 gap-3 sm:grid-cols-none sm:grid-rows-2 sm:col-start-2 sm:col-span-1 sm:row-start-2">
        <BentoSquare className="bg-peach flex justify-center items-center p-3">
          <a href="https://github.com/jeeheezy" target="_blank">
            <AnimatedPill className="gap-3">
              <GitHubIcon className="h-small_icon" />
            </AnimatedPill>
          </a>
        </BentoSquare>
        <BentoSquare className="bg-linkedin_blue flex justify-center items-center p-3">
          <a href="https://www.linkedin.com/in/jeehol1999/" target="_blank">
            <AnimatedPill className="gap-3">
              <LinkedInIcon className="h-small_icon" />
            </AnimatedPill>
          </a>
        </BentoSquare>
      </div>
      <BentoSquare className="lg:col-start-4 lg:col-span-1 lg:row-start-2 bg-gray_light_blue flex justify-center items-center">
        <label className="inline-flex items-center cursor-pointer">
          <input type="checkbox" className="sr-only peer" />
          <div
            className="relative w-[var(--slider-width)] h-[var(--slider-height)] bg-gray-400 rounded-full transition-all ease-in-out duration-300
            after:content-[''] after:bg-white after:border-gray-400 after:border after:absolute
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
    </div>
  );
}
