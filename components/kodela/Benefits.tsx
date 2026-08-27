"use client";

import { motion } from "framer-motion";
import {
  Clock,
  Gauge,
  ShieldCheck,
  CircleCheck,
  TrendingDown,
  Eye,
} from "lucide-react";

const benefits = [
  {
    number: "01",
    icon: Clock,
    title: "Mais tempo",
    description:
      "Automatize tarefas repetitivas e libere sua equipe para focar no que realmente importa.",
  },
  {
    number: "02",
    icon: Gauge,
    title: "Mais agilidade",
    description:
      "Tenha processos mais rápidos e informações acessíveis quando precisar.",
  },
  {
    number: "03",
    icon: ShieldCheck,
    title: "Mais profissionalismo",
    description:
      "Uma presença digital e ferramentas que acompanham o nível da sua empresa.",
  },
  {
    number: "04",
    icon: CircleCheck,
    title: "Menos erros",
    description:
      "Reduza falhas causadas por processos manuais e informações desencontradas.",
  },
  {
    number: "05",
    icon: TrendingDown,
    title: "Menos prejuízos",
    description:
      "Diminua retrabalho, desperdícios e problemas causados pela falta de organização.",
  },
  {
    number: "06",
    icon: Eye,
    title: "Mais controle",
    description:
      "Centralize informações e tenha uma visão mais clara da operação do seu negócio.",
  },
];

export default function Benefits() {
  return (
    <section
      id="beneficios"
      className="section-padding bg-[#0B1020]/30"
    >
      <div className="kodela-container">
        <div className="mx-auto max-w-2xl text-center">
          <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-[#4F8AFF]">
            Benefícios
          </p>

          <h2 className="text-3xl font-bold tracking-tight sm:text-5xl">
            O que muda quando sua empresa{" "}
            <span className="kodela-gradient-text">
              trabalha melhor?
            </span>
          </h2>

          <p className="mt-5 leading-7 text-[#A7AFBF]">
            Tecnologia não é apenas sobre ter um sistema. É sobre melhorar a
            maneira como sua empresa funciona.
          </p>
        </div>

        <div className="mt-14 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;

            return (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="kodela-card rounded-2xl p-7 transition-all duration-300 hover:-translate-y-1"
              >
                <div className="flex items-start justify-between">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#246BFF]/5 text-[#4F8AFF]">
                    <Icon size={21} />
                  </div>

                  <span className="text-xs font-medium text-[#3E4960]">
                    {benefit.number}
                  </span>
                </div>

                <h3 className="mt-7 text-lg font-semibold">
                  {benefit.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-[#7F899D]">
                  {benefit.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}