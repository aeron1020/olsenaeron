import { Hero } from "./components/Hero";
import ProjectGrid from "./components/ProjectGrid";
import Skills from "./components/Skills";
import { Contact } from "./components/Contact";
import Footer from "./components/Footer";
import Foundations from "./components/Foundations";


export default function Home() {
  return (
    <div className="space-y-20">
      <Hero />
      <ProjectGrid />
      <Skills />
      <Foundations />
      <Contact />
      <Footer />
    </div>
  );
}