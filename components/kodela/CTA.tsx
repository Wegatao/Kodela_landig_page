"use client";

import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";

export default function CTA() {
  return (
    <section className="py-10">
      <div className="kodela-container">
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative overflow-hidden rounded-3xl border border-[#246BFF]/20 bg-gradient-to-br from-[#111A3A] via-[#0B1020] to-[#0B1020] p-8 sm:p-12"
        >
          <div className="absolute right-0 top-0 h-64 w-64 rounded-full bg-[#21D4E8]/10 blur-[100px]" />

          <div className="relative z-10 flex flex-col justify-between gap-8 lg:flex-row lg:items-center">
            <div>
              <div className="mb-5 flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#21D4E8]">
                <Sparkles size={15} />
                Vamos conversar
              </div>

              <h2 className="max-w-3xl text-3xl font-bold tracking-tight sm:text-4xl">
                Existe algum processo na sua empresa que poderia funcionar
                melhor?
              </h2>

              <p className="mt-4 text-[#A7AFBF]">
                Vamos descobrir como a tecnologia pode ajudar.
              </p>
            </div>

            <a
              href="#contato"
              className="group flex shrink-0 items-center justify-center gap-2 rounded-lg bg-white px-6 py-4 font-semibold text-[#070A12] transition-all hover:-translate-y-1"
            >
              Falar com a Kodela
              <ArrowRight
                size={18}
                className="transition-transform group-hover:translate-x-1"
              />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}