import { Share_Tech_Mono, Orbitron } from "next/font/google";
import "./globals.css";

const shareTechMono = Share_Tech_Mono({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-mono",
});

const orbitron = Orbitron({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["400", "700", "900"],
});

export const metadata = {
  title: "Deru Khairan Djuharianto | Portfolio",
  description:
    "Full-Stack Developer & Security Enthusiast. Telkom University.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${shareTechMono.variable} ${orbitron.variable}`}>
      <body className="font-mono bg-[#020d02] text-[#00ff41] antialiased">
        {children}
      </body>
    </html>
  );
}
