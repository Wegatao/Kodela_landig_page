"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Code2, Cpu, Sparkles } from "lucide-react";

export default function About() {
  return (
    <section id="sobre" className="section-padding">
      <div className="kodela-container">
        <div className="grid items-center gap-14 lg:grid-cols-[.9fr_1.1fr]">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="absolute inset-0 rounded-full bg-[#1747D1]/10 blur-[100px]" />

            <div className="relative aspect-square max-w-[480px] overflow-hidden rounded-3xl border border-[#246BFF]/20 bg-[#0B1020]">
              <div className="absolute inset-0 kodela-grid" />

              <div className="absolute left-1/2 top-1/2 h-40 w-40 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#246BFF]/10 blur-[60px]" />

              <div className="absolute left-1/2 top-1/2 flex h-28 w-28 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-3xl border border-[#246BFF]/30 bg-[#070A12]/80 shadow-[0_0_80px_rgba(36,107,255,0.15)]">
                <span className="text-5xl font-black kodela-gradient-text">
                  K
                </span>
              </div>

              <div className="absolute left-10 top-10 rounded-xl border border-white/10 bg-[#070A12]/80 p-4 backdrop-blur-xl">
                <Code2 size={19} className="text-[#21D4E8]" />
              </div>

              <div className="absolute right-10 top-20 rounded-xl border border-white/10 bg-[#070A12]/80 p-4 backdrop-blur-xl">
                <Cpu size={19} className="text-[#4F8AFF]" />
              </div>

              <div className="absolute bottom-12 left-20 rounded-xl border border-white/10 bg-[#070A12]/80 p-4 backdrop-blur-xl">
                <Sparkles size={19} className="text-[#21D4E8]" />
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-[#4F8AFF]">
              Sobre a Kodela
            </p>

            <h2 className="text-4xl font-bold tracking-tight sm:text-5xl">
              Somos a{" "}
              <span className="kodela-gradient-text">
                Kodela.
              </span>
            </h2>

            <p className="mt-7 text-lg leading-8 text-[#A7AFBF]">
              Uma empresa de tecnologia focada em transformar problemas reais
              de negócios em soluções digitais.
            </p>

            <p className="mt-5 leading-7 text-[#7F899D]">
              Criamos sites, sistemas sob medida, plataformas, automações e
              ferramentas digitais para ajudar empresas a trabalhar melhor,
              ganhar tempo e crescer com mais organização.
            </p>

            <a
              href="#contato"
              className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-white transition-colors hover:text-[#21D4E8]"
            >
              Conhecer a Kodela
              <ArrowUpRight size={17} />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}