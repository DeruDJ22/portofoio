"use client";
import { motion } from "framer-motion";
import { Folder, ExternalLink } from "lucide-react";
import { Github } from "./Icons";

const PROJECTS = [
  {
    id: "P::001",
    title: "SMBGarasiBMW",
    desc: "Comprehensive garage management system specializing in database security, role-based access control, and SQL injection prevention techniques.",
    github: "https://github.com/EdselSpth/SMB-GarasiBMW",
    link: null,
    tech: ["Laravel", "SQLi/Sec", "Tailwind"],
    highlight: true,
  },
  {
    id: "P::002",
    title: "Web-Based POS",
    desc: "Robust Point of Sales architecture with full inventory control, transaction handling, and automated sales analysis features.",
    github: null,
    link: "https://derudj.saungkoding.com",
    tech: ["PHP", "MySQL", "AdminLTE"],
  },
  {
    id: "P::003",
    title: "E-Commerce Fresh",
    desc: "Enterprise-grade grocery platform utilizing high-quality software architecture built on a structured Java backend with OOP paradigm.",
    github: "https://github.com/DeruDJ22/Tubes_DPBO",
    link: "https://github.com/DeruDJ22/Tubes_DPBO",
    tech: ["Java", "OOP", "MySQL"],
  },
  {
    id: "P::004",
    title: "Burger Shop UI",
    desc: "Modern, highly interactive landing page for a digital hamburger store — focusing on smooth animations and immersive user experience.",
    github: "https://github.com/DeruDJ22/projectSMK",
    link: "https://github.com/DeruDJ22/projectSMK",
    tech: ["HTML5", "CSS3", "Vanilla_JS"],
  },
  {
    id: "P::005",
    title: "Online Shop Design",
    desc: "Modern interactive landing page for an online shop with user-centric experience design and responsive Bootstrap grid system.",
    github: "https://github.com/DeruDJ22/projectSMK/tree/main/Bootstrap",
    link: "https://github.com/DeruDJ22/projectSMK/tree/main/Bootstrap",
    tech: ["HTML5", "CSS3", "Bootstrap"],
  },
  {
    id: "P::006",
    title: "Helmet Detect Sys",
    desc: "Real-time safety helmet detection system — Next.js frontend, FastAPI backend, and YOLOv8 model for high-accuracy object recognition.",
    github: "https://github.com/DeruDJ22/CCI_Kelompok6",
    link: null,
    tech: ["Next.js", "FastAPI", "YOLOv8"],
    highlight: true,
  },
];

const container = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
};
const item = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.4 } },
};

export default function Projects() {
  return (
    <section id="projects" className="max-w-6xl mx-auto py-24 px-6 font-mono">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
      >
        {/* Section header */}
        <div className="flex items-center gap-4 mb-16 pb-4 border-b border-[#003d0f]">
          <span className="text-[#ffb700] text-sm tracking-widest">[ 03.</span>
          <h2
            className="text-xl md:text-2xl font-bold text-white uppercase tracking-widest"
            style={{ fontFamily: "var(--font-display)" }}
          >
            DATA/PROJECTS
          </h2>
          <span className="text-[#ffb700] text-sm">]</span>
          <div className="flex-1 h-px bg-linear-to-r from-[#003d0f] to-transparent hidden sm:block" />
        </div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          {PROJECTS.map((p, i) => (
            <motion.div
              key={i}
              variants={item}
              whileHover={{ y: -4, boxShadow: "0 0 24px rgba(0,255,65,0.25)" }}
              className={`bg-[#050f05] border flex flex-col h-full relative overflow-hidden transition-all duration-300 group ${
                p.highlight
                  ? "border-[#003d0f] hover:border-[#00ff41]/70"
                  : "border-[#003d0f] hover:border-[#00ff41]/50"
              }`}
            >
              {/* Top scan line */}
              <div className="absolute top-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-[#00ff41]/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

              {/* Terminal titlebar */}
              <div className="flex items-center gap-1.5 px-3 py-2 bg-[#00ff41]/5 border-b border-[#003d0f]">
                <span className="w-2 h-2 bg-[#ff3b30]" />
                <span className="w-2 h-2 bg-[#ffb700]" />
                <span className="w-2 h-2 bg-[#00ff41]" />
                <span className="ml-2 text-xs text-[#a1c1a1] tracking-widest uppercase">
                  PRJ_LOG_{p.id.split("::")[1]}
                </span>
                {p.highlight && (
                  <span className="ml-auto text-[10px] text-[#00ff41] border border-[#003d0f] px-1.5 tracking-widest">
                    FEATURED
                  </span>
                )}
              </div>

              {/* Subtle grid bg on hover */}
              <div
                className="absolute inset-x-0 bottom-0 top-8 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"
                style={{
                  backgroundImage:
                    "linear-gradient(rgba(0,255,65,0.04) 1px, transparent 1px)",
                  backgroundSize: "100% 14px",
                }}
              />

              <div className="p-5 flex flex-col flex-1 z-10">
                {/* Icon + links */}
                <div className="flex justify-between items-center mb-5">
                  <Folder
                    size={32}
                    className="text-[#00ff41] stroke-1 opacity-60 group-hover:opacity-100 transition-opacity"
                  />
                  <div className="flex gap-4 items-center">
                    {p.github && (
                      <a
                        href={p.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#a1c1a1] hover:text-[#00ff41] transition-colors"
                      >
                        <Github size={18} />
                      </a>
                    )}
                    {p.link && (
                      <a
                        href={p.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#a1c1a1] hover:text-[#00ff41] transition-colors"
                      >
                        <ExternalLink size={18} />
                      </a>
                    )}
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-white text-lg font-bold uppercase tracking-wider mb-3 group-hover:text-[#00ff41] transition-colors flex items-center gap-2">
                  <span className="text-[#00ff41] text-sm">&gt;</span>
                  {p.title}
                </h3>

                {/* Desc */}
                <p className="text-[#a1c1a1] text-sm leading-relaxed flex-1 mb-5">
                  {p.desc}
                </p>

                {/* Tech tags */}
                <div className="flex flex-wrap gap-2 pt-4 border-t border-[#003d0f]">
                  {p.tech.map((t, idx) => (
                    <span
                      key={idx}
                      className="text-[11px] text-[#00e5ff]/60 bg-[#00e5ff]/5 border border-[#00e5ff]/10 px-2 py-0.5 uppercase tracking-widest group-hover:text-[#00e5ff]/90 group-hover:border-[#00e5ff]/20 transition-colors"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
