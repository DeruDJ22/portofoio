"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const ROLES = [
  "Software_Engineer",
  "Full_Stack_Dev",
  "Security_Enthusiast",
  "Laravel_Dev",
];

export default function Hero() {
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);
  const [roleIdx, setRoleIdx] = useState(0);
  const [speed, setSpeed] = useState(130);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const full = ROLES[roleIdx % ROLES.length];
    const timer = setTimeout(() => {
      if (!deleting) {
        setText(full.substring(0, text.length + 1));
        setSpeed(120);
        if (text === full) {
          setTimeout(() => setDeleting(true), 2200);
        }
      } else {
        setText(full.substring(0, text.length - 1));
        setSpeed(50);
        if (text === "") {
          setDeleting(false);
          setRoleIdx((r) => r + 1);
        }
      }
    }, speed);
    return () => clearTimeout(timer);
  }, [text, deleting, roleIdx, speed]);

  // Subtle mouse-follow glow effect
  useEffect(() => {
    const handleMove = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMove);
    return () => window.removeEventListener("mousemove", handleMove);
  }, []);

  return (
    <section className="relative flex flex-col justify-center min-h-screen max-w-6xl mx-auto pt-20 overflow-hidden font-mono">
      {/* Animated grid bg */}
      <div
        className="absolute inset-0 -z-10 pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0,255,65,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(0,255,65,0.03) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
          maskImage:
            "radial-gradient(ellipse 80% 80% at 50% 50%, #000 20%, transparent 100%)",
        }}
      />

      {/* Mouse-follow glow (desktop only) */}
      <div
        className="hidden md:block absolute -z-5 pointer-events-none transition-opacity duration-500"
        style={{
          left: mousePos.x - 200,
          top: mousePos.y - 200,
          width: 400,
          height: 400,
          background:
            "radial-gradient(circle, rgba(0,255,65,0.06) 0%, transparent 70%)",
          filter: "blur(40px)",
        }}
      />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.1 }}
        className="z-10 space-y-6"
      >
        {/* Status bar */}
        <motion.div
          initial={{ opacity: 0, width: 0 }}
          animate={{ opacity: 1, width: "auto" }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="flex items-center gap-3 text-xs tracking-widest text-[#a1c1a1] overflow-hidden"
        >
          <span
            className="w-2 h-2 rounded-full bg-[#00ff41] status-pulse inline-block shrink-0"
            style={{ boxShadow: "0 0 8px #00ff41" }}
          />
          <span className="whitespace-nowrap">
            SYSTEM_READY :: SECURE_CONNECTION_ESTABLISHED
          </span>
        </motion.div>

        {/* Whoami line */}
        <div className="flex flex-col gap-1">
          <motion.p
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="text-[#a1c1a1] text-base"
          >
            root@localhost:~# whoami
          </motion.p>
          <h1
            className="text-white text-5xl md:text-7xl lg:text-8xl font-black tracking-tight uppercase leading-none"
            style={{ fontFamily: "var(--font-display)" }}
          >
            <motion.span
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="inline-block"
            >
              Deru{" "}
            </motion.span>
            <motion.span
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6, duration: 0.5 }}
              className="text-[#00ff41] glitch inline-block"
              data-text="Khairan"
              style={{ textShadow: "0 0 30px rgba(0,255,65,0.4)" }}
            >
              Khairan
            </motion.span>
          </h1>
          <motion.h1
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.7, duration: 0.5 }}
            className="text-[#003d0f] text-5xl md:text-7xl lg:text-8xl font-black tracking-tight uppercase leading-none"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Djuharianto
          </motion.h1>
        </div>

        {/* Role typewriter */}
        <div className="mt-4">
          <p className="text-[#a1c1a1] text-base mb-2">
            root@localhost:~# execute ./roles.sh
          </p>
          <div className="flex items-center gap-2 flex-wrap">
            <span className="text-[#ffb700]">❯</span>
            <span className="text-[#00e5ff] text-xl md:text-3xl font-bold tracking-widest uppercase border border-[#00e5ff]/20 bg-[#00e5ff]/5 px-3 py-1 min-w-[1ch]">
              {text}
            </span>
            <span
              className="text-[#00ff41] text-2xl cursor-blink"
              style={{ textShadow: "0 0 10px #00ff41" }}
            >
              █
            </span>
          </div>
        </div>

        {/* Bio block */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.8, duration: 0.5 }}
          className="max-w-2xl text-[#a1c1a1] text-base leading-relaxed border-l-2 border-[#00ff41]/40 pl-5 py-3 mt-8 relative group"
        >
          {/* Hover glow on border */}
          <span className="absolute left-0 top-0 w-[2px] h-0 bg-[#00ff41] group-hover:h-full transition-all duration-700" />
          <p>
            &gt; Initializing profile...
            <br />
            &gt;{" "}
            <span className="text-[#00cc33]">
              Software Engineering Student
            </span>{" "}
            at <span className="text-white">Telkom University</span>.
            <br />
            &gt; Specializing in <span className="text-[#ffb700]">
              Backend
            </span>{" "}
            && <span className="text-[#ffb700]">Frontend</span>
            <br />
            &gt; Status:{" "}
            <span className="text-[#00ff41] cursor-blink">
              available_for_hire █
            </span>
          </p>
        </motion.div>

        {/* CTA buttons */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.0 }}
          className="flex gap-4 flex-wrap pt-4"
        >
          <a
            href="#projects"
            className="inline-flex items-center gap-2 px-6 py-3 border border-[#00ff41] text-[#00ff41] text-sm uppercase tracking-widest hover:bg-[#00ff41] hover:text-black transition-all relative overflow-hidden group"
            style={{ boxShadow: "0 0 12px rgba(0,255,65,0.2)" }}
          >
            <span className="absolute inset-0 bg-[#00ff41]/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
            <span className="relative z-10">[ ./view_projects.sh ]</span>
          </a>
          <a
            href="mailto:derukhdj22@gmail.com"
            className="inline-flex items-center gap-2 px-6 py-3 border border-[#003d0f] text-[#a1c1a1] text-sm uppercase tracking-widest hover:border-[#00ff41]/40 hover:text-[#00cc33] transition-all relative overflow-hidden group"
          >
            <span className="absolute inset-0 bg-[#00ff41]/5 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
            <span className="relative z-10">ssh contact@deru</span>
          </a>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <span className="text-[#003d0f] text-[10px] tracking-widest uppercase">scroll</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            className="w-4 h-7 border border-[#003d0f] rounded-full flex justify-center pt-1"
          >
            <div className="w-1 h-1.5 bg-[#00ff41]/50 rounded-full" />
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}
