"use client";
import { motion } from "framer-motion";
import { Folder, ExternalLink } from "lucide-react";
import { Github } from "./Icons";

const projects = [
  {
    title: "SMBGarasiBMW",
    desc: "A comprehensive garage management system project specializing in database security, role-based access control, and SQL injection prevention techniques.",
    link: "#",
    github: "https://github.com/EdselSpth/SMB-GarasiBMW",
    tech: ["Laravel", "SQLi Security", "Tailwind CSS"],
  },
  {
    title: "Web-Based POS",
    desc: "A robust Point of Sales architecture with full inventory control, transaction handling, and automated sales analysis features.",
    link: "https://derudj.saungkoding.com",
    github: "#",
    tech: ["PHP", "MySQL", "AdminLTE"],
  },
  {
    title: "E-Commerce Fresh",
    desc: "An enterprise-grade platform for groceries, utilizing high-quality software architecture built completely on a structured Java backend.",
    link: "https://github.com/DeruDJ22/Tubes_DPBO",
    github: "https://github.com/DeruDJ22/Tubes_DPBO",
    tech: ["Java", "OOP Paradigm", "MySQL"],
  },
  {
    title: "Burger Shop UI",
    desc: "A modern, highly interactive landing page design for a digital hamburger store, focusing on smooth animations and user experience.",
    link: "https://github.com/DeruDJ22/projectSMK",
    github: "https://github.com/DeruDJ22/projectSMK",
    tech: ["HTML5", "CSS3", "Vanilla JS"],
  },
  {
    title: "Online Shop Design",
    desc: "A modern, highly interactive landing page design for a online shop, focusing on smooth animations and user experience.",
    link: "https://github.com/DeruDJ22/projectSMK/tree/main/Bootstrap",
    github: "https://github.com/DeruDJ22/projectSMK/tree/main/Bootstrap",
    tech: ["HTML5", "CSS3", "Bootstrap"],
  },
  {
    title: "Helmet Detection System",
    desc: "This project features a real-time safety helmet detection system, powered by a Next.js frontend and a FastAPI backend, utilizing the YOLOv8 model for high-accuracy object recognition.",
    link: "#",
    github: "https://github.com/DeruDJ22/CCI_Kelompok6",
    tech: ["Next.js", "FastAPI", "YOLOv8"],
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

export default function Projects() {
  return (
    <section id="projects" className="max-w-6xl mx-auto py-24 px-6 relative">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
      >
        <div className="flex items-center mb-16">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-200 flex items-center whitespace-nowrap">
            <span className="text-emerald-400 font-mono mr-3 text-lg md:text-xl font-normal">
              03.
            </span>
            Notable Projects
          </h2>
          <div className="ml-6 h-px bg-slate-700 grow max-w-sm hidden sm:block"></div>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {projects.map((p, i) => (
            <motion.div
              key={i}
              variants={itemVariants}
              whileHover={{ y: -8 }}
              className="bg-[#112240] p-8 rounded-xl border border-transparent hover:border-emerald-400/30 transition-all group flex flex-col h-full shadow-lg hover:shadow-2xl hover:shadow-emerald-400/5 relative overflow-hidden"
            >
              {/* Subtle gradient background on hover */}
              <div className="absolute inset-0 bg-linear-to-br from-emerald-400/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>

              <div className="flex justify-between items-center mb-8 text-emerald-400 z-10">
                <Folder size={40} className="stroke-1" />
                <div className="flex gap-4 items-center">
                  {p.github !== "#" && (
                    <a
                      href={p.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-slate-400 hover:text-emerald-400 transition-colors"
                    >
                      <Github size={20} />
                    </a>
                  )}
                  {p.link !== "#" && (
                    <a
                      href={p.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-slate-400 hover:text-emerald-400 transition-colors"
                    >
                      <ExternalLink size={20} />
                    </a>
                  )}
                </div>
              </div>

              <h3 className="text-slate-200 text-xl font-bold mb-3 group-hover:text-emerald-400 transition-colors z-10">
                {p.title}
              </h3>

              <p className="text-slate-400 text-sm mb-8 grow leading-relaxed z-10">
                {p.desc}
              </p>

              <div className="flex flex-wrap gap-x-4 gap-y-2 z-10 mt-auto">
                {p.tech.map((t, idx) => (
                  <span
                    key={idx}
                    className="text-xs font-mono text-slate-500 group-hover:text-emerald-400/80 transition-colors"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
