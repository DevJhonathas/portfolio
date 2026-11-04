import { Navbar } from "@/app/components/layout/Navbar";
import { Footer } from "@/app/components/layout/Footer";

import { Hero } from "@/app/components/home/Hero";
import { About } from "@/app/components/home/About";
import { Journey } from "@/app/components/home/Journey";
import { TechStack } from "@/app/components/home/TechStack";
import { Projects } from "@/app/components/home/Projects";

export default function Home() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <About />
        <Journey />
        <TechStack />
        <Projects />
      </main>

      <Footer />
    </>
  );
}