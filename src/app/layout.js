import { Share_Tech_Mono, Orbitron } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next";

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
  description: "Full-Stack Developer & Security Enthusiast. Telkom University.",
  metadataBase: new URL("https://portofoio-zeta.vercel.app"),
  openGraph: {
    title: "Deru Khairan Djuharianto | Portfolio",
    description: "Full-Stack Developer & Security Enthusiast. Telkom University.",
    url: "https://portofoio-zeta.vercel.app",
    siteName: "Deru Khairan Djuharianto Portfolio",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Deru Khairan Djuharianto | Portfolio",
    description: "Full-Stack Developer & Security Enthusiast. Telkom University.",
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${shareTechMono.variable} ${orbitron.variable}`}
    >
      <body className="font-mono bg-[#020d02] text-[#00ff41] antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  );
}
