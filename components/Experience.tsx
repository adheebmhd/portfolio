"use client";
import { motion } from "framer-motion";
export default function Experience() {
  return (
    <section
      id="experience"
      className="bg-slate-900 px-6 py-24 text-white scroll-mt-24"
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
          <p className="uppercase tracking-[4px] text-cyan-400 font-semibold">
            Professional Experience
          </p>

          <h2 className="mt-4 text-4xl font-bold">
            My Professional Journey
          </h2>

          <p className="mx-auto mt-5 max-w-2xl leading-8 text-slate-400">
            My professional experience in inventory and stock management has
            given me practical knowledge of business operations, helping me
            build efficient software solutions for real-world needs.
          </p>
        </div>

        {/* Experience Card */}

        <div className="mx-auto max-w-4xl">

          <div
            className="
            rounded-3xl
            border
            border-slate-800
            bg-slate-800/50
            p-8
            transition-all
            duration-300
            hover:-translate-y-2
            hover:border-cyan-400/50
            hover:shadow-xl
            hover:shadow-cyan-500/10
            "
          >

            <div className="flex flex-col justify-between gap-4 md:flex-row">

              <div>

                <h3 className="text-2xl font-bold">
                  📦 Stock Keeper
                </h3>

                <p className="mt-2 text-cyan-400">
                  SF Marketing Company
                </p>

              </div>

              <div className="rounded-full bg-cyan-500/10 px-5 py-2 text-cyan-300 h-fit">
                Apr 2025 – Present
              </div>

            </div>

            <p className="mt-8 leading-8 text-slate-400">
              Responsible for managing inventory, monitoring stock movement,
              maintaining accurate inventory records, and supporting warehouse
              operations. This practical experience has strengthened my
              understanding of inventory workflows and helped me design better
              business software solutions.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">

              <div className="rounded-xl bg-slate-900 p-4">
                ✅ Inventory Management
              </div>

              <div className="rounded-xl bg-slate-900 p-4">
                ✅ Stock Monitoring
              </div>

              <div className="rounded-xl bg-slate-900 p-4">
                ✅ Warehouse Operations
              </div>

              <div className="rounded-xl bg-slate-900 p-4">
                ✅ Product Handling
              </div>

            </div>

          </div>

        </div>

      </div>
      </motion.div>
    </section>
  );
}