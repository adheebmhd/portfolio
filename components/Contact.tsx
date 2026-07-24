"use client";
import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section
      id="contact"
      className="bg-slate-950 px-6 py-24 text-white scroll-mt-24"
    >
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
      <div className="mx-auto max-w-7xl">

        {/* Heading */}
        <div className="mb-16 text-center">
          <p className="font-semibold uppercase tracking-[4px] text-cyan-400">
            Contact Me
          </p>

          <h2 className="mt-4 text-4xl font-bold">
            Let&apos;s Work Together
          </h2>

          <p className="mx-auto mt-5 max-w-2xl leading-8 text-slate-400">
            I am open to software development opportunities, freelance projects,
            and collaborations. Feel free to contact me anytime.
          </p>
        </div>

        <div className="mx-auto grid max-w-5xl gap-8 md:grid-cols-3">

          {/* Email */}
          <a
            href="mailto:adheebmhd7@gmail.com"
            className="rounded-2xl border border-slate-800 bg-slate-900/60 p-7 text-center transition-all duration-300 hover:-translate-y-2 hover:border-cyan-400/50 hover:shadow-xl hover:shadow-cyan-500/10"
          >
            <div className="text-3xl">📧</div>

            <h3 className="mt-4 text-lg font-semibold">
              Email
            </h3>

            <p className="mt-2 break-all text-sm text-slate-400">
              adheebmhd7@gmail.com
            </p>
          </a>

          {/* Phone */}
          <a
            href="tel:+94772675123"
            className="rounded-2xl border border-slate-800 bg-slate-900/60 p-7 text-center transition-all duration-300 hover:-translate-y-2 hover:border-cyan-400/50 hover:shadow-xl hover:shadow-cyan-500/10"
          >
            <div className="text-3xl">📱</div>

            <h3 className="mt-4 text-lg font-semibold">
              Phone
            </h3>

            <p className="mt-2 text-sm text-slate-400">
              +94 77 267 5123
            </p>
          </a>

          {/* Location */}
          <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-7 text-center transition-all duration-300 hover:-translate-y-2 hover:border-cyan-400/50 hover:shadow-xl hover:shadow-cyan-500/10">
            <div className="text-3xl">📍</div>

            <h3 className="mt-4 text-lg font-semibold">
              Location
            </h3>

            <p className="mt-2 text-sm text-slate-400">
              Sri Lanka
            </p>
          </div>

        </div>

        {/* Main Contact Button */}
        <div className="mt-12 text-center">
          <a
            href="mailto:adheebmhd7@gmail.com"
            className="inline-flex items-center rounded-full bg-cyan-400 px-8 py-4 font-semibold text-slate-950 transition-all duration-300 hover:-translate-y-1 hover:bg-cyan-300 hover:shadow-xl hover:shadow-cyan-500/20"
          >
            Send Me an Email
          </a>
        </div>

      </div>
      </motion.div>
    </section>
  );
}