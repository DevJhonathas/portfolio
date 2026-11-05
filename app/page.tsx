import { Navbar } from "@/app/components/layout/Navbar";
import { Footer } from "@/app/components/layout/Footer";

import { Hero } from "@/app/components/home/Hero";
import { About } from "@/app/components/home/About";
import { Journey } from "@/app/components/home/Journey";
import { TechStack } from "@/app/components/home/TechStack";
import { Projects } from "@/app/components/home/Projects";
import { Reveal } from "@/app/components/layout/Reveal";
import { Experience } from "@/app/components/home/Experience";

export default function Home() {
  return (
    <>
      <Navbar />

      <main>
        <Reveal>
          <Hero />
        </Reveal>
        <Reveal>
          <Projects />
        </Reveal>
        <Reveal>
          <About />
        </Reveal>
        <Reveal>
          <Journey />
        </Reveal>
        <Reveal>
          <Experience />
        </Reveal>
        <Reveal>
          <TechStack />
        </Reveal>
      </main>

      <Footer />
    </>
  );
}