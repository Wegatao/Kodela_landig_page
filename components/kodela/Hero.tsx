"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  CheckCircle2,
  BarChart3,
  Zap,
  Database,
} from "lucide-react";

export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative flex min-h-screen items-center overflow-hidden pt-20"
    >
      <div className="absolute inset-0 kodela-grid" />

      <div className="absolute left-1/4 top-20 h-96 w-96 rounded-full bg-[#1747D1]/10 blur-[120px]" />

      <div className="absolute bottom-0 right-1/4 h-96 w-96 rounded-full bg-[#21D4E8]/5 blur-[120px]" />

      <div className="kodela-container relative z-10 grid items-center gap-16 py-20 lg:grid-cols-[1.05fr_.95fr]">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#246BFF]/20 bg-[#246BFF]/5 px-4 py-2 text-xs font-medium tracking-wider text-[#7DA5FF]">
            <span className="h-1.5 w-1.5 rounded-full bg-[#21D4E8] shadow-[0_0_10px_#21D4E8]" />
            TECNOLOGIA PARA EMPRESAS QUE QUEREM EVOLUIR
          </div>

          <h1 className="max-w-4xl text-5xl font-bold leading-[1.02] tracking-[-0.04em] sm:text-6xl lg:text-[68px]">
            Transforme a forma como{" "}
            <span className="kodela-gradient-text">
              sua empresa trabalha.
            </span>
          </h1>

          <p className="mt-7 max-w-xl text-lg leading-8 text-[#A7AFBF]">
            Criamos sites, sistemas e automações sob medida para tornar sua
            empresa mais ágil, organizada e preparada para crescer.
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a
              href="#contato"
              className="group flex items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-[#1747D1] to-[#21D4E8] px-6 py-4 font-semibold transition-all hover:-translate-y-1 hover:shadow-[0_15px_40px_rgba(36,107,255,0.25)]"
            >
              Quero melhorar minha empresa
              <ArrowRight
                size={18}
                className="transition-transform group-hover:translate-x-1"
              />
            </a>

            <a
              href="#solucoes"
              className="flex items-center justify-center rounded-lg border border-white/10 bg-white/[0.02] px-6 py-4 font-medium text-white transition-all hover:border-[#246BFF]/40 hover:bg-white/[0.04]"
            >
              Conhecer nossas soluções
            </a>
          </div>

          <div className="mt-7 flex items-center gap-2 text-sm text-[#7F899D]">
            <CheckCircle2 size={16} className="text-[#21D4E8]" />
            Tecnologia desenvolvida para resolver problemas reais.
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="relative mx-auto w-full max-w-[560px]"
        >
          <div className="absolute inset-0 rounded-full bg-[#246BFF]/10 blur-[100px]" />

          <div className="relative rounded-2xl border border-[#246BFF]/20 bg-[#0B1020]/90 p-4 shadow-[0_30px_100px_rgba(0,0,0,0.5)] backdrop-blur-xl">
            <div className="mb-4 flex items-center justify-between border-b border-white/5 pb-4">
              <div>
                <p className="text-xs text-[#69748B]">KODELA SYSTEM</p>
                <p className="mt-1 text-sm font-semibold">
                  Visão geral da operação
                </p>
              </div>

              <div className="flex items-center gap-2 rounded-full border border-[#21D4E8]/10 bg-[#21D4E8]/5 px-3 py-1.5 text-xs text-[#21D4E8]">
                <span className="h-1.5 w-1.5 rounded-full bg-[#21D4E8]" />
                Sistema ativo
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3">
              {[
                {
                  icon: BarChart3,
                  label: "Eficiência",
                  value: "94%",
                },
                {
                  icon: Zap,
                  label: "Automação",
                  value: "42",
                },
                {
                  icon: Database,
                  label: "Processos",
                  value: "87",
                },
                {
                  icon: CheckCircle2,
                  label: "Status",
                  value: "OK",
                },
              ].map((item, index) => {
                const Icon = item.icon;

                return (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      delay: 0.5 + index * 0.1,
                    }}
                    className="rounded-xl border border-white/5 bg-white/[0.025] p-4"
                  >
                    <Icon
                      size={18}
                      className="mb-5 text-[#4F8AFF]"
                    />

                    <p className="text-xs text-[#69748B]">
                      {item.label}
                    </p>

                    <p className="mt-1 text-xl font-bold">
                      {item.value}
                    </p>
                  </motion.div>
                );
              })}
            </div>

            <div className="mt-3 rounded-xl border border-white/5 bg-white/[0.025] p-4">
              <div className="mb-4 flex items-center justify-between">
                <p className="text-xs text-[#69748B]">
                  Performance operacional
                </p>

                <p className="text-xs text-[#21D4E8]">
                  +28.4%
                </p>
              </div>

              <div className="flex h-32 items-end gap-2">
                {[30, 42, 35, 60, 52, 75, 68, 92, 80, 100].map(
                  (height, index) => (
                    <motion.div
                      key={index}
                      initial={{ height: 0 }}
                      animate={{ height: `${height}%` }}
                      transition={{
                        duration: 0.7,
                        delay: 0.7 + index * 0.05,
                      }}
                      className="flex-1 rounded-t-sm bg-gradient-to-t from-[#1747D1] to-[#21D4E8] opacity-70"
                    />
                  )
                )}
              </div>
            </div>
          </div>

          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute -left-8 top-16 hidden rounded-xl border border-white/10 bg-[#0B1020]/90 p-4 shadow-2xl backdrop-blur-xl sm:block"
          >
            <Zap size={18} className="text-[#21D4E8]" />
            <p className="mt-2 text-xs text-[#69748B]">
              Automação
            </p>
            <p className="text-sm font-bold">+42 processos</p>
          </motion.div>

          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{
              duration: 4.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute -right-8 bottom-12 hidden rounded-xl border border-white/10 bg-[#0B1020]/90 p-4 shadow-2xl backdrop-blur-xl sm:block"
          >
            <CheckCircle2 size={18} className="text-[#21D4E8]" />
            <p className="mt-2 text-xs text-[#69748B]">
              Processos
            </p>
            <p className="text-sm font-bold">Mais organizados</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}