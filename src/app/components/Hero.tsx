"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import { SiGithub } from "@icons-pack/react-simple-icons";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden px-6 pt-24 text-white"
    >
      <div className="relative mx-auto grid w-full max-w-6xl items-center gap-12 md:grid-cols-2">
        {/* ================= LEFT CONTENT ================= */}

        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Small heading */}
          <p className="mb-4 text-sm font-medium uppercase tracking-[0.3em] text-cyan-400">
            Hello, I&apos;m
          </p>

          {/* Main heading */}
          <h1 className="text-5xl font-bold leading-tight sm:text-6xl lg:text-7xl">
            Pranjali Maske

            <span className="block bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">
              Full Stack Developer
            </span>
          </h1>

          {/* Description */}
          <p className="mt-6 max-w-xl text-base leading-7 text-gray-400 sm:text-lg">
            I build modern, fast and scalable web applications using Next.js,
            React, TypeScript and modern backend technologies.
          </p>

          {/* ================= BUTTONS ================= */}

          <div className="mt-8 flex flex-wrap gap-4">
            {/* View Projects */}
            <Link
              href="#"
              className="group flex items-center gap-2 rounded-xl bg-white px-6 py-3 font-medium text-black transition-all duration-300 hover:bg-cyan-400"
            >
              View Projects

              <ArrowUpRight
                size={18}
                className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
              />
            </Link>

            {/* Download CV */}
            <a
              href="/resume.pdf"
              download
              className="rounded-xl border border-white/15 px-6 py-3 font-medium text-white transition-all duration-300 hover:border-cyan-400/40 hover:bg-white/10"
            >
              Download CV
            </a>
          </div>

          {/* ================= SOCIAL LINKS ================= */}

          <div className="mt-8 flex items-center gap-4">
            {/* GitHub */}
            <a
              href="https://github.com/pranjalimaske-arc"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 text-gray-400 transition-all duration-300 hover:border-cyan-400/50 hover:bg-cyan-400/10 hover:text-cyan-400"
            >
              <SiGithub size={20} />
            </a>

            {/* LinkedIn */}
            <a
              href="https://linkedin.com/in/pranjali-maske-b4492b35b"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 text-gray-400 transition-all duration-300 hover:border-cyan-400/50 hover:bg-cyan-400/10 hover:text-cyan-400"
            >
              <svg
                viewBox="0 0 24 24"
                fill="currentColor"
                className="h-5 w-5"
                aria-hidden="true"
              >
                <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29ZM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12ZM3.56 20.45h3.56V9H3.56v11.45Z" />
              </svg>
            </a>
          </div>
        </motion.div>

        {/* ================= RIGHT VISUAL ================= */}

        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="relative mx-auto h-[380px] w-[380px] sm:h-[460px] sm:w-[460px] lg:h-[520px] lg:w-[520px]"
        >
          {/* Outer rotating circle */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear",
            }}
            className="absolute inset-0 rounded-full border border-cyan-400/20"
          />

          {/* Second circle */}
          <motion.div
            animate={{ rotate: -360 }}
            transition={{
              duration: 30,
              repeat: Infinity,
              ease: "linear",
            }}
            className="absolute inset-5 rounded-full border border-purple-500/20 sm:inset-6 lg:inset-7"
          />

          {/* Photo Circle */}
          <div className="absolute inset-10 overflow-hidden rounded-full border border-white/10 bg-gradient-to-br from-cyan-400/20 to-purple-500/20 shadow-[0_0_100px_rgba(34,211,238,0.15)] sm:inset-12 lg:inset-14">
            <Image
              src="/profile.jpg"
              alt="Pranjali Maske"
              fill
              priority
              sizes="(max-width: 640px) 300px, (max-width: 1024px) 364px, 408px"
              className="object-cover object-center"
            />

            {/* Photo overlay */}
            <div className="pointer-events-none absolute inset-0 rounded-full bg-gradient-to-br from-cyan-400/10 via-transparent to-purple-500/20" />
          </div>

          {/* Next.js Card */}
          <motion.div
            animate={{ y: [0, -12, 0] }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute right-0 top-10 rounded-xl border border-white/10 bg-white/5 px-4 py-3 shadow-lg backdrop-blur-xl"
          >
            <span className="text-sm font-medium text-cyan-400">
              Next.js
            </span>
          </motion.div>

          {/* TypeScript Card */}
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{
              duration: 3.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute bottom-10 left-0 rounded-xl border border-white/10 bg-white/5 px-4 py-3 shadow-lg backdrop-blur-xl"
          >
            <span className="text-sm font-medium text-purple-400">
              TypeScript
            </span>
          </motion.div>
        </motion.div>
      </div>

      {/* ================= SCROLL INDICATOR ================= */}

      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-gray-500"
      >
        <ArrowDown size={20} />
      </motion.div>
    </section>
  );
}