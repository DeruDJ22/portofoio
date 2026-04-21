"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Mail } from "lucide-react";
import { Github, Linkedin } from "./Icons";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [time, setTime] = useState("");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const tick = () =>
      setTime(new Date().toLocaleTimeString("en-GB", { hour12: false }));
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  const links = [
    { num: "01", name: "About", href: "#about" },
    { num: "02", name: "Skills", href: "#skills" },
    { num: "03", name: "Projects", href: "#projects" },
  ];

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 font-mono ${
        scrolled
          ? "bg-[#020d02]/95 border-b border-[#00ff41]/30 backdrop-blur-sm shadow-[0_4px_30px_rgba(0,255,65,0.08)]"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 h-[68px] flex items-center justify-between">
        {/* Logo */}
        <motion.a
          href="#"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="font-[family-name:var(--font-display)] text-[#00ff41] text-lg font-black tracking-widest hover:text-white transition-colors"
          style={{ textShadow: "0 0 16px rgba(0,255,65,0.5)" }}
        >
          D.K<span className="cursor-blink">_</span>
        </motion.a>

        {/* Center clock */}
        <div className="hidden md:block text-[#003d0f] text-[11px] tracking-widest">
          {time} :: SYS_ONLINE
        </div>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-6">
          {links.map((l, i) => (
            <motion.a
              key={i}
              href={l.href}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="text-[#1a4d1a] hover:text-[#00ff41] text-sm transition-colors group flex items-center gap-1"
            >
              <span className="text-[#ffb700] text-[10px]">{l.num}.</span>
              {l.name.toLowerCase()}
            </motion.a>
          ))}
          <motion.a
            href="mailto:derukhdj22@gmail.com"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.4 }}
            className="px-4 py-2 border border-[#00ff41]/60 text-[#00ff41] text-xs tracking-widest hover:bg-[#00ff41] hover:text-black transition-all"
            style={{ boxShadow: "0 0 8px rgba(0,255,65,0.15)" }}
          >
            ./contact.sh
          </motion.a>
        </nav>

        {/* Mobile toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden text-[#00ff41] hover:text-white transition-colors"
        >
          {mobileOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="md:hidden absolute top-[68px] left-0 w-full bg-[#020d02]/98 border-b border-[#00ff41]/30 py-8 flex flex-col items-center gap-6"
          >
            {links.map((l, i) => (
              <a
                key={i}
                href={l.href}
                onClick={() => setMobileOpen(false)}
                className="text-[#1a4d1a] hover:text-[#00ff41] font-mono text-base transition-colors flex items-center gap-2"
              >
                <span className="text-[#ffb700] text-xs">{l.num}.</span>
                /{l.name.toLowerCase()}
              </a>
            ))}
            <a
              href="mailto:derukhdj22@gmail.com"
              className="mt-2 px-6 py-2 border border-[#00ff41]/60 text-[#00ff41] text-sm tracking-widest hover:bg-[#00ff41] hover:text-black transition-all"
            >
              ./contact.sh
            </a>
            <div className="flex gap-5 mt-2 text-[#1a4d1a]">
              <a href="https://github.com/DeruDJ22" className="hover:text-[#00ff41] transition-colors"><Github size={22} /></a>
              <a href="#" className="hover:text-[#00ff41] transition-colors"><Linkedin size={22} /></a>
              <a href="mailto:derukhdj22@gmail.com" className="hover:text-[#00ff41] transition-colors"><Mail size={22} /></a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
