import React from "react";
import Container from "./container";

// import slide1 from '@/assets/slide1.svg'
// import slide2 from '@/assets/slide2.svg'
// import slide3 from '@/assets/slide3.svg'


// const slides =[
//     slide1,
//     slide2,
//     slide3
// ]


const HeroProjects = () => {
  return (
    <div className="bg-[#E9EBF8]">
      <Container>
        <div className="place-items-center text-black">
          <h1 className="text-[52px] font-semibold">OUR PROJECTS</h1>
          <span>
            Discover reliable, sustainable energy solutions designed to power
            your home.
          </span>
        </div>
      </Container>
    </div>
  );
};

export default HeroProjects;
