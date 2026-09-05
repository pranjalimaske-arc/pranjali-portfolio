"use client";

import Link from "next/link";
import { Mail, MapPin, Phone, ArrowUpRight } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#090C10] text-[#C9D1D9]">

      {/* ================= MAIN FOOTER ================= */}
      <div className="mx-auto max-w-[1300px] px-10 py-10 sm:px-12 md:px-16 lg:px-20">

        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-[1.3fr_0.8fr_1fr] lg:gap-20">

          {/* =================================================
              COLUMN 1 — BRAND
          ================================================= */}
          <div>
            <Link
              href="/"
              className="inline-flex items-center text-3xl font-black tracking-tight text-white"
            >
              P<span className="text-[#38BDF8]">.</span>
            </Link>

            <p className="mt-4 max-w-[300px] text-sm leading-[1.9] text-[#8B949E]">
              Full-stack developer creating modern, responsive and
              high-performance web applications with clean design and
              scalable technology.
            </p>

            <Link
              href="#contact"
              className="group mt-5 inline-flex items-center gap-2 text-sm font-medium text-[#38BDF8] transition-colors duration-300 hover:text-white"
            >
              Let&apos;s work together

              <ArrowUpRight
                size={15}
                className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </Link>
          </div>

          {/* =================================================
              COLUMN 2 — EXPLORE
          ================================================= */}
          <div>
            <h3 className="text-xs font-semibold tracking-[0.22em] text-[#38BDF8]">
              EXPLORE
            </h3>

            <nav className="mt-4 flex flex-col gap-4 text-sm text-[#8B949E]">

              <Link
                href="#home"
                className="w-fit transition-colors duration-300 hover:text-white"
              >
                Home
              </Link>

              <Link
                href="#about"
                className="w-fit transition-colors duration-300 hover:text-white"
              >
                About
              </Link>

              <Link
                href="#skills"
                className="w-fit transition-colors duration-300 hover:text-white"
              >
                Skills
              </Link>

              <Link
                href="#projects"
                className="w-fit transition-colors duration-300 hover:text-white"
              >
                Projects
              </Link>

              <Link
                href="#contact"
                className="w-fit transition-colors duration-300 hover:text-white"
              >
                Contact
              </Link>

            </nav>
          </div>

          {/* =================================================
    COLUMN 3 — GET IN TOUCH
================================================= */}
<div>
  <h3 className="text-xs font-semibold tracking-[0.22em] text-[#38BDF8]">
    GET IN TOUCH
  </h3>

  {/* Contact Details */}
  <div className="mt-5 flex flex-col gap-4">

    {/* Email */}
    <a
      href="mailto:your@email.com"
      className="group flex items-center gap-3.5 text-sm text-[#8B949E] transition-colors duration-300 hover:text-white"
    >
      <Mail
        size={18}
        strokeWidth={1.7}
        className="shrink-0 text-[#38BDF8]"
      />

      <span>pranjalimaske616@gmail.com</span>
    </a>

    {/* Phone */}
    <a
      href="tel:+910000000000"
      className="group flex items-center gap-3 text-sm text-[#8B949E] transition-colors duration-300 hover:text-white"
    >
      <Phone
        size={18}
        strokeWidth={1.7}
        className="shrink-0 text-[#38BDF8]"
      />

      <span>+91 70664 04575</span>
    </a>

    {/* Location */}
    <div className="flex items-center gap-3 text-sm text-[#8B949E]">
      <MapPin
        size={18}
        strokeWidth={1.7}
        className="shrink-0 text-[#38BDF8]"
      />

      <span>Amravati,Maharashtra.</span>
    </div>

  </div>

  {/* =================================================
      SOCIAL ICONS
  ================================================= */}
  <div className="mt-6 flex items-center gap-3">

    {/* GitHub */}
    <a
      href="#"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="GitHub"
      className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 text-[#8B949E] transition-all duration-300 hover:-translate-y-1 hover:border-[#38BDF8]/40 hover:bg-[#38BDF8]/10 hover:text-[#38BDF8]"
    >
      <svg
        viewBox="0 0 24 24"
        fill="currentColor"
        className="h-[18px] w-[18px]"
      >
        <path d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.009-1.026-.014-1.86-2.782.604-3.369-1.184-3.369-1.184-.455-1.157-1.11-1.466-1.11-1.466-.908-.621.069-.608.069-.608 1.004.071 1.532 1.031 1.532 1.031.892 1.529 2.341 1.087 2.91.831.091-.647.349-1.087.635-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.56 9.56 0 0 1 12 7.07c.85.004 1.705.115 2.504.337 1.909-1.294 2.748-1.025 2.748-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.413-.012 2.741 0 .267.18.578.688.48A10.003 10.003 0 0 0 22 12C22 6.477 17.523 2 12 2Z" />
      </svg>
    </a>

    {/* LinkedIn */}
    <a
      href="#"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="LinkedIn"
      className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 text-[#8B949E] transition-all duration-300 hover:-translate-y-1 hover:border-[#38BDF8]/40 hover:bg-[#38BDF8]/10 hover:text-[#38BDF8]"
    >
      <svg
        viewBox="0 0 24 24"
        fill="currentColor"
        className="h-[18px] w-[18px]"
      >
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V8.999h3.414v1.561h.046c.476-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.287ZM5.337 7.433a2.062 2.062 0 1 1 0-4.124 2.062 2.062 0 0 1 0 4.124ZM3.559 20.452h3.558V8.999H3.559v11.453Z" />
      </svg>
    </a>

    {/* WhatsApp */}
    <a
      href="#"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="WhatsApp"
      className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 text-[#8B949E] transition-all duration-300 hover:-translate-y-1 hover:border-[#38BDF8]/40 hover:bg-[#38BDF8]/10 hover:text-[#38BDF8]"
    >
      <svg
        viewBox="0 0 24 24"
        fill="currentColor"
        className="h-[18px] w-[18px]"
      >
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.298-.497.099-.198.05-.372-.025-.521-.075-.149-.669-1.611-.916-2.206-.242-.579-.487-.5-.669-.51-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.626.712.227 1.36.195 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347Z" />
        <path d="M12 2C6.477 2 2 6.477 2 12c0 1.76.46 3.42 1.27 4.86L2 22l5.28-1.24A9.94 9.94 0 0 0 12 22c5.52 0 10-4.48 10-10S17.52 2 12 2Zm0 18.18a8.16 8.16 0 0 1-4.16-1.14l-.3-.18-3.13.73.75-3.06-.2-.31A8.17 8.17 0 1 1 12 20.18Z" />
      </svg>
    </a>

  


              

            </div>
          </div>

        </div>
      </div>

      {/* ================= BOTTOM BAR ================= */}
      <div className="border-t border-white/10">

        <div className="mx-auto flex max-w-[1300px] flex-col items-center justify-between gap-3 px-10 py-4 text-xs text-[#6E7681] sm:flex-row sm:px-12 md:px-16 lg:px-20">

          <p>
            © {new Date().getFullYear()} Portfolio. All rights reserved.
          </p>

          <p>
            Designed &amp; developed by{" "}
            <span className="text-[#38BDF8]">
              Pranjali Maske
            </span>
          </p>

        </div>

      </div>
    </footer>
  );
}