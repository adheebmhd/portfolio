"use client";
import { motion } from "framer-motion";


export default function About() {
  return (
    <section
      id="about"
      className="bg-slate-950 py-24 px-6 text-white scroll-mt-24"
    >
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="mx-auto max-w-7xl"
      >
      <div className="mx-auto max-w-7xl">

        <div className="mb-16 text-center">
          <p className="text-cyan-400 font-semibold tracking-widest uppercase">
            About Me
          </p>

          <h2 className="mt-3 text-4xl font-bold">
            Passionate Full Stack Developer
          </h2>

          <p className="mt-5 max-w-2xl mx-auto text-slate-400 leading-8">
            I'm <span className="text-white font-semibold">M.R.M Adheeb</span>,
            a passionate Full Stack Developer from Sri Lanka. I enjoy building
            modern, user-friendly web applications that solve real-world
            problems. I continuously improve my skills by developing practical
            projects and learning new technologies.
          </p>
        </div>

        <div className="grid gap-12 lg:grid-cols-2">

          {/* Left */}
          <div className="space-y-6">

            <div className="rounded-2xl border border-slate-800 bg-slate-900/50 p-8">
              <h3 className="text-xl font-semibold mb-3">
                My Journey
              </h3>

              <p className="text-slate-400 leading-8">
                My journey started with learning programming fundamentals and
                gradually moved into building desktop applications using C#.
                Later, I transitioned into modern web development with React,
                Node.js, Express, and MySQL. One of my biggest achievements is
                developing a complete POS Billing System with stock management,
                billing, payment tracking, and receipt printing.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-800 bg-slate-900/50 p-6">
              <h3 className="text-xl font-semibold mb-3">
                What I Love
              </h3>

              <ul className="space-y-3 text-slate-300">
                <li>🚀 Building Full Stack Applications</li>
                <li>💡 Solving Real-World Problems</li>
                <li>📚 Learning Modern Technologies</li>
                <li>🎯 Writing Clean & Maintainable Code</li>
              </ul>
            </div>

          </div>

          {/* Right */}
          <div className="rounded-2xl border border-cyan-500/20 bg-slate-900 p-8">

            <h3 className="text-2xl font-semibold mb-8">
              Quick Facts
            </h3>

            <div className="space-y-6">

              <div className="flex justify-between border-b border-slate-800 pb-3">
                <span className="text-slate-400">Name</span>
                <span>M.R.M Adheeb</span>
              </div>

              <div className="flex justify-between border-b border-slate-800 pb-3">
                <span className="text-slate-400">Location</span>
                <span>Sri Lanka</span>
              </div>

              <div className="flex justify-between border-b border-slate-800 pb-3">
                <span className="text-slate-400">Role</span>
                <span>Full Stack Developer</span>
              </div>

              <div className="flex justify-between border-b border-slate-800 pb-3">
                <span className="text-slate-400">Education</span>
                <span>HND in Computing</span>
              </div>

              <div className="flex justify-between border-b border-slate-800 pb-3">
                <span className="text-slate-400">Experience</span>
                <span>Real Client Project</span>
              </div>

              <div className="flex justify-between">
                <span className="text-slate-400">Current Focus</span>
                <span>Full Stack Web Development</span>
              </div>

            </div>

          </div>

        </div>

      </div>
      </motion.div>
    </section>
  );
}