"use client";
import { motion } from "framer-motion";

const INFO = [
  { key: "> Birthday", val: "22-02-2005" },
  { key: "> Logic_Gate", val: "Full-Stack" },
  { key: "> Comm_Link", val: "+62 812-8184-4073" },
  { key: "> Base_Node", val: "Depok, Indonesia" },
  { key: "> Experience", val: "Junior Level" },
  { key: "> Education", val: "Telkom University" },
  { key: "> E-Mail", val: "derukhdj22@gmail.com" },
  { key: "> Status", val: "Available_for_Projects", green: true },
];

export default function About() {
  return (
    <section id="about" className="max-w-6xl mx-auto py-32 px-6 font-mono">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
      >
        {/* Section header */}
        <div className="flex items-center gap-4 mb-16 pb-4 border-b border-[#003d0f]">
          <span className="text-[#ffb700] text-sm tracking-widest">[ 01.</span>
          <h2
            className="text-xl md:text-2xl font-bold text-white uppercase tracking-widest"
            style={{ fontFamily: "var(--font-display)" }}
          >
            ROOT/ABOUT
          </h2>
          <span className="text-[#ffb700] text-sm">]</span>
          <div className="flex-1 h-px bg-linear-to-r from-[#003d0f] to-transparent hidden sm:block" />
        </div>

        <div className="grid md:grid-cols-5 gap-12 items-start">
          {/* Text + terminal */}
          <div className="md:col-span-3 space-y-6">
            {/* Terminal bio window */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="border border-[#003d0f] bg-[#050f05] relative transition-all hover:border-[#00ff41]/40 group"
              style={{ boxShadow: "inset 0 0 30px rgba(0,255,65,0.03)" }}
            >
              {/* Top accent */}
              <div className="absolute top-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-[#00ff41]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              {/* Titlebar */}
              <div className="flex items-center gap-2 px-4 py-2 border-b border-[#003d0f] bg-[#00ff41]/5">
                <span className="w-2.5 h-2.5 bg-[#ff3b30] rounded-sm" />
                <span className="w-2.5 h-2.5 bg-[#ffb700] rounded-sm" />
                <span className="w-2.5 h-2.5 bg-[#00ff41] rounded-sm" />
                <span className="ml-3 text-xs text-[#a1c1a1] tracking-widest uppercase">
                  profile.exe
                </span>
              </div>
              <div className="p-6 text-base leading-loose text-[#a1c1a1] space-y-4">
                <p>
                  &gt; User detected:{" "}
                  <span className="text-[#00ff41] font-medium">
                    Deru Khairan Djuharianto
                  </span>
                  . A Software Engineering student dedicated to building
                  scalable and secure digital ecosystems. Started the journey at{" "}
                  <span className="text-white">SMK Citra Negara</span>,
                  transforming raw logic into functional web-based solutions.
                </p>
                <p>
                  &gt; Current focus:{" "}
                  <span className="text-white">Telkom University</span>.
                  Specialized in architecting{" "}
                  <span className="text-white border-b border-dashed border-[#003d0f] hover:border-[#00ff41]/40 transition-colors">
                    robust backend systems
                  </span>{" "}
                  while maintaining{" "}
                  <span className="text-white border-b border-dashed border-[#003d0f] hover:border-[#00ff41]/40 transition-colors">
                    high-performance frontend delivery
                  </span>
                  . I bridge the gap between complex data and user-centric
                  design.
                </p>
                <p>
                  &gt; Technical Roadmap: Proficient in{" "}
                  <span className="text-[#00ff41]">Laravel</span> &{" "}
                  <span className="text-[#00ff41]">Next.js</span>. Actively
                  integrating{" "}
                  <span className="text-[#ff3355] font-bold">
                    Defensive Programming
                  </span>
                  —focusing on web security, API integrity, and optimizing
                  system performance for modern threat landscapes.
                </p>
              </div>
            </motion.div>

            {/* Status mini-terminal */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="border border-[#003d0f] bg-[#050f05] transition-all hover:border-[#00ff41]/40 group"
            >
              <div className="flex items-center gap-2 px-4 py-2 border-b border-[#003d0f]">
                <span className="w-2 h-2 bg-[#ff3b30] rounded-sm" />
                <span className="w-2 h-2 bg-[#ffb700] rounded-sm" />
                <span className="w-2 h-2 bg-[#00ff41] rounded-sm" />
                <span className="ml-3 text-xs text-[#a1c1a1] tracking-widest uppercase">
                  status.sh
                </span>
              </div>
              <div className="px-5 py-4 text-base space-y-2 text-[#a1c1a1]">
                <div className="flex gap-3">
                  <span className="text-[#ffb700]">❯</span>
                  <span>./check_readiness.sh</span>
                </div>
                <div className="pl-6 space-y-1.5">
                  <p>
                    <span className="text-[#00ff41]">✔</span> Specialized:
                    Full-stack Web Development
                  </p>
                  <p>
                    <span className="text-[#00ff41]">✔</span> Objective:
                    Building secure & scalable Enterprise Apps
                  </p>
                  <p>
                    <span className="text-[#00ff41]">✔</span> Stack:
                    PHP/Laravel, JavaScript/Next.js, Python
                  </p>
                  <p>
                    <span className="text-[#ffb700]">!</span> Current_Goal: Open
                    for Internships & Collaborative Dev
                  </p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right: info grid + photo */}
          <div className="md:col-span-2 space-y-8">
            {/* Info grid */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="border border-[#003d0f] bg-[#050f05] group hover:border-[#00ff41]/30 transition-all"
            >
              <div className="flex items-center gap-2 px-4 py-2 border-b border-[#003d0f]">
                <span className="w-2 h-2 bg-[#ff3b30] rounded-sm" />
                <span className="w-2 h-2 bg-[#ffb700] rounded-sm" />
                <span className="w-2 h-2 bg-[#00ff41] rounded-sm" />
                <span className="ml-3 text-xs text-[#a1c1a1] tracking-widest uppercase">
                  sys_info.json
                </span>
              </div>
              <ul className="divide-y divide-[#003d0f]">
                {INFO.map((item, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: 10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: 0.05 * i }}
                    className="flex items-start gap-3 px-5 py-3 text-xs hover:bg-[#00ff41]/5 transition-colors"
                  >
                    <span className="text-[#ffb700] min-w-27.5 shrink-0">
                      {item.key}
                    </span>
                    <span
                      className={
                        item.green
                          ? "text-[#00ff41] cursor-blink"
                          : "text-[#a1c1a1]"
                      }
                    >
                      {item.val}
                    </span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Profile image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.25 }}
              className="relative group w-fit"
            >
              <div className="border border-[#003d0f] p-1 bg-[#020d02] hover:border-[#00ff41]/50 transition-all duration-300 relative">
                <div className="flex items-center gap-1.5 px-2 py-1.5 border-b border-[#003d0f] mb-1">
                  <span className="w-2 h-2 bg-[#ff3b30] rounded-sm" />
                  <span className="w-2 h-2 bg-[#ffb700] rounded-sm" />
                  <span className="w-2 h-2 bg-[#00ff41] rounded-sm" />
                  <span className="ml-auto text-[9px] text-[#a1c1a1]">
                    profile.jpg
                  </span>
                </div>
                <div className="relative aspect-square w-48 md:w-56 overflow-hidden border border-[#003d0f]">
                  {/* Color overlay */}
                  <div className="absolute inset-0 bg-[#00ff41]/15 group-hover:bg-transparent transition-all duration-500 z-10 mix-blend-color" />
                  {/* Scanlines on image */}
                  <div
                    className="absolute inset-0 z-20 pointer-events-none opacity-40"
                    style={{
                      backgroundImage:
                        "linear-gradient(rgba(18,16,16,0) 50%, rgba(0,0,0,0.3) 50%)",
                      backgroundSize: "100% 4px",
                    }}
                  />
                  <img
                    src="/profile-placeholder.jpg"
                    alt="Deru Khairan"
                    onError={(e) => {
                      e.currentTarget.src =
                        "https://images.unsplash.com/photo-1549692520-acc6669e2f0c?q=80&w=400&auto=format&fit=crop";
                    }}
                    className="w-full h-full object-cover grayscale contrast-125 brightness-75 group-hover:brightness-100 group-hover:grayscale-0 transition-all duration-500"
                  />
                </div>
              </div>
              {/* Shadow frame */}
              <div className="absolute top-3 left-3 border border-[#003d0f] w-full h-full -z-10 group-hover:border-[#00ff41]/20 group-hover:top-4 group-hover:left-4 transition-all duration-300" />
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
