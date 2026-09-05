"use client";

import { motion } from "framer-motion";
import { GraduationCap, Briefcase, Award } from "lucide-react";

const EDUCATION = [
  {
    degree: "B.E in Electronic & Telecommunication",
    place: "Sant Gadge Baba University, Amravati.",
    period: "2021 - 2025",
  },
  {
    degree: "HSC (XII) - General Science",
    place: "Brijlal Biyani Science College, Amravati.",
    period: "2019 - 2021",
  },
];

const CERTIFICATIONS = [
  { title: "Python Certification", org: "CCIT INSTITUTE | AMRAVATI" },
  { title: "Full Stack Developer Certification", org: "BIZONANCE INDIA PVT LTD | AMRAVATI" },
];

const EXPERIENCE = {
  company: "Bizonance India Pvt.Ltd (Amravati)",
  role: "Full Stack Developer Intern",
  period: "June 2026",
  points: [
    "Built responsive web interfaces with React & Next.js.",
    "Developed REST APIs and database integrations.",
  ],
};

export default function About() {
  return (
    <section
      id="about"
      className="relative z-10 overflow-hidden px-6 py-28 text-[#C9D1D9]"
    >
      <div className="relative mx-auto max-w-5xl">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-4 text-sm font-medium tracking-[0.2em] text-[#38BDF8]"
        >
          HELLO, MORE ABOUT
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-4xl font-extrabold leading-tight tracking-tight text-white sm:text-5xl"
        >
          Who I{" "}
          <span className="bg-gradient-to-r from-[#38BDF8] to-[#3B82F6] bg-clip-text text-transparent">
            Am
          </span>
        </motion.h2>

        <div className="grid gap-12 md:grid-cols-2">
          {/* LEFT: bio + experience card */}
          <div className="flex flex-col gap-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="flex flex-col gap-5 text-[16px] leading-8 text-[#8B949E]"
            >
              <p>
                I am <span className="font-semibold text-white">Pranjali Maske</span>,
                a Full Stack Developer who specializes in crafting
                high-performance digital solutions using{" "}
                <span className="text-[#E6EDF3]">Next.js, React.js, TypeScript, Node.js and PostgreSQL </span>.
              </p>
              <p>
                My journey includes professional training where I honed my
                skills in UI/UX and frontend development. I bridge the gap
                between complex backend logic and pixel-perfect user
                interfaces.
              </p>
            
            </motion.div>

            {/* Experience card — dark, matches hero card language */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.15 }}
              whileHover={{ y: -4 }}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] p-6 shadow-2xl shadow-black/40 backdrop-blur-sm transition-colors hover:border-[#38BDF8]/30"
            >
              <div className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-br from-[#38BDF8]/5 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
              <div className="relative flex items-start gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-[#38BDF8]/20 to-[#3B82F6]/20 text-[#38BDF8]">
                  <Briefcase size={20} />
                </div>
                <div>
                  <p className="font-semibold text-white">{EXPERIENCE.company}</p>
                  <p className="mb-3 text-sm text-[#38BDF8]">
                    {EXPERIENCE.role} · {EXPERIENCE.period}
                  </p>
                  <ul className="space-y-1.5 text-sm text-[#8B949E]">
                    {EXPERIENCE.points.map((point) => (
                      <li key={point} className="flex gap-2">
                        <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-[#38BDF8]" />
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          </div>

          {/* RIGHT: education + certifications */}
          <div className="flex flex-col gap-4">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="flex items-center gap-3"
            >
              
            </motion.div>

            <div className="flex flex-col gap-4">
              {EDUCATION.map((edu, i) => (
                <motion.div
                  key={edu.degree}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 * i }}
                  className="flex items-start gap-4 rounded-2xl border border-white/10 bg-white/[0.02] p-5 transition-colors hover:border-[#38BDF8]/30"
                >
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-[#38BDF8]/20 to-[#3B82F6]/20 text-[#38BDF8]">
                    <GraduationCap size={20} />
                  </div>
                  <div>
                    <p className="font-semibold text-white">{edu.degree}</p>
                    <p className="text-sm text-[#8B949E]">{edu.place}</p>
                    <p className="mt-1 font-mono text-xs text-[#58A6FF]">
                      {edu.period}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="flex flex-col gap-4">
              {CERTIFICATIONS.map((cert, i) => (
                <motion.div
                  key={cert.title}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 * i }}
                  className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.02] p-5 transition-colors hover:border-[#38BDF8]/30"
                >
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white/5 text-[#38BDF8]">
                    <Award size={18} />
                  </div>
                  <div>
                    <p className="font-semibold text-white">{cert.title}</p>
                    <p className="text-sm text-[#8B949E]">{cert.org}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}