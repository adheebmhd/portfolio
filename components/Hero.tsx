import Image from "next/image";

export default function Hero() {
  return (
    <section
  id="home"
  className="scroll-mt-24 relative flex min-h-screen items-center overflow-hidden px-6 pb-20 pt-32 lg:px-10"
>
      {/* Background glow */}
      <div className="absolute left-[-120px] top-24 h-80 w-80 rounded-full bg-cyan-500/20 blur-3xl" />
      <div className="absolute bottom-0 right-[-120px] h-96 w-96 rounded-full bg-blue-600/20 blur-3xl" />

      <div className="relative z-10 mx-auto grid w-full max-w-7xl items-center gap-16 lg:grid-cols-2">
        {/* Left content */}
        <div className="text-center lg:text-left">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.35em] text-cyan-400">
            Hello, I&apos;m
          </p>

          <h1 className="text-5xl font-bold leading-tight text-white sm:text-6xl lg:text-7xl">
            M.R.M
            <span className="block bg-gradient-to-r from-cyan-400 via-sky-400 to-blue-500 bg-clip-text text-transparent">
              Adheeb
            </span>
          </h1>

          <h2 className="mt-6 text-2xl font-semibold text-slate-100">
            Full Stack Web Developer
          </h2>

          <p className="mx-auto mt-5 max-w-xl text-base leading-8 text-slate-400 lg:mx-0">
            I build modern, responsive and scalable web applications using
            React, Next.js, Node.js, Express and MySQL.
          </p>

          <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row lg:justify-start">
            <a
              href="#projects"
              className="rounded-full bg-cyan-400 px-7 py-3 font-semibold text-slate-950 transition duration-300 hover:-translate-y-1 hover:bg-cyan-300"
            >
              View Projects
            </a>

            <a
              href="/resume/Adheeb_CV.pdf"
              download
              className="rounded-full border border-white/20 px-7 py-3 font-semibold text-white transition duration-300 hover:-translate-y-1 hover:border-cyan-400 hover:text-cyan-400"
            >
              Download CV
            </a>
          </div>

          <div className="mt-10 flex justify-center gap-10 text-sm text-slate-400 lg:justify-start">
            <div>
              <p className="text-2xl font-bold text-white">1+</p>
              <p>Real Project</p>
            </div>

            <div>
              <p className="text-2xl font-bold text-white">10+</p>
              <p>Technologies</p>
            </div>

            <div>
              <p className="text-2xl font-bold text-white">100%</p>
              <p>Dedication</p>
            </div>
          </div>
        </div>

        {/* Right image */}
<div className="flex justify-center lg:justify-end">
  <div className="relative">
    <div className="absolute inset-0 rounded-full bg-cyan-400/20 blur-3xl" />

    <div className="relative h-72 w-72 overflow-hidden rounded-full border-4 border-cyan-400/30 bg-slate-900 shadow-2xl shadow-cyan-500/20 sm:h-96 sm:w-96">
      <Image
        src="/images/profile.png"
        alt="M.R.M Adheeb"
        fill
        priority
        className="object-cover object-center"
      />
    </div>

    <div className="absolute -bottom-5 left-1/2 w-max -translate-x-1/2 rounded-full border border-white/10 bg-slate-900/90 px-5 py-3 text-sm font-medium text-slate-200 shadow-xl backdrop-blur-xl">
      Available for opportunities
    </div>
  </div>
</div>
      </div>
    </section>
  );
}