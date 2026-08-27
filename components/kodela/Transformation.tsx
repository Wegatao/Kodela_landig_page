"use client";

import { motion } from "framer-motion";
import {
  FileText,
  Database,
  Zap,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";

const before = [
  "Papel",
  "Planilhas",
  "Processos manuais",
  "Informações espalhadas",
  "Retrabalho",
  "Maior chance de erros",
];

const after = [
  "Processos digitais",
  "Informações centralizadas",
  "Automação",
  "Mais agilidade",
  "Mais organização",
  "Mais controle",
];

export default function Transformation() {
  return (
    <section className="section-padding relative overflow-hidden">
      <div className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#1747D1]/5 blur-[120px]" />

      <div className="kodela-container relative">
        <div className="mx-auto max-w-2xl text-center">
          <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-[#4F8AFF]">
            Transformação
          </p>

          <h2 className="text-3xl font-bold tracking-tight sm:text-5xl">
            Do processo manual para uma operação mais{" "}
            <span className="kodela-gradient-text">inteligente.</span>
          </h2>

          <p className="mt-5 leading-7 text-[#A7AFBF]">
            A Kodela transforma processos complexos e repetitivos em soluções
            digitais simples, organizadas e eficientes.
          </p>
        </div>

        <div className="mt-14 grid items-center gap-5 lg:grid-cols-[1fr_auto_1fr]">
          <div className="rounded-2xl border border-white/5 bg-[#0B1020] p-7">
            <div className="mb-7 flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-white/5">
                <FileText size={19} className="text-[#7F899D]" />
              </div>

              <div>
                <p className="text-xs uppercase tracking-wider text-[#69748B]">
                  Antes
                </p>
                <p className="font-semibold">Processos manuais</p>
              </div>
            </div>

            <div className="space-y-3">
              {before.map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-3 text-sm text-[#7F899D]"
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-[#4B5363]" />
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div className="flex items-center justify-center">
            <div className="hidden h-12 w-12 items-center justify-center rounded-full border border-[#246BFF]/20 bg-[#246BFF]/5 text-[#4F8AFF] lg:flex">
              <ArrowRight size={20} />
            </div>

            <div className="flex h-12 w-12 items-center justify-center rounded-full border border-[#246BFF]/20 bg-[#246BFF]/5 text-[#4F8AFF] lg:hidden">
              <ArrowRight size={20} className="rotate-90" />
            </div>
          </div>

          <div className="rounded-2xl border border-[#246BFF]/20 bg-gradient-to-br from-[#0B1020] to-[#0C1733] p-7 shadow-[0_20px_70px_rgba(36,107,255,0.08)]">
            <div className="mb-7 flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#246BFF]/10">
                <Database size={19} className="text-[#21D4E8]" />
              </div>

              <div>
                <p className="text-xs uppercase tracking-wider text-[#21D4E8]">
                  Depois
                </p>
                <p className="font-semibold">Operação inteligente</p>
              </div>
            </div>

            <div className="space-y-3">
              {after.map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-3 text-sm text-[#BFC7D7]"
                >
                  <CheckCircle2
                    size={15}
                    className="text-[#21D4E8]"
                  />
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mx-auto mt-10 flex max-w-xl items-center justify-center gap-3 text-center text-sm text-[#7F899D]">
          <Zap size={16} className="shrink-0 text-[#21D4E8]" />
          Tecnologia aplicada para melhorar o que realmente importa.
        </div>
      </div>
    </section>
  );
}