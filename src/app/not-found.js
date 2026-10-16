import Link from "next/link";
import MatrixRain from "../components/MatrixRain";

export default function NotFound() {
  return (
    <main className="bg-transparent min-h-screen relative overflow-hidden flex flex-col items-center justify-center text-center">
      <MatrixRain />

      <div className="relative z-10 px-6 font-mono">
        <h1 className="text-2xl md:text-3xl font-bold text-white tracking-widest mb-4">
          404
        </h1>
        <p className="text-[#a1c1a1] text-base leading-relaxed max-w-md mb-6">
          Page not found.
        </p>
        <Link
          href="/"
          className="inline-flex items-center gap-2 px-6 py-3 border border-[#00ff41]/60 text-[#00ff41] text-sm uppercase tracking-widest hover:bg-[#00ff41] hover:text-black transition-all relative overflow-hidden group"
          style={{ boxShadow: "0 0 10px rgba(0,255,65,0.15)" }}
        >
          <span className="absolute inset-0 bg-[#00ff41]/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
          <span className="relative z-10 flex items-center gap-2">./return_home.sh</span>
        </Link>
      </div>
    </main>
  );
}
