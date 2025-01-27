import Image from "next/image";
import React from "react";

import heroImage from "@/assets/hero-image.svg";
import Container from "./container";

const props = [
  {
    years: "4+",
    title: (
      <p className="leading-tight">
        Years of <br />
        Experience
      </p>
    ),
  },
  {
    years: "38+",
    title: (
      <p className="leading-tight">
        Complete <br />
        Projects
      </p>
    ),
  },
  {
    years: "120+",
    title: (
      <p className="leading-tight">
        Happy <br />
        Beneficiaries
      </p>
    ),
  },
];

const strengths = [
  {
    title: "RESPONSIBILITY",
    description:
      "We&apos; are accountable to team, customers, subcontractors, suppliers, engineers and communities",
  },
  {
    title: "TRUST",
    description:
      "Trust is central with customers, subcontractors, suppliers, engineers and team members.",
  },
  {
    title: "TEAM WORK",
    description: `Strength lies in PFOS's collaborative approach with customers and partners.`,
  },
  {
    title: "SAFETY",
    description: `We're dedicated to zero worker injuries. Safety is our top priority to everyone involved.`,
  },
];

const Hero = () => {
  return (
    <div className="py-5 text-white">
      <Container>
        <div className="py-5 flex lg:flex-row flex-col space-x-20 items-center">
          <Image src={heroImage} alt="hero-image" />

          <div className="space-y-6">
            <div className="flex items-center gap-5">
              <div className="border-t border-yellow w-20" />
              <span className="text-xl font-normal">ABOUT US</span>
            </div>
            <h1 className="text-[52px] font-semibold">
              We Are Power <br />
              From the Other Side
            </h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi,
              saepe. Magnam quas et, rem obcaecati ex aspernatur similique
              aliquam commodi fugiat, dolorum amet? Aut, in doloremque a modi
              accusantium enim perspiciatis aliquid officia nostrum nemo
              repellendus excepturi cupiditate praesentium cumque error?
              Debitis, iste. A cupiditate sequi eaque. Necessitatibus,
              laboriosam sit.
            </p>

            <div className="flex gap-5">
              {props.map((item) => (
                <div key={item.years} className="flex items-center gap-2">
                  <h2 className="text-[36.34px]">{item.years}</h2>
                  <span>{item.title}</span>
                </div>
              ))}
            </div>
            <button className="text-black bg-yellow py-2 px-6 font-bold rounded-md">
              View More
            </button>
          </div>
        </div>

        <div className="space-y-6">
          <div className="flex items-center gap-5">
            <div className="border-t border-yellow w-20" />
            <span className="text-xl font-normal">OUR STRENGTH</span>
          </div>

          <div className="grid md:grid-cols-4 sm:grid-cols-2 grid-cols-1  gap-32">
            {strengths.map((item) => (
              <div key={item.title}>
                <h1 className="text-yellow text-[29px] font-bold">
                  {item.title}
                </h1>
                <p>{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Hero;
