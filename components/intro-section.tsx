/* eslint-disable react-hooks/exhaustive-deps */
"use client";

import React, { useEffect, useState } from "react";
import Container from "./container";
import Image from "next/image";
import group from '@/assets/Group.svg'
import bulb from '@/assets/bulb.svg'
import Slider from "./slider";

const IntroSection = () => {
  const [text, setText] = useState("Clean Energy");
  const [isSlidingOut, setIsSlidingOut] = useState(false);
  const options = [
    "Clean Energy",
    "Off Grid",
    "No Generators",
    "Renewable Energy",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setIsSlidingOut(true);
      setTimeout(() => {
        setText((prev) => {
          const currentIndex = options.indexOf(prev);
          const nextIndex = (currentIndex + 1) % options.length;
          return options[nextIndex];
        });
        setIsSlidingOut(false);
      }, 1000);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg- bg-gradient-to-r from-primary to-[rgb(1,60,121)] py-[5rem] text-white">
        <Image src={group} alt="" className="absolute right-[24rem] top-28 "/>
      <Container>
        <div className="flex justify-between">
        <div className="space-y-6">
          <div className="flex items-center gap-5">
            <div className="border-t border-yellow w-20" />
            <span className="text-xl font-normal">
              POWER FROM THE OTHER SIDE
            </span>
          </div>

          <div>
            <h1 className="text-[64px] font-bold">
              Power with <span className="text-yellow">Solar</span>
            </h1>
            <h2 className="text-5xl font-bold">Best Electricity Source.</h2>
            <h3
              className={`text-5xl font-bold transition-transform duration-1000 pt-5 ${
                isSlidingOut ? "slide-out" : "slide-in"
              }`}
            >
              {text}
            </h3>
          </div>

          <p >
            &quot;Say goodbye to noise fumes, and rising fuel costs-embrace
            reliable, <br /> eco-friendly solar solutions today!&quot;
          </p>

          <button className="text-black bg-yellow py-2 px-6 font-bold rounded-md">
            View More
          </button>
        </div>
        <Image src={bulb} alt="" />
        </div>

        <Slider />
      </Container>
    </div>
  );
};

export default IntroSection;
