import { useEffect } from "react";
import Hero from "@/sections/Hero";
import About from "@/sections/About";
import Expertise from "@/sections/Expertise";
import Services from "@/sections/Services";
import FeaturedProjects from "@/sections/FeaturedProjects";
import Skills from "@/sections/Skills";
import Experience from "@/sections/Experience";
import Testimonials from "@/sections/Testimonials";
import FAQ from "@/sections/FAQ";
import Contact from "@/sections/Contact";
import { profile } from "@/data/profile";

export default function Home() {
  useEffect(() => {
    document.title = `${profile.name} — Generative AI Engineer | RAG, LLM & AI Integration Expert`;
  }, []);

  return (
    <>
      <Hero />
      <About />
      <Expertise />
      <Services />
      <FeaturedProjects />
      <Skills />
      <Experience />
      <Testimonials />
      <FAQ />
      <Contact />
    </>
  );
}
