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
          <p className="text-sm text-slate-400">
            © {year} Adheeb
          </p>

          <p className="mt-2 text-xs text-slate-500">
            Designed & Built with ❤️ using Next.js
          </p>
        </div>

      </div>
    </footer>
  );
}