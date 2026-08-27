"use client";

import { motion } from "framer-motion";
import {
  Search,
  ScanSearch,
  ClipboardList,
  Code2,
  RefreshCw,
} from "lucide-react";

const steps = [
  {
    number: "01",
    icon: Search,
    title: "Entendemos",
    description:
      "Conhecemos sua empresa, seus objetivos e como seus processos funcionam hoje.",
  },
  {
    number: "02",
    icon: ScanSearch,
    title: "Identificamos",
    description:
      "Encontramos gargalos, tarefas repetitivas e oportunidades de melhoria.",
  },
  {
    number: "03",
    icon: ClipboardList,
    title: "Planejamos",
    description:
      "Definimos a melhor solução para resolver o problema de forma eficiente.",
  },
  {
    number: "04",
    icon: Code2,
    title: "Desenvolvemos",
    description:
      "Construímos a solução utilizando tecnologias modernas e boas práticas.",
  },
  {
    number: "05",
    icon: RefreshCw,
    title: "Evoluímos",
    description:
      "A solução pode acompanhar o crescimento e as novas necessidades da empresa.",
  },
];

export default function Process() {
  return (
    <section id="processo" className="section-padding bg-[#0B1020]/30">
      <div className="kodela-container">
        <div className="mx-auto max-w-2xl text-center">
          <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-[#4F8AFF]">
            Processo
          </p>

          <h2 className="text-3xl font-bold tracking-tight sm:text-5xl">
            Do problema à{" "}
            <span className="kodela-gradient-text">
              solução.
            </span>
          </h2>

          <p className="mt-5 leading-7 text-[#A7AFBF]">
            Um processo simples para transformar uma necessidade em uma
            solução digital.
          </p>
        </div>

        <div className="relative mt-16">
          <div className="absolute left-[10%] right-[10%] top-7 hidden h-px bg-gradient-to-r from-transparent via-[#246BFF]/30 to-transparent lg:block" />

          <div className="grid gap-10 lg:grid-cols-5">
            {steps.map((step, index) => {
              const Icon = step.icon;

              return (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.08 }}
                  className="relative text-center"
                >
                  <div className="relative z-10 mx-auto flex h-14 w-14 items-center justify-center rounded-full border border-[#246BFF]/20 bg-[#0B1020] text-[#4F8AFF] shadow-[0_0_30px_rgba(36,107,255,0.08)]">
                    <Icon size={20} />
                  </div>

                  <p className="mt-6 text-xs font-bold tracking-widest text-[#21D4E8]">
                    {step.number}
                  </p>

                  <h3 className="mt-2 font-semibold">
                    {step.title}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-[#69748B]">
                    {step.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}