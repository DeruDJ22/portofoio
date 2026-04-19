"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function Hero() {
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);

  const roles = [
    "Software Engineer",
    "Full-stack Developer",
    "Security Enthusiast",
  ];

  useEffect(() => {
    const handleTyping = () => {
      const i = loopNum % roles.length;
      const fullText = roles[i];

      setText(
        isDeleting
          ? fullText.substring(0, text.length - 1)
          : fullText.substring(0, text.length + 1),
      );

      setTypingSpeed(isDeleting ? 50 : 120);

      if (!isDeleting && text === fullText) {
        setTimeout(() => setIsDeleting(true), 2000);
      } else if (isDeleting && text === "") {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [text, isDeleting, loopNum, typingSpeed]);

  return (
    <section className="relative flex flex-col justify-center min-h-screen max-w-6xl mx-auto px-6 pt-20">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="z-10 space-y-6"
      >
        <p className="text-emerald-400 font-mono tracking-widest text-sm md:text-base">
          Hi, my name is
        </p>

        <h1 className="text-slate-100 text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight">
          Deru Khairan Djuharianto.
        </h1>

        <h2 className="text-slate-400 text-3xl md:text-5xl lg:text-6xl font-bold flex flex-wrap items-center mt-2 h-auto min-h-20">
          I'm a{" "}
          <span className="text-white ml-2 border-r-4 border-emerald-400 pr-2 min-w-5">
            {text}
          </span>
        </h2>

        <p className="max-w-2xl text-slate-400 text-lg md:text-xl leading-relaxed mt-6">
          I'm a{" "}
          <span className="text-emerald-400">Software Engineering Student</span>{" "}
          at Telkom University. Focused on building high-performance
          applications, intuitive digital experiences, and secure full-stack
          systems.
        </p>

        <div className="pt-10">
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="#projects"
            className="inline-block px-8 py-4 border-2 border-emerald-400 text-emerald-400 font-mono rounded hover:bg-emerald-400/10 transition-all font-medium"
          >
            Check out my work!
          </motion.a>
        </div>
      </motion.div>

      {/* Decorative Blob */}
      <div className="absolute top-1/2 right-0 -translate-y-1/2 translate-x-1/4 w-125 h-125 bg-emerald-500/10 rounded-full blur-[120px] -z-10 pointer-events-none"></div>
    </section>
  );
}
