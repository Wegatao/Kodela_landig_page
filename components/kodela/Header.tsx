"use client";

import { useEffect, useState } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";

const links = [
  { label: "Início", href: "#inicio" },
  { label: "Soluções", href: "#solucoes" },
  { label: "Benefícios", href: "#beneficios" },
  { label: "Como funciona", href: "#processo" },
  { label: "Projetos", href: "#projetos" },
  { label: "Sobre", href: "#sobre" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed left-0 top-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? "border-b border-white/5 bg-[#070A12]/80 backdrop-blur-xl"
          : "bg-transparent"
      }`}
    >
      <div className="kodela-container">
        <div className="flex h-20 items-center justify-between">
          <a href="#inicio" className="flex items-center gap-2">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-[#1747D1] to-[#21D4E8] font-bold">
              K
            </div>

            <span className="text-xl font-bold tracking-tight">
              Kodela
            </span>
          </a>

          <nav className="hidden items-center gap-7 lg:flex">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-[#A7AFBF] transition-colors hover:text-white"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <a
            href="#contato"
            className="hidden items-center gap-2 rounded-lg bg-gradient-to-r from-[#1747D1] to-[#21D4E8] px-5 py-3 text-sm font-semibold text-white transition-all hover:-translate-y-0.5 hover:shadow-[0_10px_30px_rgba(36,107,255,0.25)] lg:flex"
          >
            Falar com a Kodela
            <ArrowUpRight size={16} />
          </a>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="rounded-lg border border-white/10 p-2 lg:hidden"
            aria-label="Abrir menu"
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {mobileOpen && (
          <div className="border-t border-white/5 bg-[#070A12]/95 py-5 backdrop-blur-xl lg:hidden">
            <nav className="flex flex-col gap-2">
              {links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="rounded-lg px-4 py-3 text-[#A7AFBF] hover:bg-white/5 hover:text-white"
                >
                  {link.label}
                </a>
              ))}

              <a
                href="#contato"
                onClick={() => setMobileOpen(false)}
                className="mt-2 rounded-lg bg-gradient-to-r from-[#1747D1] to-[#21D4E8] px-4 py-3 text-center font-semibold"
              >
                Falar com a Kodela
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}