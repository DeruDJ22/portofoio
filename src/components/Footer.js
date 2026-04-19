"use client";
import { Mail } from "lucide-react";
import { Github, Linkedin, Twitter } from "./Icons";

export default function Footer() {
  return (
    <footer className="py-8 flex flex-col items-center justify-center text-center">
      {/* Mobile Social Links (Desktop has them elsewhere if needed, but good to have here too) */}
      <div className="flex gap-6 mb-6 md:hidden">
        <a
          href="#"
          className="text-slate-400 hover:text-emerald-400 transition-colors"
        >
          <Github size={20} />
        </a>
        <a
          href="#"
          className="text-slate-400 hover:text-emerald-400 transition-colors"
        >
          <Linkedin size={20} />
        </a>
        <a
          href="#"
          className="text-slate-400 hover:text-emerald-400 transition-colors"
        >
          <Mail size={20} />
        </a>
        <a
          href="#"
          className="text-slate-400 hover:text-emerald-400 transition-colors"
        >
          <Twitter size={20} />
        </a>
      </div>

      <div className="font-mono text-sm text-slate-500 hover:text-emerald-400 transition-colors cursor-pointer group">
        <a
          href="https://github.com/DeruDJ22"
          target="_blank"
          rel="noopener noreferrer"
        >
          <p className="mb-2">Designed & Built by</p>
          <p className="group-hover:text-emerald-400 text-slate-400">
            Deru Khairan Djuharianto
          </p>
        </a>
      </div>
    </footer>
  );
}
