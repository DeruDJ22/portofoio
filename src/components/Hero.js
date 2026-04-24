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

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.1 }}
        className="z-10 space-y-6"
      >
        {/* Status bar */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="flex items-center gap-3 text-xs tracking-widest text-[#a1c1a1]"
        >
          <span
            className="w-2 h-2 rounded-full bg-[#00ff41] status-pulse inline-block"
            style={{ boxShadow: "0 0 8px #00ff41" }}
          />
          SYSTEM_READY :: SECURE_CONNECTION_ESTABLISHED
        </motion.div>

        {/* Whoami line */}
        <div className="flex flex-col gap-1">
          <p className="text-[#a1c1a1] text-base">root@localhost:~# whoami</p>
          <h1
            className="text-white text-5xl md:text-7xl lg:text-8xl font-black tracking-tight uppercase leading-none"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Deru{" "}
            <span
              className="text-[#00ff41] glitch"
              data-text="Khairan"
              style={{ textShadow: "0 0 30px rgba(0,255,65,0.4)" }}
            >
              Khairan
            </span>
          </h1>
          <h1
            className="text-[#003d0f] text-5xl md:text-7xl lg:text-8xl font-black tracking-tight uppercase leading-none"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Djuharianto
          </h1>
        </div>

        {/* Role typewriter */}
        <div className="mt-4">
          <p className="text-[#a1c1a1] text-base mb-2">
            root@localhost:~# execute ./roles.sh
          </p>
          <div className="flex items-center gap-2 flex-wrap">
            <span className="text-[#ffb700]">❯</span>
            <span className="text-[#00e5ff] text-xl md:text-3xl font-bold tracking-widest uppercase border border-[#00e5ff]/20 bg-[#00e5ff]/5 px-3 py-1">
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
          transition={{ delay: 0.6, duration: 0.5 }}
          className="max-w-2xl text-[#a1c1a1] text-base leading-relaxed border-l-2 border-[#00ff41]/40 pl-5 py-3 bg-[#00ff41]/2 mt-8"
        >
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
          transition={{ delay: 0.8 }}
          className="flex gap-4 flex-wrap pt-4"
        >
          <a
            href="#projects"
            className="inline-flex items-center gap-2 px-6 py-3 border border-[#00ff41] text-[#00ff41] text-sm uppercase tracking-widest hover:bg-[#00ff41] hover:text-black transition-all"
            style={{ boxShadow: "0 0 12px rgba(0,255,65,0.2)" }}
          >
            [ ./view_projects.sh ]
          </a>
          <a
            href="mailto:derukhdj22@gmail.com"
            className="inline-flex items-center gap-2 px-6 py-3 border border-[#003d0f] text-[#a1c1a1] text-sm uppercase tracking-widest hover:border-[#00ff41]/40 hover:text-[#00cc33] transition-all"
          >
            ssh contact@deru
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}
