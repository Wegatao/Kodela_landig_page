"use client";

import { motion } from "framer-motion";
import {
  Building2,
  MousePointer2,
  Target,
  Layers,
} from "lucide-react";

const differentials = [
  {
    icon: Building2,
    title: "Feita para o seu negócio",
    description:
      "Não entregamos soluções genéricas quando seu problema exige algo específico.",
  },
  {
    icon: MousePointer2,
    title: "Simples de usar",
    description:
      "Tecnologia poderosa não precisa ser complicada para quem utiliza.",
  },
  {
    icon: Target,
    title: "Foco no resultado",
    description:
      "O objetivo não é simplesmente entregar software. É melhorar o processo.",
  },
  {
    icon: Layers,
    title: "Construída para evoluir",
    description:
      "As soluções devem acompanhar o crescimento e as novas necessidades da empresa.",
  },
];

export default function Differentials() {
  return (
    <section className="section-padding">
      <div className="kodela-container">
        <div className="mx-auto max-w-2xl text-center">
          <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-[#4F8AFF]">
            Diferenciais
          </p>

          <h2 className="text-3xl font-bold tracking-tight sm:text-5xl">
            Tecnologia sem{" "}
            <span className="kodela-gradient-text">
              complicação.
            </span>
          </h2>

          <p className="mt-5 leading-7 text-[#A7AFBF]">
            Acreditamos que uma boa solução tecnológica precisa resolver
            problemas, não criar novos.
          </p>
        </div>

        <div className="mt-14 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {differentials.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.07 }}
                className="rounded-2xl border border-white/5 bg-[#0B1020] p-7"
              >
                <Icon
                  size={22}
                  className="text-[#21D4E8]"
                />

                <h3 className="mt-8 font-semibold">
                  {item.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-[#7F899D]">
                  {item.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}