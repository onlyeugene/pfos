import React from "react";
import Container from "./container";
import Image from "next/image";

import maintenanance from "@/assets/maintenance.svg";
import sales from "@/assets/sales.svg";
import academy from "@/assets/academy.svg";
import consultant from "@/assets/consultancy.svg";

const HeroServices = () => {
  return (
    <div className="py-20 text-white">
      <Container>
        <div className="flex flex-col items-center justify-center">
          <div className="flex items-center gap-5">
            <div className="border-t border-yellow w-20" />
            <span className="text-xl font-normal">OUR SERVICES</span>
          </div>
          <h1 className="text-[52px] font-semibold text-transpare stroke-black">
            WHAT WE OFFER
          </h1>
        </div>

        <div className="py-10 space-y-10">
          {/* MAINTENANACE  */}
          <div className="border-b border-t py-1 flex justify-between">
            <Image src={maintenanance} alt="maintenance image" />

            <div className="space-y-4 leading-tight">
              <div className="flex items-center gap-4">
                <h1 className="text-[100px] font-black stroke">01</h1>
                <span>
                  OUR <br /> SERVICES
                  <div className="border-t border-yellow w-20 border-2" />
                </span>
              </div>
              <h1 className="text-[32px] font-semibold">
                INSTALLATIONS & MAINTENANCE
              </h1>
              <p>
                We provide suiting service in inverter system installation and
                maintenance, <br /> solar energy system installation and
                maintenance, and solar security lighting.
              </p>
              <button className="text-black bg-yellow py-2 px-6 font-bold rounded-md">
                View More
              </button>
            </div>
          </div>

          {/* SALES  */}
          <div className="border-b border-t py-1 flex justify-between">
            <div className="space-y-4 leading-tight">
              <div className="flex items-center gap-4">
                <h1 className="text-[100px] font-black">02</h1>
                <span>
                  OUR <br /> SERVICES
                  <div className="border-t border-yellow w-20 border-2" />
                </span>
              </div>
              <h1 className="text-[32px] font-semibold">SOLAR PRODUCT SALES</h1>
              <p>
                Inverters, charge controllers, tubular & dry cell batteries,
                solar panels, solar <br /> fan, digital accessories, solar
                iron,, wire,, rechargeable bulb, panels and rack <br /> e.t.c
              </p>
              <button className="text-black bg-yellow py-2 px-6 font-bold rounded-md">
                View More
              </button>
            </div>
            <Image src={sales} alt="sales image" />
          </div>

          {/* ACADEMY  */}

          <div className="border-b border-t py-1 flex justify-between">
            <Image src={academy} alt="academy image" />

            <div className="space-y-4 leading-tight">
              <div className="flex items-center gap-4">
                <h1 className="text-[100px] font-black">03</h1>
                <span>
                  OUR <br /> SERVICES
                  <div className="border-t border-yellow w-20 border-2" />
                </span>
              </div>
              <h1 className="text-[32px] font-semibold">SOLAR ACADEMY</h1>
              <p>
                We work harmoniously with Nigerian youth to make themselves
                reliant <br /> through comprehensive training. Become a solar
                expert today!
              </p>
              <button className="text-black bg-yellow py-2 px-6 font-bold rounded-md">
                View More
              </button>
            </div>
          </div>

          {/* CONSULTANCY  */}
          <div className="border-b border-t py-1 flex justify-between">
            <div className="space-y-4 leading-tight">
              <div className="flex items-center gap-4">
                <h1 className="text-[100px] font-black">04</h1>
                <span>
                  OUR <br /> SERVICES
                  <div className="border-t border-yellow w-20 border-2" />
                </span>
              </div>
              <h1 className="text-[32px] font-semibold">CONSULTANCY</h1>
              <p>
              We  do consults for Homes, Organizations and firms like malls, bank, schools, <br /> gas stations, corporate & religious outlets, government pastorals,
              </p>
              <button className="text-black bg-yellow py-2 px-6 font-bold rounded-md">
                View More
              </button>
            </div>
            <Image src={consultant} alt="consultant image" />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default HeroServices;
