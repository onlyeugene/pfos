import Hero from "@/components/hero";
import HeroProjects from "@/components/hero-projects";
import HeroServices from "@/components/hero-service";
import HeroTestimonial from "@/components/hero-testimonial";
import IntroSection from "@/components/intro-section";

export default function Home() {
  return (
    <>
    <div >
    <IntroSection />
      <div className="bg-primary ">
        <Hero />
        <HeroServices />
      </div>
      <HeroProjects />
      <HeroTestimonial />
    </div>
    </>
  );
}
