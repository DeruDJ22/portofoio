"use client";
import { useEffect, useRef } from "react";

export default function MatrixRain() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const ctx = canvas.getContext("2d");

    // Mobile detection: touch screen or narrow viewport
    const isMobile =
      window.matchMedia("(pointer: coarse)").matches ||
      window.innerWidth < 768;

    const CHARS = "アイウエオカキクケコサシスセソタチツテトナニヌネノ01アィウェォ10アイ01";
    const COL_W = isMobile ? 32 : 16;
    const FRAME_SKIP = isMobile ? 2 : 1; // draw every Nth frame on mobile
    let drops = [];
    let frame = 0;
    let rafId;
    let visible = !document.hidden;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const init = () => {
      const cols = Math.floor(canvas.width / COL_W);
      drops = Array(cols).fill(1);
    };

    const handleResize = () => {
      resize();
      init();
    };

    const draw = () => {
      if (!visible) {
        rafId = requestAnimationFrame(draw);
        return;
      }

      frame++;
      if (frame % FRAME_SKIP !== 0) {
        rafId = requestAnimationFrame(draw);
        return;
      }

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

      rafId = requestAnimationFrame(draw);
    };

    const onVisibility = () => {
      visible = !document.hidden;
    };

    // Initial setup
    resize();
    init();
    draw();

    // Event listeners
    window.addEventListener("resize", handleResize);
    document.addEventListener("visibilitychange", onVisibility);

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener("resize", handleResize);
      document.removeEventListener("visibilitychange", onVisibility);
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