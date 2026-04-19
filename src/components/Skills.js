"use client";
import { motion } from "framer-motion";

const skillsData = [
  { label: "HTML5 & CSS3", level: 85, category: "Frontend" },
  { label: "JavaScript / ES6+", level: 75, category: "Frontend" },
  { label: "React & Next.js", level: 65, category: "Frontend" },
  { label: "Tailwind CSS", level: 80, category: "Frontend" },
  { label: "PHP & Laravel", level: 70, category: "Backend" },
  { label: "Java (OOP)", level: 60, category: "Backend" },
  { label: "C++", level: 45, category: "Algorithm" },
  { label: "Go (Golang)", level: 30, category: "Backend" },
];

export default function Skills() {
  return (
    <section id="skills" className="max-w-5xl mx-auto py-24 px-6 relative">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
      >
        <div className="flex items-center mb-16">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-200 flex items-center whitespace-nowrap">
            <span className="text-emerald-400 font-mono mr-3 text-lg md:text-xl font-normal">
              02.
            </span>
            Technical Arsenal
          </h2>
          <div className="ml-6 h-px bg-slate-700 grow max-w-sm hidden sm:block"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-x-16 gap-y-10">
          {skillsData.map((skill, idx) => (
            <SkillBar key={idx} skill={skill} index={idx} />
          ))}
        </div>
      </motion.div>

      {/* Decorative Blur */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 -translate-x-1/2 w-100 h-100 bg-indigo-500/10 rounded-full blur-[100px] -z-10 pointer-events-none"></div>
    </section>
  );
}

function SkillBar({ skill, index }) {
  return (
    <div className="w-full group">
      <div className="flex justify-between items-end mb-2">
        <div>
          <span className="text-slate-300 font-mono text-sm block">
            {skill.label}
          </span>
          <span className="text-slate-500 text-xs font-mono lowercase">
            {skill.category}
          </span>
        </div>
        <span className="text-emerald-400 font-mono text-sm opacity-0 group-hover:opacity-100 transition-opacity">
          {skill.level}%
        </span>
      </div>
      <div className="w-full bg-[#112240] h-1.5 rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${skill.level}%` }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 1, delay: index * 0.1, ease: "easeOut" }}
          className="bg-emerald-400 h-full rounded-full shadow-[0_0_10px_rgba(52,211,153,0.5)]"
        ></motion.div>
      </div>
    </div>
  );
}
