"use client";
import { FiExternalLink, FiGithub } from "react-icons/fi";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Projects() {
  return (
    <section
      id="projects"
      className="bg-slate-900 py-24 px-6 text-white scroll-mt-24"
    >
       <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
      <div className="mx-auto max-w-7xl">

        {/* Heading */}
        <div className="text-center mb-16">
          <p className="uppercase tracking-[4px] text-cyan-400 font-semibold">
            Featured Project
          </p>

          <h2 className="mt-4 text-4xl font-bold">
            POS Billing System
          </h2>

          <p className="mx-auto mt-5 max-w-3xl text-slate-400 leading-8">
            A modern Full Stack Point of Sale (POS) system developed for retail
            businesses with billing, inventory management, payment tracking,
            reporting and receipt printing.
          </p>
        </div>

        {/* Main Layout */}
        <div className="grid gap-14 lg:grid-cols-2 items-center">

          {/* LEFT */}

          <div>

            {/* Screenshot Placeholder */}

           <div className="overflow-hidden rounded-3xl border border-cyan-500/20 shadow-2xl shadow-cyan-500/10">
  <img
    src="/images/projects/pos-billing.png"
    alt="POS Billing"
    className="w-full transition-transform duration-500 hover:scale-105"
  />
</div>

          </div>

          {/* RIGHT */}

          <div>
  <h3 className="text-3xl font-bold">
    Complete Retail Billing Solution
  </h3>

  <p className="mt-6 leading-8 text-slate-400">
    Designed and developed a complete POS application using React,
    Node.js, Express and MySQL. The system helps retail businesses
    manage billing, stock, payments and reports efficiently.
  </p>

  <div className="mt-8 flex flex-wrap gap-4">
    <a
      href="https://pos-system-hazel-seven.vercel.app"
      target="_blank"
      rel="noopener noreferrer"
      className="rounded-full bg-cyan-400 px-6 py-3 font-semibold text-slate-950 transition duration-300 hover:-translate-y-1 hover:bg-cyan-300"
    > 
      <FiExternalLink size={18} />
      Live Demo
    </a>

    <a
      href="https://github.com/adheebmhd"
      target="_blank"
      rel="noopener noreferrer"
      className="rounded-full border border-white/20 px-6 py-3 font-semibold text-white transition duration-300 hover:-translate-y-1 hover:border-cyan-400 hover:text-cyan-400"
    >
      <FiGithub size={18} />
      View Code
    </a>
  </div>
</div> 
</div>

      </div>
      </motion.div>
    </section>
  );
}