"use client";

import { motion } from "framer-motion";
import {
  ArrowUpRight,
  BarChart3,
  Globe2,
  Workflow,
} from "lucide-react";

const projects = [
  {
    icon: BarChart3,
    category: "SISTEMA DE GESTÃO",
    title: "Centralização de processos",
    description:
      "Uma solução para centralizar informações e tornar uma operação mais organizada.",
  },
  {
    icon: Workflow,
    category: "AUTOMAÇÃO",
    title: "Processos automatizados",
    description:
      "Automação de tarefas repetitivas para reduzir trabalho manual e retrabalho.",
  },
  {
    icon: Globe2,
    category: "SITE PROFISSIONAL",
    title: "Presença digital",
    description:
      "Uma experiência digital construída para transmitir credibilidade e gerar oportunidades.",
  },
];

export default function Projects() {
  return (
    <section id="projetos" className="section-padding">
      <div className="kodela-container">
        <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
          <div>
            <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-[#4F8AFF]">
              Projetos
            </p>

            <h2 className="text-3xl font-bold tracking-tight sm:text-5xl">
              Tecnologia aplicada a{" "}
              <span className="kodela-gradient-text">
                problemas reais.
              </span>
            </h2>
          </div>

          <p className="max-w-md leading-7 text-[#A7AFBF]">
            Estrutura preparada para apresentar os projetos e resultados da
            Kodela conforme o portfólio crescer.
          </p>
        </div>

        <div className="mt-14 grid gap-5 lg:grid-cols-3">
          {projects.map((project, index) => {
            const Icon = project.icon;

            return (
              <motion.article
                key={project.title}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
                className="group overflow-hidden rounded-2xl border border-white/5 bg-[#0B1020]"
              >
                <div className="relative flex aspect-[16/10] items-center justify-center overflow-hidden border-b border-white/5 bg-[#070A12]">
                  <div className="absolute inset-0 kodela-grid opacity-60" />

                  <div className="absolute h-40 w-40 rounded-full bg-[#1747D1]/10 blur-[70px]" />

                  <div className="relative w-[70%] rounded-xl border border-[#246BFF]/20 bg-[#0B1020] p-4 shadow-2xl transition-transform duration-500 group-hover:scale-105">
                    <div className="flex items-center justify-between">
                      <div className="h-2 w-20 rounded-full bg-white/10" />
                      <div className="h-2 w-2 rounded-full bg-[#21D4E8]" />
                    </div>

                    <div className="mt-5 grid grid-cols-3 gap-2">
                      {[1, 2, 3].map((item) => (
                        <div
                          key={item}
                          className="h-16 rounded-lg border border-white/5 bg-white/[0.02]"
                        />
                      ))}
                    </div>

                    <div className="mt-2 h-16 rounded-lg bg-gradient-to-r from-[#1747D1]/10 to-[#21D4E8]/5" />
                  </div>
                </div>

                <div className="p-7">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-xs font-semibold tracking-wider text-[#4F8AFF]">
                      <Icon size={14} />
                      {project.category}
                    </div>

                    <ArrowUpRight
                      size={17}
                      className="text-[#39445B] transition-colors group-hover:text-[#21D4E8]"
                    />
                  </div>

                  <h3 className="mt-5 text-xl font-semibold">
                    {project.title}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-[#7F899D]">
                    {project.description}
                  </p>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}