"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const SKILLS = [
  { label: "HTML5_&&_CSS3", level: 85, cat: "sys.frontend" },
  { label: "JavaScript_ES6", level: 75, cat: "sys.frontend" },
  { label: "React_NextJS", level: 65, cat: "sys.frontend" },
  { label: "Tailwind_CSS", level: 80, cat: "sys.frontend" },
  { label: "PHP_Laravel", level: 70, cat: "sys.backend" },
  { label: "Java_OOP", level: 60, cat: "sys.backend" },
  { label: "C++", level: 45, cat: "sys.algorithm" },
  { label: "Go_Lang", level: 30, cat: "sys.backend" },
];

function blocks(pct) {
  const filled = Math.floor(pct / 5);
  return "█".repeat(filled) + "░".repeat(20 - filled);
}

function SkillBar({ skill, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.4, delay: index * 0.07 }}
      className="group"
    >
      <div className="flex justify-between items-end mb-2 pb-1 border-b border-[#003d0f]">
        <div>
          <p className="text-white text-sm font-bold uppercase flex items-center gap-2">
            <span className="text-[#00ff41] text-xs">■</span>
            {skill.label}
          </p>
          <p className="text-[#a1c1a1] text-xs tracking-widest uppercase mt-0.5">
            {skill.cat}
          </p>
        </div>
        <span className="text-[#ffb700] text-sm font-bold">{skill.level}%</span>
      </div>

      {/* ASCII bar — desktop */}
      <div className="hidden sm:block text-[#00ff41]/70 text-xs tracking-widest font-mono mt-1">
        [{blocks(skill.level)}]
      </div>

      {/* Progress bar — mobile */}
      <div className="sm:hidden border border-[#003d0f] h-2 mt-2 bg-[#020d02]">
        <motion.div
          className="h-full bg-[#00ff41]"
          initial={{ width: 0 }}
          whileInView={{ width: `${skill.level}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, delay: index * 0.1, ease: "easeOut" }}
          style={{ boxShadow: "0 0 8px #00ff41" }}
        />
      </div>
    </motion.div>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="max-w-6xl mx-auto py-24 px-6 font-mono">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
      >
        {/* Section header */}
        <div className="flex items-center gap-4 mb-16 pb-4 border-b border-[#003d0f]">
          <span className="text-[#ffb700] text-sm tracking-widest">[ 02.</span>
          <h2
            className="text-xl md:text-2xl font-bold text-white uppercase tracking-widest"
            style={{ fontFamily: "var(--font-display)" }}
          >
            SYS/SKILLS
          </h2>
          <span className="text-[#ffb700] text-sm">]</span>
          <div className="flex-1 h-px bg-linear-to-r from-[#003d0f] to-transparent hidden sm:block" />
        </div>

        {/* nmap-style terminal header */}
        <div className="border border-[#003d0f] bg-[#050f05] mb-10">
          <div className="flex items-center gap-2 px-4 py-2 border-b border-[#003d0f]">
            <span className="w-2 h-2 bg-[#ff3b30]" />
            <span className="w-2 h-2 bg-[#ffb700]" />
            <span className="w-2 h-2 bg-[#00ff41]" />
            <span className="ml-3 text-xs text-[#a1c1a1] tracking-widest uppercase">
              skill_scan.sh
            </span>
          </div>
          <div className="px-5 py-4 text-base space-y-1.5 text-[#a1c1a1]">
            <div className="flex gap-3">
              <span className="text-[#ffb700]">❯</span>
              <span>nmap -sV --skill-scan 192.168.deru.local</span>
            </div>
            <p className="pl-6 text-[#a1c1a1] italic">
              // Scanning target: Deru Khairan Djuharianto...
            </p>
            <p className="pl-6">
              <span className="text-[#00ff41]">HOST IS UP</span> — 8 skill
              vectors detected. Latency: 0ms
            </p>
            <p className="pl-6 text-[10px] tracking-widest">
              PORT &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; STATE &nbsp;&nbsp; SERVICE
            </p>
          </div>
        </div>

        {/* Skill bars */}
        <div className="grid md:grid-cols-2 gap-x-16 gap-y-10">
          {SKILLS.map((s, i) => (
            <SkillBar key={i} skill={s} index={i} />
          ))}
        </div>
      </motion.div>
    </section>
  );
}
