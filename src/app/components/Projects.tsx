"use client";

import { motion } from "framer-motion";
import { ExternalLink, GitBranch, Layers3 } from "lucide-react";

const PROJECTS = [
  {
    number: "01",
    title: "My Portfolio Website",
    category: "Full Stack Development",
    description:
      "A modern portfolio showcasing my skills, experience, and full-stack projects. Built with a focus on clean design, performance, and responsive user experiences.",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion","Node.js","MongoDB"],
    liveUrl: "https://pranjali-portfolio-liart.vercel.app/",
    githubUrl: "https://github.com/pranjalimaske-arc",
  },
  {
    number: "02",
    title: "HireAI - AI Recruitment & ATS",
    category: "Full Stack Development",
    description:
      "AI-powered job portal with resume screening, candidate-job matching, ATS scoring, job applications, and recruiter dashboard.",
    technologies: ["Next.js", "TypeScript", "Node.js", "Express.js", "PostgreSQL", "Prisma", "AI API"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    number: "03",
    title: "BizFlow – Business Management & Billing",
    category: "Full Stack Development",
    description:
      "Full-stack business platform for inventory, sales, purchases, customers, suppliers, GST invoices, and analytics.",
    technologies: ["Next.js", "TypeScript", "Node.js", "Express.js", "PostgreSQL", "Prisma"],
    liveUrl: "#",
    githubUrl: "#",
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="relative  z-10 overflow-hidden  px-12 py-24 text-[#C9D1D9] sm:px-16 md:px-24 lg:px-32 xl:px-44 2xl:px-56"
    >
      {/* Background Glow */}
      <div className="pointer-events-none absolute -top-40 left-1/2 h-[450px] w-[650px] -translate-x-1/2 rounded-full bg-[#38BDF8]/10 blur-[130px]" />

      <div className="relative mx-auto max-w-[1450px]">
        {/* Header */}
        <div className="mb-14">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-3 text-xs font-medium tracking-[0.25em] text-[#38BDF8]"
          >
            WHAT I&apos;VE BUILT
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
              Projects
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mt-4 max-w-xl text-sm leading-6 text-[#8B949E]"
          >
            A selection of projects built with modern technologies and a
            focus on clean design, performance and usability.
          </motion.p>
        </div>

        {/* Exactly 3 Horizontal Cards */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {PROJECTS.map((project, index) => (
            <motion.article
              key={project.number}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
              }}
              whileHover={{ y: -6 }}
              className="group relative flex min-h-[390px] flex-col overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-sm transition-all duration-300 hover:border-[#38BDF8]/40 hover:shadow-xl hover:shadow-[#38BDF8]/5"
            >
              {/* Hover Glow */}
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-[#38BDF8]/10 via-transparent to-[#3B82F6]/5 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

              {/* Number */}
              <div className="relative flex items-center justify-between">
                <span className="text-sm font-semibold tracking-widest text-[#38BDF8]">
                  {project.number}
                </span>

                <Layers3
                  size={20}
                  className="text-[#38BDF8] opacity-70 transition-transform duration-300 group-hover:rotate-6"
                />
              </div>

              {/* Project Icon */}
              <div className="relative mt-8 flex h-12 w-12 items-center justify-center rounded-xl bg-[#38BDF8]/10 text-[#38BDF8] transition-all duration-300 group-hover:bg-gradient-to-br group-hover:from-[#38BDF8] group-hover:to-[#3B82F6] group-hover:text-white">
                <Layers3 size={22} />
              </div>

              {/* Content */}
              <div className="relative mt-6">
                <p className="mb-2 text-xs font-medium uppercase tracking-wider text-[#38BDF8]">
                  {project.category}
                </p>

                <h3 className="text-xl font-bold text-white">
                  {project.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-[#8B949E]">
                  {project.description}
                </p>
              </div>

              {/* Technologies */}
              <div className="relative mt-6 flex flex-wrap gap-2">
                {project.technologies.map((technology) => (
                  <span
                    key={technology}
                    className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 text-[11px] text-[#C9D1D9] transition-colors hover:border-[#38BDF8]/30 hover:text-[#38BDF8]"
                  >
                    {technology}
                  </span>
                ))}
              </div>

              {/* Links */}
              <div className="relative mt-auto flex items-center gap-5 pt-7">
                <a
                  href={project.liveUrl}
                  className="inline-flex items-center gap-2 text-sm font-medium text-white transition-colors hover:text-[#38BDF8]"
                >
                  Live Demo
                  <ExternalLink size={15} />
                </a>

                <a
                  href={project.githubUrl}
                  className="inline-flex items-center gap-2 text-sm font-medium text-[#8B949E] transition-colors hover:text-white"
                >
                  GitHub
                  <GitBranch size={15} />
                </a>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}