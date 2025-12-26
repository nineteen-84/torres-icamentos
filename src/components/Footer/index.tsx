export const Footer = () => {
  return (
    <footer className="bg-[url('/footer.png')] bg-cover bg-center">
      <div className="container mx-auto px-4 pb-10 pt-10 md:px-[60px]">
        <div className="mt-24 flex flex-col items-center gap-12 md:flex-row md:gap-[200px]">
          <div className="shrink-0">
            <img src="logo.png" alt="Torres Içamentos Logo" className="max-w-[200px]" />
          </div>

          <div className="grid w-full grid-cols-1 gap-12 md:grid-cols-3 md:gap-20">
            <div className="min-w-0">
              <h2 className="mb-4 text-lg font-bold text-white">Endereço</h2>

              <div className="space-y-3 text-white/80">
                <p className="flex items-center gap-2">
                  <img src="map.png" alt="Localização" className="h-4 w-4" />
                  R. Rosa Ruas Dias, 20
                </p>

                <p className="flex items-start gap-2">
                  <img src="email.png" alt="Email" className="mt-0.5 h-4 w-4 flex-shrink-0" />
                  <a
                    href="mailto:torresicamentos@gmail.com"
                    className="min-w-0 break-all text-white/80 transition-colors hover:text-white hover:underline"
                  >
                    torresicamentos@gmail.com
                  </a>
                </p>

                <p className="flex items-start gap-2">
                  <span>
                    Atendimento de segunda a sexta-feira<br />
                    08:30 às 12:00 • 13:00 às 17:30
                  </span>
                </p>

                <p className="flex items-center gap-2 text-sm text-white/60">
                  CNPJ 19.692.721/0001-38
                </p>
              </div>
            </div>

            <div>
              <h2 className="mb-4 text-lg font-bold text-white">Navegação</h2>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#"
                    className="text-white/80 transition-colors hover:text-white hover:underline"
                  >
                    Início
                  </a>
                </li>
                <li>
                  <a
                    href="#trabalhos"
                    className="text-white/80 transition-colors hover:text-white hover:underline"
                  >
                    Trabalhos
                  </a>
                </li>
                <li>
                  <a
                    href="#parceiros"
                    className="text-white/80 transition-colors hover:text-white hover:underline"
                  >
                    Parceiros
                  </a>
                </li>
                <li>
                  <a
                    href="#sobre"
                    className="text-white/80 transition-colors hover:text-white hover:underline"
                  >
                    Sobre
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h2 className="mb-4 text-lg font-bold text-white">Newsletter</h2>
              <form className="mb-6">
                <div className="space-y-2">
                  <label htmlFor="newsletter-email" className="block text-sm text-white/80">
                    Receba novidades
                  </label>
                  <input
                    type="email"
                    id="newsletter-email"
                    placeholder="Seu email"
                    className="w-full rounded border border-white/20 bg-white/10 px-3 py-2 text-white placeholder-white/60 backdrop-blur-sm focus:border-white/40 focus:outline-none focus:ring-1 focus:ring-white/20"
                  />
                  <button
                    type="submit"
                    className="w-full rounded bg-[#DC143C] py-2 text-white transition-colors duration-200 hover:bg-[#B91C3C]"
                  >
                    Inscrever-se
                  </button>
                </div>
              </form>

              <div>
                <h3 className="mb-3 text-sm font-medium text-white">Siga-nos</h3>
                <div className="flex gap-3">
                  <a
                    href="https://www.facebook.com/torresicamentos/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="transition-transform hover:scale-110"
                    aria-label="Facebook"
                  >
                    <img src="face.png" alt="Facebook" className="h-6 w-6" />
                  </a>

                  <a
                    href="https://www.instagram.com/icamento_torres?igsh=MWo5Zjd4b2lzamNjeQ=="
                    target="_blank"
                    rel="noopener noreferrer"
                    className="transition-transform hover:scale-110"
                    aria-label="Instagram"
                  >
                    <img src="insta.png" alt="Instagram" className="h-6 w-6" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-4 py-4 md:px-[120px]">
          <div className="flex flex-col items-center justify-between gap-4 text-sm md:flex-row">
            <p className="text-white/60">© 2025 Torres Içamentos. Todos os Direitos Reservados.</p>
            <a
              href="https://github.com/nineteen-84"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-1 text-white/60 transition-all duration-300 hover:text-white"
            >
              <span>Desenvolvido por</span>
              <span className="font-semibold text-[#DC143C] transition-colors duration-300 group-hover:text-white">
                NN84
              </span>
              <span className="text-xs">©.</span>
            </a>
            {/* <nav className="flex gap-6">
                <a
                  href="#"
                  className="text-white/60 transition-colors hover:text-white hover:underline"
                >
                  Política de Privacidade
                </a>
                <a
                  href="#"
                  className="text-white/60 transition-colors hover:text-white hover:underline"
                >
                  Termos de Uso
                </a>
              </nav> */}
          </div>
        </div>
      </div>
    </footer>
  );
};
