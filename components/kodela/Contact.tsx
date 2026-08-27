"use client";

import { FormEvent, useState } from "react";
import {
  ArrowRight,
  Mail,
  MessageCircle,
  Send,
} from "lucide-react";

export default function Contact() {
  const [sent, setSent] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    setSent(true);
  }

  return (
    <section id="contato" className="section-padding bg-[#0B1020]/30">
      <div className="kodela-container">
        <div className="grid gap-12 lg:grid-cols-[.8fr_1.2fr]">
          <div>
            <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-[#4F8AFF]">
              Contato
            </p>

            <h2 className="text-4xl font-bold tracking-tight sm:text-5xl">
              Vamos conversar sobre o seu{" "}
              <span className="kodela-gradient-text">
                desafio?
              </span>
            </h2>

            <p className="mt-6 leading-7 text-[#A7AFBF]">
              Conte para a Kodela qual desafio sua empresa enfrenta. Vamos
              conversar sobre como a tecnologia pode transformar esse processo.
            </p>

            <div className="mt-9 space-y-4">
              <div className="flex items-center gap-4">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#246BFF]/5 text-[#4F8AFF]">
                  <MessageCircle size={19} />
                </div>

                <div>
                  <p className="text-sm font-medium">
                    WhatsApp
                  </p>
                  <p className="text-sm text-[#69748B]">
                    Vamos conversar
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#246BFF]/5 text-[#4F8AFF]">
                  <Mail size={19} />
                </div>

                <div>
                  <p className="text-sm font-medium">
                    E-mail
                  </p>
                  <p className="text-sm text-[#69748B]">
                    Entre em contato
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="rounded-2xl border border-white/5 bg-[#0B1020] p-6 sm:p-8">
            {sent ? (
              <div className="flex min-h-[480px] flex-col items-center justify-center text-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#21D4E8]/10">
                  <Send className="text-[#21D4E8]" />
                </div>

                <h3 className="mt-6 text-2xl font-bold">
                  Mensagem recebida.
                </h3>

                <p className="mt-3 max-w-sm text-[#7F899D]">
                  Recebemos sua mensagem. Em breve entraremos em contato.
                </p>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="space-y-5"
              >
                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label className="mb-2 block text-sm text-[#A7AFBF]">
                      Nome
                    </label>

                    <input
                      required
                      type="text"
                      placeholder="Seu nome"
                      className="w-full rounded-lg border border-white/10 bg-[#070A12] px-4 py-3.5 text-sm outline-none transition focus:border-[#246BFF]/60"
                    />
                  </div>

                  <div>
                    <label className="mb-2 block text-sm text-[#A7AFBF]">
                      Empresa
                    </label>

                    <input
                      type="text"
                      placeholder="Nome da empresa"
                      className="w-full rounded-lg border border-white/10 bg-[#070A12] px-4 py-3.5 text-sm outline-none transition focus:border-[#246BFF]/60"
                    />
                  </div>
                </div>

                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label className="mb-2 block text-sm text-[#A7AFBF]">
                      WhatsApp
                    </label>

                    <input
                      required
                      type="tel"
                      placeholder="(00) 00000-0000"
                      className="w-full rounded-lg border border-white/10 bg-[#070A12] px-4 py-3.5 text-sm outline-none transition focus:border-[#246BFF]/60"
                    />
                  </div>

                  <div>
                    <label className="mb-2 block text-sm text-[#A7AFBF]">
                      E-mail
                    </label>

                    <input
                      required
                      type="email"
                      placeholder="seu@email.com"
                      className="w-full rounded-lg border border-white/10 bg-[#070A12] px-4 py-3.5 text-sm outline-none transition focus:border-[#246BFF]/60"
                    />
                  </div>
                </div>

                <div>
                  <label className="mb-2 block text-sm text-[#A7AFBF]">
                    Qual o principal desafio da sua empresa?
                  </label>

                  <textarea
                    required
                    rows={4}
                    placeholder="Conte um pouco sobre o que você gostaria de melhorar..."
                    className="w-full resize-none rounded-lg border border-white/10 bg-[#070A12] px-4 py-3.5 text-sm outline-none transition focus:border-[#246BFF]/60"
                  />
                </div>

                <button
                  type="submit"
                  className="group flex w-full items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-[#1747D1] to-[#21D4E8] px-5 py-4 font-semibold transition-all hover:-translate-y-0.5 hover:shadow-[0_15px_40px_rgba(36,107,255,0.2)]"
                >
                  Enviar mensagem

                  <ArrowRight
                    size={18}
                    className="transition-transform group-hover:translate-x-1"
                  />
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}