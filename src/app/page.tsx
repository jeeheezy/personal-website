"use client";

import Link from "next/link";

import BentoSquare from "@/components/BentoSquare";
import Pill from "@/components/Pill";

import ProjectsIcon from "@/assets/projects.svg";
import EmailIcon from "@/assets/contacts.svg";
import GitHubIcon from "@/assets/github.svg";
import LinkedInIcon from "@/assets/linkedin.svg";
import Arrow from "@/assets/arrow-out.svg";

export default function Home() {
  return (
    <div className="grid grid-cols-4 grid-rows-2 gap-4 lg:gap-6 p-3 w-[1512px]">
      <BentoSquare className="col-span-2 row-span-1 bg-lily_white flex flex-col justify-center p-10">
        <p className="font-black text-4xl mb-6">JEEHO LEE</p>
        {/* TODO: replace placeholder text */}
        <p className="font-normal text-2xl mb-6">
          is a Chicago-based full-stack developer, passionate about crafting
          sleek, user-friendly code that brings digital experiences to life.
        </p>
        <div className="flex gap-3">
          <Link href="/about">
            <Pill className="bg-white flex gap-2 justify-center items-center">
              <span className="font-black text-2xl">About</span>
              <Arrow />
            </Pill>
          </Link>
          <Link href="">
            <Pill className="bg-white flex gap-2 justify-center items-center">
              <span className="font-black text-2xl">Resume (PDF)</span>
              <Arrow />
            </Pill>
          </Link>
        </div>
      </BentoSquare>
      <BentoSquare className="col-start-3 col-span-1 row-start-1 row-span-2 bg-white">
        <p>Animation</p>
      </BentoSquare>
      <BentoSquare className="col-start-4 col-span-1 bg-contact_red aspect-square flex flex-col justify-center items-center gap-5">
        <EmailIcon />
        <Link href="/contact">
          <Pill className="bg-white flex gap-2 justify-center items-center">
            <span className="font-black text-2xl">Contact</span>
            {/* https://medium.com/@abilsavio/email-contact-form-using-nextjs-app-router-60c29fe70644 */}
            <Arrow />
          </Pill>
        </Link>
      </BentoSquare>
      <BentoSquare className="col-start-4 col-span-1 row-start-2 bg-gray_light_blue aspect-square">
        <p>Toggle</p>
      </BentoSquare>
      <BentoSquare className="col-start-1 col-span-1 row-start-2 bg-project_green aspect-square flex flex-col justify-center items-center gap-5">
        <ProjectsIcon />
        <Link href="/projects">
          <Pill className="bg-white flex gap-2 justify-center items-center">
            <span className="font-black text-2xl">Projects</span>
            <Arrow />
          </Pill>
        </Link>
      </BentoSquare>
      <div className="grid grid-rows-2 gap-3 col-start-2 col-span-1 row-start-2">
        <BentoSquare className="bg-peach flex justify-center items-center">
          <a href="https://github.com/jeeheezy" target="_blank">
            <Pill className="bg-white flex justify-center items-center gap-3">
              <GitHubIcon />
              <Arrow />
            </Pill>
          </a>
        </BentoSquare>
        <BentoSquare className="bg-linkedin_blue flex justify-center items-center">
          <a href="https://www.linkedin.com/in/jeehol1999/" target="_blank">
            <Pill className="bg-white flex justify-center items-center gap-3">
              <LinkedInIcon />
              <Arrow />
            </Pill>
          </a>
        </BentoSquare>
      </div>
    </div>
  );
}
