import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Kodela | Tecnologia para empresas que querem evoluir",
  description:
    "A Kodela cria sites, sistemas sob medida, SaaS, ERPs e automações para ajudar empresas a ganhar tempo, reduzir erros e trabalhar melhor.",
  keywords: [
    "Kodela",
    "desenvolvimento de software",
    "sistemas sob medida",
    "SaaS",
    "ERP",
    "automação",
    "sites profissionais",
    "software para empresas",
  ],
  openGraph: {
    title: "Kodela | Tecnologia para empresas que querem evoluir",
    description:
      "Transformamos problemas reais de negócios em soluções digitais.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}