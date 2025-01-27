'use client'

import React, { useState } from "react";
import Container from "./container";
import { testimonials } from "@/constants";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

const HeroTestimonial = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    if (currentIndex < testimonials.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  return (
    <div className="bg-primary py-[5rem] text-white">
      <Container>
        <div>
          <div className="text-center leading-tight">
            <div className="flex items-center gap-5 justify-center">
              <div className="border-t border-yellow w-20" />
              <span className="text-xl font-normal">TESTIMONIAL</span>
            </div>
            <h1 className="text-[52px] uppercase font-semibold">What our clients say</h1>
            <p>We are fortunate to have formed excellent partnership with many of our clients.</p>
          </div>

          <div className="relative overflow-hidden pt-20">
            <div
              className="flex transition-transform duration-500"
              style={{
                transform: `translateX(-${currentIndex * 100}%)`,
                width: `${testimonials.length * 100}%`,
              }}
            >
              {testimonials.map((item) => (
                <div
                  key={item.id}
                  className="border py-8 px-4 rounded-xl flex items-center gap-5 bg-whitish text-black w-full"
                  style={{ flex: "0 0 100%" }}
                >
                  <Image
                    src={item.image}
                    alt={item.title}
                    width={100}
                    height={100}
                    className="rounded-full"
                  />
                  <div className="space-y-3">
                    <div>
                      <h1 className="text-2xl font-bold">{item.title}</h1>
                      <h2 className="text-lg">{item.role}</h2>
                    </div>
                    <div>
                      <p>{item.compliment}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="pt-5 flex items-center gap-5 justify-center">
            <button
              onClick={handlePrev}
              disabled={currentIndex === 0}
              className={`p-2 rounded-full ${
                currentIndex === 0 ? "bg-gray-400 cursor-not-allowed" : "bg-yellow"
              }`}
            >
              <ChevronLeft size={20} />
            </button>
            <div className="flex gap-1">
              {testimonials.map((_, index) => (
                <div
                  key={index}
                  className={`h-2 w-2 rounded-full ${
                    index === currentIndex ? "bg-yellow" : "bg-gray-400"
                  }`}
                />
              ))}
            </div>
            <button
              onClick={handleNext}
              disabled={currentIndex === testimonials.length - 1}
              className={`p-2 rounded-full ${
                currentIndex === testimonials.length - 1
                  ? "bg-gray-400 cursor-not-allowed"
                  : "bg-yellow"
              }`}
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default HeroTestimonial;
