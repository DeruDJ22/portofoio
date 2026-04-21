"use client";
import { Mail } from "lucide-react";
import { Github, Linkedin, Twitter } from "./Icons";

const SOCIALS = [
  { href: "https://github.com/DeruDJ22", icon: Github, label: "GitHub" },
  { href: "#", icon: Linkedin, label: "LinkedIn" },
  { href: "mailto:derukhdj22@gmail.com", icon: Mail, label: "Email" },
  { href: "#", icon: Twitter, label: "Twitter" },
];

export default function Footer() {
  return (
    <footer className="border-t border-[#003d0f] bg-[#020d02] font-mono">
      {/* Contact terminal */}
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 gap-12 items-start mb-12">
          {/* Left: CTA */}
          <div>
            <p className="text-[#ffb700] text-xs tracking-widest mb-3">[ 04. CONTACT ]</p>
            <h2
              className="text-2xl md:text-3xl font-black text-white uppercase tracking-widest mb-4"
              style={{ fontFamily: "var(--font-display)" }}
            >
              GET_IN_TOUCH
            </h2>
            <p className="text-[#1a4d1a] text-sm leading-relaxed max-w-sm">
              Open to freelance projects, collaborations, and full-time opportunities.
              Best way to reach me is via email.
            </p>
            <a
              href="mailto:derukhdj22@gmail.com"
              className="mt-6 inline-flex items-center gap-2 px-6 py-3 border border-[#00ff41]/60 text-[#00ff41] text-sm uppercase tracking-widest hover:bg-[#00ff41] hover:text-black transition-all"
              style={{ boxShadow: "0 0 10px rgba(0,255,65,0.15)" }}
            >
              <Mail size={14} /> ./send_message.sh
            </a>
          </div>

          {/* Right: terminal status */}
          <div className="border border-[#003d0f] bg-[#050f05] hover:border-[#00ff41]/30 transition-all">
            <div className="flex items-center gap-2 px-4 py-2 border-b border-[#003d0f]">
              <span className="w-2 h-2 bg-[#ff3b30]" />
              <span className="w-2 h-2 bg-[#ffb700]" />
              <span className="w-2 h-2 bg-[#00ff41]" />
              <span className="ml-3 text-[10px] text-[#1a4d1a] tracking-widest uppercase">ssh_connect.sh</span>
            </div>
            <div className="px-5 py-4 text-sm space-y-2 text-[#1a4d1a]">
              <div className="flex gap-3"><span className="text-[#ffb700]">❯</span><span>./reach_out.sh --mode=hire</span></div>
              <div className="pl-6 space-y-1">
                <p><span className="text-[#00ff41]">✔</span> Connection established.</p>
                <p><span className="text-[#00ff41]">✔</span> Status: <span className="text-[#00ff41]">AVAILABLE</span></p>
                <p><span className="text-[#00ff41]">✔</span> Response time: &lt; 24 hours</p>
                <p className="italic text-[#003d0f]"># Accepting: freelance · collab · full-time</p>
              </div>
              <div className="flex gap-3 pt-1">
                <span className="text-[#ffb700]">❯</span>
                <span className="cursor-blink text-[#00ff41]">█</span>
              </div>
            </div>
          </div>
        </div>

        {/* Social links */}
        <div className="flex gap-4 mb-8 md:hidden">
          {SOCIALS.map((s, i) => (
            <a key={i} href={s.href} className="text-[#1a4d1a] hover:text-[#00ff41] transition-colors">
              <s.icon size={20} />
            </a>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="pt-6 border-t border-[#003d0f] flex flex-col sm:flex-row justify-between items-center gap-3 text-[#1a4d1a] text-xs tracking-widest">
          <p>&lt; / system.exit() &gt;</p>
          <a
            href="https://github.com/DeruDJ22"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#00ff41] transition-colors text-center"
          >
            [ Compiled by Deru Khairan Djuharianto ]
          </a>
          <p>© 2025 :: ALL RIGHTS RESERVED</p>
        </div>
      </div>
    </footer>
  );
}
