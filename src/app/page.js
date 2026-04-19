import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <main className="bg-[#0a192f] min-h-screen relative">
      {/* Left and Right Social Lines (Desktop only) */}
      <div className="hidden md:block fixed left-10 bottom-0 w-10 z-50">
        <div className="flex flex-col items-center gap-6 after:content-[''] after:w-px after:h-24 after:bg-slate-500 after:mt-2">
          {/* We could add icons here, but keeping it simple for now as it's in Footer */}
        </div>
      </div>

      <Navbar />

      <div className="flex flex-col px-6 sm:px-12 md:px-24">
        <Hero />
        <About />
        <Skills />
        <Projects />
      </div>

      <Footer />
    </main>
  );
}
