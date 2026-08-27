"use client";

import { motion } from "framer-motion";
import {
  Globe2,
  Blocks,
  Rocket,
  LayoutDashboard,
  Workflow,
  Sparkles,
  ArrowUpRight,
} from "lucide-react";

const solutions = [
  {
    icon: Globe2,
    title: "Sites profissionais",
    description:
      "Uma presença digital moderna para transmitir credibilidade, profissionalismo e posicionar sua empresa no mercado.",
  },
  {
    icon: Blocks,
    title: "Sistemas sob medida",
    description:
      "Sistemas desenvolvidos especificamente para os processos e necessidades do seu negócio.",
  },
  {
    icon: Rocket,
    title: "SaaS",
    description:
      "Plataformas digitais preparadas para transformar ideias em produtos escaláveis.",
  },
  {
    icon: LayoutDashboard,
    title: "ERPs e sistemas de gestão",
    description:
      "Centralize processos, informações e operações em uma única solução.",
  },
  {
    icon: Workflow,
    title: "Automações",
    description:
      "Automatize tarefas repetitivas e permita que sua equipe foque no que realmente gera valor.",
  },
  {
    icon: Sparkles,
    title: "Soluções personalizadas",
    description:
      "Existe um problema específico? Podemos transformar esse problema em uma solução digital.",
  },
];

export default function Solutions() {
  return (
    <section id="solucoes" className="section-padding">
      <div className="kodela-container">
        <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
          <div className="max-w-2xl">
            <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-[#4F8AFF]">
              Soluções
            </p>

            <h2 className="text-3xl font-bold tracking-tight sm:text-5xl">
              Tecnologia criada para a{" "}
              <span className="kodela-gradient-text">
                realidade da sua empresa.
              </span>
            </h2>
          </div>

          <p className="max-w-md leading-7 text-[#A7AFBF]">
            Cada empresa possui desafios diferentes. Por isso, desenvolvemos
            soluções de acordo com as necessidades e processos de cada negócio.
          </p>
        </div>

        <div className="mt-14 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {solutions.map((solution, index) => {
            const Icon = solution.icon;

            return (
              <motion.div
                key={solution.title}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.06 }}
                className="kodela-card group relative overflow-hidden rounded-2xl p-7 transition-all duration-300"
              >
                <div className="absolute -right-10 -top-10 h-28 w-28 rounded-full bg-[#246BFF]/5 blur-2xl transition-all group-hover:bg-[#21D4E8]/10" />

                <div className="relative">
                  <div className="flex items-center justify-between">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-[#246BFF]/15 bg-[#246BFF]/5 text-[#4F8AFF]">
                      <Icon size={22} />
                    </div>

                    <ArrowUpRight
                      size={18}
                      className="text-[#39445B] transition-colors group-hover:text-[#21D4E8]"
                    />
                  </div>

                  <h3 className="mt-9 text-xl font-semibold">
                    {solution.title}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-[#7F899D]">
                    {solution.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}