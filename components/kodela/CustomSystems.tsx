"use client";

import { motion } from "framer-motion";
import {
  Check,
  ArrowRight,
  Workflow,
  Database,
  Users,
  BarChart3,
} from "lucide-react";

export default function CustomSystems() {
  return (
    <section className="section-padding relative overflow-hidden">
      <div className="absolute inset-0 kodela-grid opacity-40" />

      <div className="kodela-container relative">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-[#4F8AFF]">
              Sistemas sob medida
            </p>

            <h2 className="text-4xl font-bold tracking-tight sm:text-5xl">
              Sua empresa não precisa se adaptar ao sistema.
            </h2>

            <h3 className="mt-4 text-3xl font-bold text-[#21D4E8]">
              O sistema pode se adaptar à sua empresa.
            </h3>

            <p className="mt-6 max-w-xl leading-7 text-[#A7AFBF]">
              Entendemos como sua empresa trabalha, identificamos gargalos e
              desenvolvemos uma solução alinhada aos seus processos.
            </p>

            <div className="mt-8 space-y-4">
              {[
                "Seu processo",
                "Sua operação",
                "Sua necessidade",
                "Sua solução",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-3 text-sm text-[#C5CBD7]"
                >
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#246BFF]/10">
                    <Check size={14} className="text-[#21D4E8]" />
                  </span>
                  {item}
                </div>
              ))}
            </div>

            <a
              href="#contato"
              className="mt-9 inline-flex items-center gap-2 rounded-lg bg-white px-5 py-3.5 text-sm font-semibold text-[#070A12] transition-all hover:-translate-y-0.5"
            >
              Quero uma solução sob medida
              <ArrowRight size={17} />
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="absolute inset-0 rounded-full bg-[#1747D1]/10 blur-[100px]" />

            <div className="relative rounded-3xl border border-[#246BFF]/20 bg-[#0B1020]/90 p-5 shadow-[0_30px_100px_rgba(0,0,0,0.4)]">
              <div className="rounded-2xl border border-white/5 bg-[#070A12] p-5">
                <div className="flex items-center justify-between border-b border-white/5 pb-4">
                  <div>
                    <p className="text-xs text-[#69748B]">
                      SISTEMA PERSONALIZADO
                    </p>

                    <p className="mt-1 font-semibold">
                      Gestão da operação
                    </p>
                  </div>

                  <div className="h-2 w-2 rounded-full bg-[#21D4E8] shadow-[0_0_12px_#21D4E8]" />
                </div>

                <div className="mt-5 grid gap-3 sm:grid-cols-2">
                  {[
                    {
                      icon: Workflow,
                      title: "Processos",
                      text: "Fluxos personalizados",
                    },
                    {
                      icon: Database,
                      title: "Dados",
                      text: "Informações centralizadas",
                    },
                    {
                      icon: Users,
                      title: "Equipe",
                      text: "Acessos organizados",
                    },
                    {
                      icon: BarChart3,
                      title: "Resultados",
                      text: "Indicadores claros",
                    },
                  ].map((item) => {
                    const Icon = item.icon;

                    return (
                      <div
                        key={item.title}
                        className="rounded-xl border border-white/5 bg-white/[0.02] p-4"
                      >
                        <Icon
                          size={18}
                          className="text-[#4F8AFF]"
                        />

                        <p className="mt-4 text-sm font-semibold">
                          {item.title}
                        </p>

                        <p className="mt-1 text-xs text-[#69748B]">
                          {item.text}
                        </p>
                      </div>
                    );
                  })}
                </div>

                <div className="mt-3 h-20 rounded-xl border border-[#246BFF]/10 bg-gradient-to-r from-[#1747D1]/10 to-[#21D4E8]/5 p-4">
                  <div className="flex h-full items-center justify-between">
                    <div>
                      <p className="text-xs text-[#69748B]">
                        Sua operação
                      </p>
                      <p className="mt-1 text-sm font-semibold">
                        Conectada em um único lugar
                      </p>
                    </div>

                    <ArrowRight className="text-[#21D4E8]" />
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}