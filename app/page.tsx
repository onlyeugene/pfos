import Hero from "@/components/hero";
import HeroProjects from "@/components/hero-projects";
import HeroServices from "@/components/hero-service";
import IntroSection from "@/components/intro-section";

export default function Home() {
  return (
    <>
    <div >
    <IntroSection />
      <div className="bg-primary z-50">
        <Hero />
        <HeroServices />
      </div>
      <HeroProjects />
    </div>
    </>
  );
}
