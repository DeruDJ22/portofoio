"use client";
import { useEffect, useRef } from "react";

export default function MatrixRain() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    const CHARS = "アイウエオカキクケコサシスセソタチツテトナニヌネノ01アィウェォ10アイ01";
    const COL_W = 16;
    let drops = [];

    const init = () => {
      const cols = Math.floor(canvas.width / COL_W);
      drops = Array(cols).fill(1);
    };
    init();
    window.addEventListener("resize", init);

    let animId;
    const draw = () => {
      ctx.fillStyle = "rgba(2, 13, 2, 0.05)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = "#00ff41";
      ctx.font = `13px 'Share Tech Mono', monospace`;

      drops.forEach((y, i) => {
        const ch = CHARS[Math.floor(Math.random() * CHARS.length)];
        ctx.fillText(ch, i * COL_W, y * COL_W);
        if (y * COL_W > canvas.height && Math.random() > 0.975) drops[i] = 0;
        drops[i]++;
      });
      animId = requestAnimationFrame(draw);
    };
    const interval = setInterval(draw, 50);

    return () => {
      clearInterval(interval);
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", resize);
      window.removeEventListener("resize", init);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      id="matrix-canvas"
      className="fixed top-0 left-0 w-full h-full pointer-events-none z-0"
      style={{ opacity: 0.04 }}
    />
  );
}
