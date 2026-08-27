"use client";

import { motion } from "framer-motion";
import {
  FileText,
  Table2,
  TrendingUp,
  Settings,
  Workflow,
  Globe,
} from "lucide-react";

const audience = [
  {
    icon: FileText,
    text: "Empresas que ainda dependem muito de papel",
  },
  {
    icon: Table2,
    text: "Empresas que utilizam muitas planilhas",
  },
  {
    icon: TrendingUp,
    text: "Empresas em crescimento",
  },
  {
    icon: Settings,
    text: "Empresas que precisam de sistemas próprios",
  },
  {
    icon: Workflow,
    text: "Empresas que querem automatizar processos",
  },
  {
    icon: Globe,
    text: "Empresas que querem melhorar sua presença digital",
  },
];

export default function Audience() {
  return (
    <section className="section-padding bg-[#0B1020]/30">
      <div className="kodela-container">
        <div className="mx-auto max-w-2xl text-center">
          <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-[#4F8AFF]">
            Para quem é
          </p>

          <h2 className="text-3xl font-bold tracking-tight sm:text-5xl">
            A Kodela é para empresas que{" "}
            <span className="kodela-gradient-text">
              querem evoluir.
            </span>
          </h2>
        </div>

        <div className="mx-auto mt-14 grid max-w-4xl gap-3 md:grid-cols-2">
          {audience.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.text}
                initial={{ opacity: 0, x: index % 2 === 0 ? -15 : 15 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="kodela-card flex items-center gap-4 rounded-xl p-5"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#246BFF]/5 text-[#4F8AFF]">
                  <Icon size={18} />
                </div>

                <p className="text-sm text-[#B7BFCE]">
                  {item.text}
                </p>
              </motion.div>
            );
          })}
        </div>

        <p className="mx-auto mt-10 max-w-2xl text-center text-lg leading-8 text-[#A7AFBF]">
          Se existe um processo que pode ser melhorado, existe uma
          oportunidade para a tecnologia ajudar.
        </p>
      </div>
    </section>
  );
}