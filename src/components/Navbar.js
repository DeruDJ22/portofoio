"use client";
import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Mail, Download, Loader2 } from "lucide-react";
import { Github, Linkedin } from "./Icons";
import generatePortfolioPPT from "../utils/generatePortfolioPPT";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [time, setTime] = useState("");
  const [downloading, setDownloading] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Track active section
  useEffect(() => {
    const sections = ["about", "skills", "projects"];
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.3, rootMargin: "-80px 0px 0px 0px" }
    );

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const tick = () =>
      setTime(new Date().toLocaleTimeString("en-GB", { hour12: false }));
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  const handleDownloadPPT = useCallback(async () => {
    if (downloading) return;
    setDownloading(true);
    try {
      await generatePortfolioPPT();
    } catch (err) {
      console.error("PPT generation failed:", err);
    } finally {
      setDownloading(false);
    }
  }, [downloading]);

  const links = [
    { num: "01", name: "About", href: "#about" },
    { num: "02", name: "Skills", href: "#skills" },
    { num: "03", name: "Projects", href: "#projects" },
  ];

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-500 font-mono ${
        scrolled
          ? "bg-[#020d02]/95 border-b border-[#00ff41]/30 backdrop-blur-md shadow-[0_4px_30px_rgba(0,255,65,0.08)]"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 h-17 flex items-center justify-between">
        {/* Logo */}
        <motion.a
          href="#"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="font-display text-[#00ff41] text-lg font-black tracking-widest hover:text-white transition-colors relative group"
          style={{ textShadow: "0 0 16px rgba(0,255,65,0.5)" }}
        >
          <span className="relative z-10">D.K</span>
          <span className="cursor-blink">_</span>
          <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-[#00ff41] group-hover:w-full transition-all duration-300" />
        </motion.a>

        {/* Center clock */}
        <div className="hidden md:flex items-center gap-2 text-[#003d0f] text-[11px] tracking-widest">
          <span className="w-1.5 h-1.5 rounded-full bg-[#00ff41]/30 status-pulse inline-block" />
          {time} :: SYS_ONLINE
        </div>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-5">
          {links.map((l, i) => (
            <motion.a
              key={i}
              href={l.href}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className={`text-sm transition-all group flex items-center gap-1 relative py-1 ${
                activeSection === l.name.toLowerCase()
                  ? "text-[#00ff41]"
                  : "text-[#a1c1a1] hover:text-[#00ff41]"
              }`}
            >
              <span className="text-[#ffb700] text-[10px]">{l.num}.</span>
              {l.name.toLowerCase()}
              <span
                className={`absolute -bottom-0.5 left-0 h-[1px] bg-[#00ff41] transition-all duration-300 ${
                  activeSection === l.name.toLowerCase()
                    ? "w-full"
                    : "w-0 group-hover:w-full"
                }`}
              />
            </motion.a>
          ))}

          {/* Download PPT button */}
          <motion.button
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.35 }}
            onClick={handleDownloadPPT}
            disabled={downloading}
            className="px-4 py-2 border border-[#ffb700]/60 text-[#ffb700] text-xs tracking-widest hover:bg-[#ffb700] hover:text-black transition-all flex items-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed group relative overflow-hidden"
            style={{ boxShadow: "0 0 8px rgba(255,183,0,0.15)" }}
          >
            <span className="absolute inset-0 bg-[#ffb700]/5 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
            <span className="relative z-10 flex items-center gap-2">
              {downloading ? (
                <>
                  <Loader2 size={12} className="animate-spin" />
                  COMPILING...
                </>
              ) : (
                <>
                  <Download size={12} />
                  ./export.pptx
                </>
              )}
            </span>
          </motion.button>

          <motion.a
            href="mailto:derukhdj22@gmail.com"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.4 }}
            className="px-4 py-2 border border-[#00ff41]/60 text-[#00ff41] text-xs tracking-widest hover:bg-[#00ff41] hover:text-black transition-all relative overflow-hidden group"
            style={{ boxShadow: "0 0 8px rgba(0,255,65,0.15)" }}
          >
            <span className="absolute inset-0 bg-[#00ff41]/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
            <span className="relative z-10">./contact.sh</span>
          </motion.a>
        </nav>

        {/* Mobile toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden text-[#00ff41] hover:text-white transition-colors p-1"
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
            className="md:hidden absolute top-17 left-0 w-full bg-[#020d02]/98 border-b border-[#00ff41]/30 py-8 flex flex-col items-center gap-6 backdrop-blur-md"
          >
            {links.map((l, i) => (
              <a
                key={i}
                href={l.href}
                onClick={() => setMobileOpen(false)}
                className={`font-mono text-base transition-colors flex items-center gap-2 ${
                  activeSection === l.name.toLowerCase()
                    ? "text-[#00ff41]"
                    : "text-[#a1c1a1] hover:text-[#00ff41]"
                }`}
              >
                <span className="text-[#ffb700] text-xs">{l.num}.</span>
                /{l.name.toLowerCase()}
              </a>
            ))}

            {/* Mobile Download PPT button */}
            <button
              onClick={() => {
                setMobileOpen(false);
                handleDownloadPPT();
              }}
              disabled={downloading}
              className="px-6 py-2 border border-[#ffb700]/60 text-[#ffb700] text-sm tracking-widest hover:bg-[#ffb700] hover:text-black transition-all flex items-center gap-2 disabled:opacity-50"
            >
              {downloading ? (
                <>
                  <Loader2 size={14} className="animate-spin" />
                  COMPILING...
                </>
              ) : (
                <>
                  <Download size={14} />
                  ./export.pptx
                </>
              )}
            </button>

            <a
              href="mailto:derukhdj22@gmail.com"
              className="px-6 py-2 border border-[#00ff41]/60 text-[#00ff41] text-sm tracking-widest hover:bg-[#00ff41] hover:text-black transition-all"
            >
              ./contact.sh
            </a>
            <div className="flex gap-5 mt-2 text-[#a1c1a1]">
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
