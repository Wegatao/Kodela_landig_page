"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const questions = [
  {
    question: "Vocês criam sistemas personalizados?",
    answer:
      "Sim. Desenvolvemos sistemas de acordo com os processos e necessidades específicas de cada empresa.",
  },
  {
    question: "A Kodela trabalha apenas com sistemas?",
    answer:
      "Não. Criamos sites, plataformas, SaaS, ERPs, automações e outras soluções digitais.",
  },
  {
    question: "Preciso saber exatamente o que minha empresa precisa?",
    answer:
      "Não. Podemos entender seus processos e identificar oportunidades onde a tecnologia pode gerar melhorias.",
  },
  {
    question:
      "Vocês conseguem automatizar processos que hoje são feitos manualmente?",
    answer:
      "Sim. Podemos analisar tarefas repetitivas e avaliar quais delas podem ser automatizadas.",
  },
  {
    question: "Minha empresa usa muitas planilhas. A Kodela pode ajudar?",
    answer:
      "Sim. Podemos transformar processos baseados em planilhas em soluções mais organizadas e centralizadas.",
  },
  {
    question: "Como começo?",
    answer:
      "O primeiro passo é conversar conosco sobre sua empresa, seus desafios e seus objetivos.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="section-padding">
      <div className="kodela-container">
        <div className="mx-auto max-w-2xl text-center">
          <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-[#4F8AFF]">
            FAQ
          </p>

          <h2 className="text-3xl font-bold tracking-tight sm:text-5xl">
            Perguntas{" "}
            <span className="kodela-gradient-text">
              frequentes.
            </span>
          </h2>
        </div>

        <div className="mx-auto mt-14 max-w-3xl space-y-3">
          {questions.map((item, index) => {
            const isOpen = open === index;

            return (
              <div
                key={item.question}
                className="overflow-hidden rounded-xl border border-white/5 bg-[#0B1020]"
              >
                <button
                  onClick={() =>
                    setOpen(isOpen ? null : index)
                  }
                  className="flex w-full items-center justify-between gap-5 p-5 text-left"
                >
                  <span className="font-medium">
                    {item.question}
                  </span>

                  <ChevronDown
                    size={19}
                    className={`shrink-0 text-[#69748B] transition-transform ${
                      isOpen ? "rotate-180 text-[#21D4E8]" : ""
                    }`}
                  />
                </button>

                <div
                  className={`grid transition-all duration-300 ${
                    isOpen
                      ? "grid-rows-[1fr] opacity-100"
                      : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="border-t border-white/5 px-5 pb-5 pt-4 text-sm leading-6 text-[#7F899D]">
                      {item.answer}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}