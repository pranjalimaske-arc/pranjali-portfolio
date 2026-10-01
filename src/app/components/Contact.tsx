"use client";

import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";
import { useState } from "react";

const WHATSAPP_NUMBER = "917066404575";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const { name, email, subject, message } = formData;
    const whatsappMessage = `Hello, my name is ${name || "Visitor"}.\nEmail: ${
      email || "Not provided"
    }\nSubject: ${subject || "Not provided"}\n\nMessage:\n${
      message || "No message provided"
    }`;

    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
      whatsappMessage
    )}`;

    window.open(whatsappUrl, "_blank", "noopener,noreferrer");
  };

  return (
    <section
      id="contact"
      className="relative  z-10 overflow-hidden px-12 py-20 text-[#C9D1D9] sm:px-16 md:px-24 lg:px-32 xl:px-44 2xl:px-56"
    >
      {/* Background Glow */}
      <div className="pointer-events-none absolute -top-40 left-1/2 h-[400px] w-[600px] -translate-x-1/2 rounded-full bg-[#38BDF8]/10 blur-[130px]" />

      <div className="relative mx-auto max-w-[1450px]">
        {/* ================= HEADER ================= */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-10"
        >
          <p className="mb-2 text-xs font-medium tracking-[0.25em] text-[#38BDF8]">
            GET IN TOUCH
          </p>

          <h2 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Let&apos;s{" "}
            <span className="bg-gradient-to-r from-[#38BDF8] to-[#3B82F6] bg-clip-text text-transparent">
              Connect.
            </span>
          </h2>
        </motion.div>

        {/* ================= CONTACT GRID ================= */}
        <div className="grid gap-6 lg:grid-cols-[0.8fr_1.2fr]">
          {/* ================= CONTACT INFO ================= */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-sm"
          >
            <h3 className="text-xl font-bold text-white">
              Contact Information
            </h3>

            <p className="mt-2 text-sm leading-6 text-[#8B949E]">
              Feel free to contact me through any of the following channels.
            </p>

            {/* Email */}
            <div className="mt-6 flex items-center gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#38BDF8]/10 text-[#38BDF8]">
                <Mail size={18} />
              </div>

              <div>
                <p className="text-xs text-[#8B949E]">Email</p>

                <a
                  href="mailto:pranjalimaske616@gmail.com"
                  className="text-sm font-medium text-white transition hover:text-[#38BDF8]"
                >
                  pranjalimaske616@gmail.com
                </a>
              </div>
            </div>

            {/* Phone */}
            <div className="mt-5 flex items-center gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#38BDF8]/10 text-[#38BDF8]">
                <Phone size={18} />
              </div>

              <div>
                <p className="text-xs text-[#8B949E]">Phone</p>

                <a
                  href="tel:+917066404575"
                  className="text-sm font-medium text-white transition hover:text-[#38BDF8]"
                >
                  +91 70664 04575
                </a>
              </div>
            </div>

            {/* Location */}
            <div className="mt-5 flex items-center gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#38BDF8]/10 text-[#38BDF8]">
                <MapPin size={18} />
              </div>

              <div>
                <p className="text-xs text-[#8B949E]">Location</p>

                <p className="text-sm font-medium text-white">
                  Amravati,Maharashtra.
                </p>
              </div>
            </div>

            {/* ================= FOLLOW ME ================= */}
            <div className="mt-7 border-t border-white/10 pt-5">
              <p className="mb-3 text-xs font-medium uppercase tracking-[0.15em] text-[#8B949E]">
                Follow Me
              </p>

              <div className="flex items-center gap-3">
                {/* ================= GITHUB ================= */}
                <a
                  href=" https://github.com/pranjalimaske-arc"
                  aria-label="GitHub"
                  className="group flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-white/[0.03] text-[#8B949E] transition-all duration-300 hover:-translate-y-1 hover:border-[#38BDF8]/40 hover:bg-[#38BDF8]/10 hover:text-[#38BDF8]"
                >
                  <svg
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="h-[19px] w-[19px] transition-transform duration-300 group-hover:scale-110"
                  >
                    <path d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.009-1.026-.014-1.86-2.782.604-3.369-1.184-3.369-1.184-.455-1.157-1.11-1.466-1.11-1.466-.908-.621.069-.608.069-.608 1.004.071 1.532 1.031 1.532 1.031.892 1.529 2.341 1.087 2.91.831.091-.647.349-1.087.635-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.56 9.56 0 0 1 12 7.07c.85.004 1.705.115 2.504.337 1.909-1.294 2.748-1.025 2.748-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.413-.012 2.741 0 .267.18.578.688.48A10.003 10.003 0 0 0 22 12C22 6.477 17.523 2 12 2Z" />
                  </svg>
                </a>

                {/* ================= LINKEDIN ================= */}
                <a
                  href="https://linkedin.com/in/pranjali-maske-b4492b35b"
                  aria-label="LinkedIn"
                  className="group flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-white/[0.03] text-[#8B949E] transition-all duration-300 hover:-translate-y-1 hover:border-[#38BDF8]/40 hover:bg-[#38BDF8]/10 hover:text-[#38BDF8]"
                >
                  <svg
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="h-[18px] w-[18px] transition-transform duration-300 group-hover:scale-110"
                  >
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V8.999h3.414v1.561h.046c.476-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.287ZM5.337 7.433a2.062 2.062 0 1 1 0-4.124 2.062 2.062 0 0 1 0 4.124ZM3.559 20.452h3.558V8.999H3.559v11.453Z" />
                  </svg>
                </a>

                {/* ================= WHATSAPP ================= */}
                <a
                  href={`https://wa.me/${WHATSAPP_NUMBER}`}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="WhatsApp"
                  className="group flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-white/[0.03] text-[#8B949E] transition-all duration-300 hover:-translate-y-1 hover:border-[#38BDF8]/40 hover:bg-[#38BDF8]/10 hover:text-[#38BDF8]"
                >
                  <svg
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="h-[19px] w-[19px] transition-transform duration-300 group-hover:scale-110"
                  >
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.372-.025-.521-.075-.149-.669-1.611-.916-2.206-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.626.712.227 1.36.195 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347Z" />

                    <path d="M12.004 2C6.48 2 2 6.477 2 12c0 1.762.46 3.415 1.267 4.852L2 22l5.28-1.235A9.94 9.94 0 0 0 12.004 22C17.523 22 22 17.523 22 12S17.523 2 12.004 2Zm0 18.18a8.16 8.16 0 0 1-4.16-1.14l-.298-.177-3.135.733.746-3.058-.194-.314A8.17 8.17 0 1 1 12.004 20.18Z" />
                  </svg>
                </a>
              </div>
            </div>
          </motion.div>

          {/* ================= CONTACT FORM ================= */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-sm sm:p-7"
          >
            <h3 className="text-xl font-bold text-white">Send Me a Message</h3>

            <p className="mt-2 text-sm text-[#8B949E]">
              Fill out the form and I&apos;ll get back to you.
            </p>

            <form className="mt-6 space-y-4" onSubmit={handleSubmit}>
              {/* Name + Email */}
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="name"
                    className="mb-1.5 block text-xs font-medium text-[#C9D1D9]"
                  >
                    Your Name
                  </label>

                  <input
                    id="name"
                    name="name"
                    type="text"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter your name"
                    className="w-full rounded-lg border border-white/10 bg-[#0D1117] px-3.5 py-2.5 text-sm text-white outline-none transition placeholder:text-[#6E7681] focus:border-[#38BDF8]/60 focus:ring-1 focus:ring-[#38BDF8]/20"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="mb-1.5 block text-xs font-medium text-[#C9D1D9]"
                  >
                    Email Address
                  </label>

                  <input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="you@example.com"
                    className="w-full rounded-lg border border-white/10 bg-[#0D1117] px-3.5 py-2.5 text-sm text-white outline-none transition placeholder:text-[#6E7681] focus:border-[#38BDF8]/60 focus:ring-1 focus:ring-[#38BDF8]/20"
                  />
                </div>
              </div>

              {/* Subject */}
              <div>
                <label
                  htmlFor="subject"
                  className="mb-1.5 block text-xs font-medium text-[#C9D1D9]"
                >
                  Subject
                </label>

                <input
                  id="subject"
                  name="subject"
                  type="text"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="What would you like to discuss?"
                  className="w-full rounded-lg border border-white/10 bg-[#0D1117] px-3.5 py-2.5 text-sm text-white outline-none transition placeholder:text-[#6E7681] focus:border-[#38BDF8]/60 focus:ring-1 focus:ring-[#38BDF8]/20"
                />
              </div>

              {/* Message */}
              <div>
                <label
                  htmlFor="message"
                  className="mb-1.5 block text-xs font-medium text-[#C9D1D9]"
                >
                  Message
                </label>

                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell me about your project..."
                  className="w-full resize-none rounded-lg border border-white/10 bg-[#0D1117] px-3.5 py-2.5 text-sm text-white outline-none transition placeholder:text-[#6E7681] focus:border-[#38BDF8]/60 focus:ring-1 focus:ring-[#38BDF8]/20"
                />
              </div>

              {/* Submit */}
              <button
                type="submit"
                className="group inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-[#38BDF8] to-[#3B82F6] px-5 py-2.5 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-[#38BDF8]/20"
              >
                Send Message
                <ArrowUpRight
                  size={16}
                  className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}