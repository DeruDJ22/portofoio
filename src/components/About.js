"use client";
import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="max-w-5xl mx-auto py-32 px-6">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
      >
        <div className="flex items-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-200 flex items-center whitespace-nowrap">
            <span className="text-emerald-400 font-mono mr-3 text-lg md:text-xl font-normal">
              01.
            </span>
            About Me
          </h2>
          <div className="ml-6 h-px bg-slate-700 grow max-w-sm hidden sm:block"></div>
        </div>

        <div className="grid md:grid-cols-5 gap-12 items-start">
          <div className="md:col-span-3 text-slate-400 space-y-6 text-lg leading-relaxed shadow-sm">
            <p>
              Hello! My name is{" "}
              <span className="text-emerald-400 font-medium">
                Deru Khairan Djuharianto
              </span>
              . My journey in the world of software development began at{" "}
              <span className="text-slate-200">SMK Citra Negara</span>, where I
              majored in Software Engineering. It was there that I first
              discovered the thrill of turning pure logic into functional,
              interactive applications.
            </p>
            <p>
              Fast-forward to today, and I am currently pursuing my degree at{" "}
              <span className="text-slate-200">Telkom University</span>. Through
              rigorous academics and hands-on extracurricular projects, I enjoy
              the challenge of bridging{" "}
              <span className="text-slate-200">
                complex backend architectures
              </span>{" "}
              with{" "}
              <span className="text-slate-200">intuitive frontend designs</span>
              .
            </p>
            <p>
              My main focus right now is mastering the{" "}
              <span className="text-emerald-400">Laravel ecosystem</span> and
              modern JavaScript frameworks like{" "}
              <span className="text-emerald-400">Next.js</span>. I also possess
              a strong interest in{" "}
              <span className="text-emerald-400">cybersecurity</span>,
              meticulously testing and hardening applications against modern
              threats like SQL injections.
            </p>

            {/* Personal Details */}
            <div className="pt-6 mt-8 border-t border-slate-700/50">
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-8 text-base">
                <li className="flex items-start">
                  <strong className="text-emerald-400 font-mono min-w-22.5">
                    &gt; Birthday:
                  </strong>
                  <span className="text-slate-200">22 Februari 2005</span>
                </li>
                <li className="flex items-start">
                  <strong className="text-emerald-400 font-mono min-w-22.5">
                    &gt; Website:
                  </strong>
                  <span className="text-slate-200">-</span>
                </li>
                <li className="flex items-start">
                  <strong className="text-emerald-400 font-mono min-w-22.5">
                    &gt; Phone:
                  </strong>
                  <span className="text-slate-200">+62 812-8184-4073</span>
                </li>
                <li className="flex items-start">
                  <strong className="text-emerald-400 font-mono min-w-22.5">
                    &gt; City:
                  </strong>
                  <span className="text-slate-200">Depok, Indonesia</span>
                </li>
                <li className="flex items-start">
                  <strong className="text-emerald-400 font-mono min-w-22.5">
                    &gt; Age:
                  </strong>
                  <span className="text-slate-200">19</span>
                </li>
                <li className="flex items-start">
                  <strong className="text-emerald-400 font-mono min-w-22.5">
                    &gt; Degree:
                  </strong>
                  <span className="text-slate-200">-</span>
                </li>
                <li className="flex items-start">
                  <strong className="text-emerald-400 font-mono min-w-22.5">
                    &gt; Email:
                  </strong>
                  <span className="text-slate-200 break-all text-sm mt-1 sm:mt-0 sm:text-base">
                    derukhdj22@gmail.com
                  </span>
                </li>
                <li className="flex items-start">
                  <strong className="text-emerald-400 font-mono min-w-22.5">
                    &gt; Freelance:
                  </strong>
                  <span className="text-slate-200">Available</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="md:col-span-2 relative group max-w-75 mx-auto md:ml-auto w-full">
            <div className="relative border-2 border-emerald-400 rounded-xl p-2 transition-transform duration-300 group-hover:-translate-x-2 group-hover:-translate-y-2 group-hover:shadow-[8px_8px_0_0_#34d399]">
              <div className="bg-slate-800 rounded-lg aspect-square overflow-hidden relative">
                {/* Overlay effect */}
                <div className="absolute inset-0 bg-emerald-400/20 group-hover:opacity-0 transition-opacity duration-300 z-10 mix-blend-multiply"></div>
                <img
                  src="/profile-placeholder.jpg"
                  alt="Deru Profile"
                  onError={(e) => {
                    e.currentTarget.src =
                      "https://images.unsplash.com/photo-1549692520-acc6669e2f0c?q=80&w=600&auto=format&fit=crop";
                  }}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 scale-100 group-hover:scale-105"
                />
              </div>
            </div>
            {/* The decorative frame behind */}
            <div className="absolute top-4 left-4 border-2 border-emerald-400 rounded-xl w-full h-full -z-10 transition-transform duration-300 group-hover:translate-x-2 group-hover:translate-y-2"></div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
