import { FiGithub, FiMail } from "react-icons/fi";
export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-slate-800 bg-slate-950 px-6 py-10 text-white">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-8 md:flex-row">

        {/* Left */}
        <div className="text-center md:text-left">
          <h2 className="text-2xl font-bold">
            Adheeb<span className="text-cyan-400">.</span>
          </h2>

          <p className="mt-3 max-w-md text-sm leading-7 text-slate-400">
            Full Stack Developer passionate about building modern,
            fast and user-friendly web applications using React,
            Next.js, Node.js and MySQL.
          </p>
        </div>

        {/* Center */}
        <div className="flex flex-wrap justify-center gap-6 text-sm font-medium text-slate-300">
          <a href="#home" className="transition hover:text-cyan-400">
            Home
          </a>

          <a href="#about" className="transition hover:text-cyan-400">
            About
          </a>

          <a href="#projects" className="transition hover:text-cyan-400">
            Projects
          </a>

          <a href="#contact" className="transition hover:text-cyan-400">
            Contact
          </a>
        </div>

        {/* Right */}
        <div className="text-center md:text-right">

  <div className="flex justify-center gap-4 md:justify-end">
    <a
      href="https://github.com/adheebmhd"
      target="_blank"
      rel="noopener noreferrer"
      className="rounded-full border border-slate-700 p-2 text-slate-400 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400 hover:text-cyan-400"
    >
      <FiGithub className="h-5 w-5" />
    </a>

    <a
      href="mailto:adheebmhd7@gmail.com"
      className="rounded-full border border-slate-700 p-2 text-slate-400 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400 hover:text-cyan-400"
    >
      <FiMail className="h-5 w-5" />
    </a>
  </div>

  <p className="mt-5 text-sm text-slate-400">
    © {year} Adheeb
  </p>

  <p className="mt-2 text-xs text-slate-500">
    Designed & Built with ❤️ using Next.js, Tailwind CSS & TypeScript
  </p>

</div>
</div>
    </footer>
  );
}