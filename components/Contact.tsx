"use client";

import { motion } from "framer-motion";
import {
  FiGithub,
  FiMail,
  FiMapPin,
  FiPhone,
  FiSend,
} from "react-icons/fi";

const contactItems = [
  {
    title: "Email",
    value: "adheebmhd7@gmail.com",
    href: "mailto:adheebmhd7@gmail.com",
    icon: FiMail,
  },
  {
    title: "Phone",
    value: "+94 77 267 5123",
    href: "tel:+94772675123",
    icon: FiPhone,
  },
  {
    title: "Location",
    value: "Sri Lanka",
    href: null,
    icon: FiMapPin,
  },
  {
    title: "GitHub",
    value: "github.com/adheebmhd",
    href: "https://github.com/adheebmhd",
    icon: FiGithub,
  },
];

export default function Contact() {
  return (
    <section
      id="contact"
      className="scroll-mt-24 bg-slate-950 px-6 py-24 text-white"
    >
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="mx-auto max-w-7xl"
      >
        {/* Heading */}
        <div className="mb-16 text-center">
          <p className="font-semibold uppercase tracking-[4px] text-cyan-400">
            Contact Me
          </p>

          <h2 className="mt-4 text-4xl font-bold">
            Let&apos;s Work Together
          </h2>

          <p className="mx-auto mt-5 max-w-2xl leading-8 text-slate-400">
            I am open to software development opportunities, freelance
            projects, and collaborations. Feel free to contact me anytime.
          </p>
        </div>

        {/* Contact cards */}
        <div className="mx-auto grid max-w-5xl gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {contactItems.map(({ title, value, href, icon: Icon }) => {
            const cardClass =
              "group rounded-2xl border border-slate-800 bg-slate-900/60 p-7 text-center transition-all duration-300 hover:-translate-y-2 hover:border-cyan-400/50 hover:shadow-xl hover:shadow-cyan-500/10";

            const content = (
              <>
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full border border-cyan-500/30 bg-cyan-500/10 text-cyan-400 transition duration-300 group-hover:scale-110 group-hover:bg-cyan-500/20">
                  <Icon className="h-6 w-6" />
                </div>

                <h3 className="mt-5 text-lg font-semibold">{title}</h3>

                <p className="mt-2 break-all text-sm text-slate-400 transition group-hover:text-slate-300">
                  {value}
                </p>
              </>
            );

            if (href) {
              return (
                <a
                  key={title}
                  href={href}
                  target={title === "GitHub" ? "_blank" : undefined}
                  rel={
                    title === "GitHub"
                      ? "noopener noreferrer"
                      : undefined
                  }
                  className={cardClass}
                >
                  {content}
                </a>
              );
            }

            return (
              <div key={title} className={cardClass}>
                {content}
              </div>
            );
          })}
        </div>

        {/* Main contact button */}
        <div className="mt-12 text-center">
          <a
            href="mailto:adheebmhd7@gmail.com"
            className="inline-flex items-center gap-2 rounded-full bg-cyan-400 px-8 py-4 font-semibold text-slate-950 transition-all duration-300 hover:-translate-y-1 hover:bg-cyan-300 hover:shadow-xl hover:shadow-cyan-500/20"
          >
            <FiSend className="h-5 w-5" />
            Send Me an Email
          </a>
        </div>
      </motion.div>
    </section>
  );
}