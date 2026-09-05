"use client";

import { motion } from "framer-motion";
import {
  Code2,
  Server,
  Database,
  Palette,
  GitBranch,
  Wrench,
} from "lucide-react";

const SKILL_GROUPS = [
  {
    title: "Frontend Development",
    description:
      "Building responsive and interactive interfaces with modern frontend technologies.",
    icon: Code2,
    tags: [
      "HTML5",
      "CSS3",
      "JavaScript",
      "TypeScript",
      "React",
      "Next.js",
      "Tailwind CSS",
    ],
  },
  {
    title: "Backend Development",
    description:
      "Developing reliable APIs and server-side applications for modern web products.",
    icon: Server,
    tags: [
      "Node.js",
      "Express.js",
      "REST API",
      "API Integration",
      "Authentication",
    ],
  },
  {
    title: "Database",
    description:
      "Creating structured, reliable and scalable data systems.",
    icon: Database,
    tags: [
      "MongoDB",
      "MongoDB Atlas",
      "Database Design",
      "CRUD Operations",
    ],
  },
  {
    title: "UI & Design",
    description:
      "Creating clean, responsive and user-friendly interfaces.",
    icon: Palette,
    tags: [
      "Responsive Design",
      "Tailwind CSS",
      "UI Components",
      "Animations",
      "UX Principles",
    ],
    featured: true,
  },
  {
    title: "Version Control",
    description:
      "Managing source code and development workflows efficiently.",
    icon: GitBranch,
    tags: [
      "Git",
      "GitHub",
      "Branching",
      "Pull Requests",
      "Deployment",
    ],
  },
  {
    title: "Development Tools",
    description:
      "Modern tools for development, testing and deployment.",
    icon: Wrench,
    tags: [
      "VS Code",
      "npm",
      "Vercel",
      "Postman",
      "Chrome DevTools",
    ],
  },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="relative  z-10 overflow-hidden  px-12 py-24 text-[#C9D1D9] sm:px-16 md:px-24 lg:px-32 xl:px-44 2xl:px-56"
    >
      {/* Ambient glow */}
      <div className="pointer-events-none absolute -top-40 left-1/2 h-[450px] w-[650px] -translate-x-1/2 rounded-full bg-[#38BDF8]/10 blur-[130px]" />

      <div className="relative mx-auto max-w-[1450px]">
        {/* Header */}
        <div className="mb-12">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-3 text-xs font-medium tracking-[0.25em] text-[#38BDF8]"
          >
            WHAT I WORK WITH
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl"
          >
            My{" "}
            <span className="bg-gradient-to-r from-[#38BDF8] to-[#3B82F6] bg-clip-text text-transparent">
              Skills
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mt-4 max-w-xl text-sm leading-6 text-[#8B949E]"
          >
            
          </motion.p>
        </div>

        {/* Skill Cards */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {SKILL_GROUPS.map((group, index) => {
            const Icon = group.icon;

            return (
              <motion.div
                key={group.title}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.45,
                  delay: index * 0.05,
                }}
                whileHover={{ y: -3 }}
                className={`group relative overflow-hidden rounded-xl border bg-white/[0.03] px-7 py-7 backdrop-blur-sm transition-all duration-300 ${
                  group.featured
                    ? "border-[#38BDF8]/50 shadow-lg shadow-[#38BDF8]/5"
                    : "border-white/10 hover:border-[#38BDF8]/30"
                }`}
              >
                {/* Hover background */}
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-[#38BDF8]/5 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                {/* Top row */}
                <div className="relative flex items-start gap-4">
                  <div
                    className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-lg ${
                      group.featured
                        ? "bg-gradient-to-br from-[#38BDF8] to-[#3B82F6] text-white"
                        : "bg-[#38BDF8]/10 text-[#38BDF8]"
                    }`}
                  >
                    <Icon size={22} />
                  </div>

                  <div>
                    <h3 className="text-lg font-bold text-white">
                      {group.title}
                    </h3>

                    <p className="mt-1.5 text-sm leading-6 text-[#8B949E]">
                      {group.description}
                    </p>
                  </div>
                </div>

                {/* Tags */}
                <div className="relative mt-5 flex flex-wrap gap-2">
                  {group.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 text-xs text-[#C9D1D9] transition-colors hover:border-[#38BDF8]/30 hover:text-[#38BDF8]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}