"use client";
import {
  SiReact,
  SiNodedotjs,
  SiExpress,
  SiMysql,
  SiTailwindcss,
  SiVercel,
  SiRender,
} from "react-icons/si";
import Image from "next/image";
import { motion } from "framer-motion";
import { FiExternalLink, FiGithub } from "react-icons/fi";

const technologies = [
  { name: "React", icon: SiReact },
  { name: "Node.js", icon: SiNodedotjs },
  { name: "Express", icon: SiExpress },
  { name: "MySQL", icon: SiMysql },
  { name: "Tailwind CSS", icon: SiTailwindcss },
  { name: "Vercel", icon: SiVercel },
  { name: "Render", icon: SiRender },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="scroll-mt-24 bg-slate-900 px-6 py-24 text-white"
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
            Featured Project
          </p>

          <h2 className="mt-4 text-4xl font-bold">
            POS Billing System
          </h2>

          <p className="mx-auto mt-5 max-w-3xl leading-8 text-slate-400">
            A modern full-stack Point of Sale system developed for retail
            businesses with billing, inventory management, payment tracking,
            reporting, draft bills, and receipt printing.
          </p>
        </div>

        {/* Main layout */}
        <div className="grid items-center gap-14 lg:grid-cols-2">
          {/* Left side */}
          <div>
            <div className="overflow-hidden rounded-3xl border border-cyan-500/20 bg-slate-950/40 shadow-2xl shadow-cyan-500/10">
              <div className="overflow-hidden">
                <Image
                  src="/images/projects/pos-billing.png"
                  alt="POS Billing System dashboard"
                  width={1200}
                  height={750}
                  className="h-auto w-full transition-transform duration-500 hover:scale-105"
                />
              </div>

              {/* Tech stack badges */}
             <div className="flex flex-wrap gap-4 p-5">
  {technologies.map(({ name, icon: Icon }) => (
    <span
      key={name}
      className="inline-flex items-center gap-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 px-4 py-2 text-sm text-cyan-400 transition-all duration-300 hover:-translate-y-1 hover:bg-cyan-500/20 hover:border-cyan-400"
    >
      <Icon className="h-4 w-4" />
      {name}
    </span>
  ))}
</div>
            </div>
          </div>

          {/* Right side */}
          <div>
            <h3 className="text-3xl font-bold">
              Complete Retail Billing Solution
            </h3>

            <p className="mt-6 leading-8 text-slate-400">
              Designed and developed a complete POS application using React,
              Node.js, Express, and MySQL. The system helps retail businesses
              manage billing, stock, customer payments, pending balances,
              reports, and receipt printing efficiently.
            </p>

            {/* Features */}
            <div className="mt-7 grid gap-3 text-slate-300 sm:grid-cols-2">
              <p>✓ Stock management</p>
              <p>✓ Billing and receipts</p>
              <p>✓ Payment tracking</p>
              <p>✓ Draft bill management</p>
              <p>✓ Sales reports</p>
              <p>✓ Cloud database</p>
            </div>

            {/* Buttons */}
            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="https://pos-system-hazel-seven.vercel.app"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-cyan-400 px-6 py-3 font-semibold text-slate-950 transition duration-300 hover:-translate-y-1 hover:bg-cyan-300"
              >
                <FiExternalLink size={18} />
                Live Demo
              </a>

              <a
                href="https://github.com/adheebmhd/PosSystem"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-white/20 px-6 py-3 font-semibold text-white transition duration-300 hover:-translate-y-1 hover:border-cyan-400 hover:text-cyan-400"
              >
                <FiGithub size={18} />
                View Code
              </a>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}