"use client";

import { motion } from "framer-motion";
import {
  FileSpreadsheet,
  Repeat2,
  AlertTriangle,
  Layers3,
  Clock3,
  Settings2,
} from "lucide-react";

const problems = [
  {
    icon: Clock3,
    title: "Processos manuais",
    description:
      "Tarefas que poderiam ser executadas de forma muito mais rápida.",
  },
  {
    icon: FileSpreadsheet,
    title: "Planilhas espalhadas",
    description:
      "Informações importantes distribuídas em vários arquivos e lugares.",
  },
  {
    icon: Repeat2,
    title: "Trabalho repetitivo",
    description:
      "Sua equipe gastando energia em tarefas que poderiam ser automatizadas.",
  },
  {
    icon: Layers3,
    title: "Falta de controle",
    description:
      "Dificuldade para acompanhar informações, processos e resultados.",
  },
  {
    icon: AlertTriangle,
    title: "Erros humanos",
    description:
      "Falhas que podem gerar retrabalho, perda de tempo e prejuízos.",
  },
  {
    icon: Settings2,
    title: "Sistemas que não acompanham",
    description:
      "Ferramentas genéricas que não foram pensadas para a realidade da empresa.",
  },
];

export default function Problems() {
  return (
    <section className="section-padding relative" id="problemas">
      <div className="kodela-container">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-2xl"
        >
          <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-[#4F8AFF]">
            O problema
          </p>

          <h2 className="text-3xl font-bold tracking-tight sm:text-5xl">
            Quanto tempo sua empresa perde fazendo o que poderia ser automático?
          </h2>

          <p className="mt-5 leading-7 text-[#A7AFBF]">
            Papéis, planilhas, processos repetitivos e informações espalhadas
            podem consumir tempo, gerar erros e dificultar o crescimento da
            sua empresa.
          </p>
        </motion.div>

        <div className="mt-14 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {problems.map((problem, index) => {
            const Icon = problem.icon;

            return (
              <motion.div
                key={problem.title}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.06 }}
                className="kodela-card group rounded-2xl p-7 transition-all duration-300"
              >
                <div className="mb-8 flex h-11 w-11 items-center justify-center rounded-xl border border-[#246BFF]/15 bg-[#246BFF]/5 text-[#4F8AFF] transition-all group-hover:bg-[#246BFF]/10 group-hover:text-[#21D4E8]">
                  <Icon size={21} />
                </div>

                <h3 className="text-lg font-semibold">
                  {problem.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-[#7F899D]">
                  {problem.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}