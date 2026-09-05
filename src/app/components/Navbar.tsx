"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Menu,
  X,
  ArrowUpRight,
  Home,
  User,
  Code2,
  Briefcase,
  Mail,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navItems = [
  { name: "Home", href: "#top", icon: Home },
  { name: "About", href: "#about", icon: User },
  { name: "Skills", href: "#skills", icon: Code2 },
  { name: "Projects", href: "#projects", icon: Briefcase },
  { name: "Contact", href: "#contact", icon: Mail },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="fixed left-0 top-0 z-50 w-full">
      <nav className="border-b border-white/10 bg-black/70 shadow-2xl backdrop-blur-xl">
        {/* Main navbar container */}
        <div className="mx-auto flex h-[72px] w-full max-w-7xl items-center justify-between px-8 sm:px-10 lg:px-14 xl:px-16">

          {/* ================= LOGO ================= */}
          <Link
            href="#top"
            className="text-xl font-bold tracking-tight text-white transition hover:text-cyan-400"
          >
            P<span className="text-cyan-400">.</span>
          </Link>

          {/* ================= DESKTOP MENU ================= */}
          <div className="hidden items-center gap-1 md:flex">
            {navItems.map((item) => {
              const Icon = item.icon;

              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className="flex items-center gap-1.5 rounded-xl px-4 py-2 text-sm text-gray-300 transition-all duration-300 hover:bg-white/10 hover:text-white"
                >
                  <Icon size={15} />
                  {item.name}
                </Link>
              );
            })}

            {/* Hire Me */}
            <Link
              href="#contact"
              className="ml-4 flex items-center gap-1.5 rounded-xl bg-white px-5 py-2.5 text-sm font-medium text-black transition-all duration-300 hover:bg-cyan-400"
            >
              Hire Me
              <ArrowUpRight size={16} />
            </Link>
          </div>

          {/* ================= MOBILE BUTTON ================= */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="rounded-lg p-2 text-white transition hover:bg-white/10 md:hidden"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* ================= MOBILE MENU ================= */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="border-b border-white/10 bg-black/95 px-8 py-4 shadow-xl backdrop-blur-xl md:hidden"
          >
            <div className="mx-auto max-w-7xl">
              {navItems.map((item) => {
                const Icon = item.icon;

                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    onClick={() => setMobileOpen(false)}
                    className="flex items-center gap-3 rounded-xl px-4 py-3 text-gray-300 transition-all duration-300 hover:bg-white/10 hover:text-white"
                  >
                    <Icon size={17} />
                    {item.name}
                  </Link>
                );
              })}

              {/* Mobile Hire Me */}
              <Link
                href="#contact"
                onClick={() => setMobileOpen(false)}
                className="mt-3 flex items-center justify-center gap-2 rounded-xl bg-white px-4 py-3 font-medium text-black transition hover:bg-cyan-400"
              >
                Hire Me
                <ArrowUpRight size={17} />
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}