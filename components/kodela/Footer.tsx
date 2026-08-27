export default function Footer() {
  return (
    <footer className="border-t border-white/5 bg-[#070A12]">
      <div className="kodela-container py-10">
        <div className="flex flex-col justify-between gap-8 md:flex-row md:items-center">
          <div>
            <a
              href="#inicio"
              className="flex items-center gap-2"
            >
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-[#1747D1] to-[#21D4E8] text-sm font-bold">
                K
              </div>

              <span className="font-bold">
                Kodela
              </span>
            </a>

            <p className="mt-3 text-sm text-[#69748B]">
              Tecnologia para empresas que querem evoluir.
            </p>
          </div>

          <nav className="flex flex-wrap gap-x-6 gap-y-3 text-sm text-[#69748B]">
            <a href="#inicio" className="hover:text-white">
              Início
            </a>

            <a href="#solucoes" className="hover:text-white">
              Soluções
            </a>

            <a href="#beneficios" className="hover:text-white">
              Benefícios
            </a>

            <a href="#projetos" className="hover:text-white">
              Projetos
            </a>

            <a href="#sobre" className="hover:text-white">
              Sobre
            </a>

            <a href="#contato" className="hover:text-white">
              Contato
            </a>
          </nav>
        </div>

        <div className="mt-8 border-t border-white/5 pt-6">
          <p className="text-xs text-[#4E586B]">
            © 2026 Kodela. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}