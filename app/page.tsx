import Header from "@/components/kodela/Header";
import Hero from "@/components/kodela/Hero";
import Problems from "@/components/kodela/Problems";
import Transformation from "@/components/kodela/Transformation";
import Benefits from "@/components/kodela/Benefits";
import Solutions from "@/components/kodela/Solutions";
import CustomSystems from "@/components/kodela/CustomSystems";
import Process from "@/components/kodela/Process";
import Projects from "@/components/kodela/Projects";
import Audience from "@/components/kodela/Audience";
import Differentials from "@/components/kodela/Differentials";
import About from "@/components/kodela/About";
import CTA from "@/components/kodela/CTA";
import FAQ from "@/components/kodela/FAQ";
import Contact from "@/components/kodela/Contact";
import Footer from "@/components/kodela/Footer";

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#070A12] text-white">
      <Header />
      <Hero />
      <Problems />
      <Transformation />
      <Benefits />
      <Solutions />
      <CustomSystems />
      <Process />
      <Projects />
      <Audience />
      <Differentials />
      <About />
      <CTA />
      <FAQ />
      <Contact />
      <Footer />
    </main>
  );
}