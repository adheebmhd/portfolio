"use client";

import { useEffect, useState } from "react";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Projects", href: "#projects" },
  { name: "Skills", href: "#skills" },
  { name: "Experience", href: "#experience" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
  const sections =
    document.querySelectorAll<HTMLElement>("section[id]");

  const handleScroll = () => {
    let current = "home";

    sections.forEach((section) => {
      const sectionTop = section.offsetTop - 120;
      const sectionHeight = section.clientHeight;

      if (
        window.scrollY >= sectionTop &&
        window.scrollY < sectionTop + sectionHeight
      ) {
        current = section.id;
      }
    });

    setActiveSection(current);
  };

  window.addEventListener("scroll", handleScroll, { passive: true });

  return () => {
    window.removeEventListener("scroll", handleScroll);
  };
}, []);

  return (
    <header className="fixed left-0 top-0 z-50 w-full border-b border-white/10 bg-slate-950/80 backdrop-blur-xl">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-10">
        <a
          href="#home"
          className="text-xl font-bold tracking-wide text-white"
        >
          Adheeb<span className="text-cyan-400">.</span>
        </a>

        <ul className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <li key={link.name}>
              <a
                href={link.href}
                className={`block border-b border-white/5 py-3 transition ${
  activeSection === link.href.substring(1)
    ? "text-cyan-400"
    : "text-slate-300 hover:text-cyan-400"
}`}
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#contact"
          className="hidden rounded-full bg-cyan-400 px-5 py-2 text-sm font-semibold text-slate-950 transition duration-300 hover:bg-cyan-300 md:block"
        >
          Hire Me
        </a>

        <button
          type="button"
          onClick={() => setMenuOpen(!menuOpen)}
          className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 rounded-lg border border-white/10 md:hidden"
          aria-label="Open navigation menu"
          aria-expanded={menuOpen}
        >
          <span
            className={`h-0.5 w-5 bg-white transition duration-300 ${
              menuOpen ? "translate-y-2 rotate-45" : ""
            }`}
          />

          <span
            className={`h-0.5 w-5 bg-white transition duration-300 ${
              menuOpen ? "opacity-0" : ""
            }`}
          />

          <span
            className={`h-0.5 w-5 bg-white transition duration-300 ${
              menuOpen ? "-translate-y-2 -rotate-45" : ""
            }`}
          />
        </button>
      </nav>

      <div
        className={`overflow-hidden border-t border-white/10 bg-slate-950 transition-all duration-300 md:hidden ${
          menuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <ul className="flex flex-col px-6 py-5">
          {navLinks.map((link) => (
            <li key={link.name}>
              <a
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="block border-b border-white/5 py-3 text-slate-300 transition hover:text-cyan-400"
              >
                {link.name}
              </a>
            </li>
          ))}

          <li className="pt-5">
            <a
              href="#contact"
              onClick={() => setMenuOpen(false)}
              className="block rounded-full bg-cyan-400 px-5 py-3 text-center font-semibold text-slate-950"
            >
              Hire Me
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
}