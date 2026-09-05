"use client";

import { useEffect, useRef } from "react";

/**
 * Site-wide animated background.
 * - Soft drifting particles connected by faint lines (constellation look)
 * - Particles react to the cursor: they're pulled slightly toward it and
 *   nearby lines light up, so the whole page feels alive without being loud
 * - Fixed behind all content, pointer-events disabled, respects reduced motion
 *
 * Usage: drop <BackgroundAnimation /> once, near the top of app/layout.tsx,
 * as a sibling of {children} (not wrapping it). It paints itself as a fixed
 * full-screen canvas at z-0, so give your page sections a relative z-10 (most
 * already do if they use "relative" like the Hero/About/Skills sections).
 */

type Particle = {
  x: number;
  y: number;
  vx: number;
  vy: number;
  r: number;
};

const PARTICLE_COLOR = "56, 189, 248"; // #38BDF8 as rgb
const LINK_DISTANCE = 140;
const CURSOR_RADIUS = 180;
const PARTICLE_COUNT_DIVISOR = 16000; // lower = more particles

export default function BackgroundAnimation() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    let width = 0;
    let height = 0;
    let dpr = Math.min(window.devicePixelRatio || 1, 2);
    let particles: Particle[] = [];
    let animationFrame = 0;
    const mouse = { x: -9999, y: -9999 };

    function resize() {
      width = window.innerWidth;
      height = window.innerHeight;
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas!.width = width * dpr;
      canvas!.height = height * dpr;
      canvas!.style.width = `${width}px`;
      canvas!.style.height = `${height}px`;
      ctx!.setTransform(dpr, 0, 0, dpr, 0, 0);

      const count = Math.min(
        90,
        Math.max(30, Math.floor((width * height) / PARTICLE_COUNT_DIVISOR))
      );
      particles = Array.from({ length: count }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.25,
        vy: (Math.random() - 0.5) * 0.25,
        r: Math.random() * 1.4 + 0.6,
      }));
    }

    function handlePointerMove(e: PointerEvent) {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    }

    function handlePointerLeave() {
      mouse.x = -9999;
      mouse.y = -9999;
    }

    function draw() {
      ctx!.clearRect(0, 0, width, height);

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];

        // gentle drift
        p.x += p.vx;
        p.y += p.vy;

        // wrap around edges
        if (p.x < -20) p.x = width + 20;
        if (p.x > width + 20) p.x = -20;
        if (p.y < -20) p.y = height + 20;
        if (p.y > height + 20) p.y = -20;

        // subtle pull toward cursor
        const dxMouse = mouse.x - p.x;
        const dyMouse = mouse.y - p.y;
        const distMouse = Math.hypot(dxMouse, dyMouse);
        if (distMouse < CURSOR_RADIUS) {
          const force = (1 - distMouse / CURSOR_RADIUS) * 0.02;
          p.x += dxMouse * force;
          p.y += dyMouse * force;
        }

        // connecting lines
        for (let j = i + 1; j < particles.length; j++) {
          const q = particles[j];
          const dx = p.x - q.x;
          const dy = p.y - q.y;
          const dist = Math.hypot(dx, dy);
          if (dist < LINK_DISTANCE) {
            const opacity = (1 - dist / LINK_DISTANCE) * 0.15;
            ctx!.strokeStyle = `rgba(${PARTICLE_COLOR}, ${opacity})`;
            ctx!.lineWidth = 1;
            ctx!.beginPath();
            ctx!.moveTo(p.x, p.y);
            ctx!.lineTo(q.x, q.y);
            ctx!.stroke();
          }
        }

        // steady particle glow (no extra brightening near cursor)
        ctx!.fillStyle = `rgba(${PARTICLE_COLOR}, 0.45)`;
        ctx!.beginPath();
        ctx!.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx!.fill();
      }

      animationFrame = requestAnimationFrame(draw);
    }

    resize();
    window.addEventListener("resize", resize);
    window.addEventListener("pointermove", handlePointerMove);
    window.addEventListener("pointerleave", handlePointerLeave);

    if (prefersReducedMotion) {
      // draw a single static frame, no rAF loop
      draw();
      cancelAnimationFrame(animationFrame);
    } else {
      draw();
    }

    return () => {
      window.removeEventListener("resize", resize);
      window.removeEventListener("pointermove", handlePointerMove);
      window.removeEventListener("pointerleave", handlePointerLeave);
      cancelAnimationFrame(animationFrame);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-0 h-full w-full bg-[#0D1117]"
    />
  );
}
