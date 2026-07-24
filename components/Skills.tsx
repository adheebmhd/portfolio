"use client";
import { motion } from "framer-motion";

const skills = [
  "HTML5",
  "CSS3",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Express.js",
  "MySQL",
  "Tailwind CSS",
  "Git",
  "GitHub",
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="bg-slate-950 px-6 py-24 text-white scroll-mt-24"
    >
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
      <div className="mx-auto max-w-7xl">
        <div className="mb-14 text-center">
          <p className="font-semibold uppercase tracking-[4px] text-cyan-400">
            My Skills
          </p>

          <h2 className="mt-4 text-4xl font-bold">
            Technologies I Work With
          </h2>

          <p className="mx-auto mt-5 max-w-2xl leading-8 text-slate-400">
            I use modern frontend, backend and database technologies to build
            responsive and practical full-stack applications.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-4">
          {skills.map((skill) => (
            <div
              key={skill}
              className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6 text-center transition-all duration-300 hover:-translate-y-2 hover:border-cyan-400/50 hover:bg-slate-900"
            >
              <p className="font-semibold text-slate-200">
                {skill}
              </p>
            </div>
          ))}
        </div>
      </div>
      </motion.div>
    </section>
  );
}