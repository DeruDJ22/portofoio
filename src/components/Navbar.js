"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Menu, X, Mail } from "lucide-react";
import { Github, Linkedin } from "./Icons";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
  ];

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#0a192f]/80 backdrop-blur-md border-b border-emerald-400/10 shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="text-emerald-400 font-mono text-xl font-bold tracking-tighter"
        >
          <a href="#">D.K.</a>
        </motion.div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link, i) => (
            <motion.a
              key={i}
              href={link.href}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="text-slate-300 hover:text-emerald-400 font-mono text-sm transition-colors"
            >
              <span className="text-emerald-400 mr-1">0{i + 1}.</span>
              {link.name}
            </motion.a>
          ))}
          <motion.a
            href="mailto:derukhdj22@gmail.com"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="px-4 py-2 border border-emerald-400 text-emerald-400 text-sm font-mono rounded hover:bg-emerald-400/10 transition-colors"
          >
            Resume
          </motion.a>
        </nav>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="text-emerald-400 hover:text-emerald-300 focus:outline-none"
          >
            {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav Overlay */}
      {mobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden absolute top-20 left-0 w-full bg-[#112240] border-b border-emerald-400/20 shadow-xl py-6 flex flex-col items-center gap-6"
        >
          {navLinks.map((link, i) => (
            <a
              key={i}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="text-slate-300 hover:text-emerald-400 font-mono transition-colors"
            >
              <span className="text-emerald-400 mr-2">0{i + 1}.</span>
              {link.name}
            </a>
          ))}
          <a
            href="mailto:derukhdj22@gmail.com"
            className="px-6 py-2 border border-emerald-400 text-emerald-400 font-mono rounded hover:bg-emerald-400/10 transition-colors mt-2"
          >
            Resume
          </a>
          <div className="flex gap-6 mt-4 text-slate-400">
            <a href="#" className="hover:text-emerald-400">
              <Github size={20} />
            </a>
            <a href="#" className="hover:text-emerald-400">
              <Linkedin size={20} />
            </a>
            <a href="#" className="hover:text-emerald-400">
              <Mail size={20} />
            </a>
          </div>
        </motion.div>
      )}
    </header>
  );
}
