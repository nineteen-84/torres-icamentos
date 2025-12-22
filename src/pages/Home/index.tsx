import { ArrowBigDown, Mail, MapPin, Menu, Phone, User, X } from "lucide-react";
import { useEffect, useState } from "react";
import { Typewriter } from "react-simple-typewriter";
import { Fragment } from "react/jsx-runtime";
import { Loading } from "../../components/Loading";

export const Home = () => {
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 5500);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Loading />;
  }

  return (
    <Fragment>
      {/* Home */}
      <main className="flex min-h-screen flex-col bg-[url('/main.jpg')] bg-cover bg-center bg-no-repeat">
        <header className="relative mx-6 mt-6 lg:mx-0 lg:mt-0 lg:flex lg:justify-center lg:p-8">
          <div className="flex items-center justify-between lg:hidden">
            <img className="h-12 rounded-sm border border-gray-600" src="logo.png" alt="Logo" />

            <button
              onClick={() => setOpen(!open)}
              className="fixed right-6 top-6 z-50 rounded-full bg-black/20 p-3 text-white backdrop-blur-sm transition-all duration-300 hover:scale-110 hover:bg-white hover:text-black active:scale-95"
            >
              <div
                className={`transition-transform duration-300 ${open ? "rotate-90" : "rotate-0"}`}
              >
                {open ? <X size={20} /> : <Menu size={20} />}
              </div>
            </button>
          </div>

          <nav
            className={`fixed inset-0 z-40 flex flex-col items-center justify-center gap-10 bg-black/95 transition-all duration-300 ${open ? "opacity-100" : "pointer-events-none opacity-0"} lg:pointer-events-auto lg:static lg:z-auto lg:flex lg:flex-row lg:gap-10 lg:bg-transparent lg:opacity-100`}
          >
            {["Trabalhos", "Parceiros", "Sobre", "Contato"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                onClick={() => setOpen(false)}
                className="w-28 rounded-full px-4 py-2 text-center text-white transition-all duration-300 hover:bg-white hover:text-black hover:shadow-md lg:w-auto"
              >
                {item}
              </a>
            ))}

            <a
              href="https://github.com/nineteen-84"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-1 text-white/60 transition-all duration-300 hover:text-white lg:hidden"
            >
              <span>Desenvolvido por</span>
              <span className="font-semibold text-[#DC143C] transition-colors duration-300 group-hover:text-white">
                NN84
              </span>
              <span className="text-xs">©</span>
            </a>
          </nav>
        </header>

        <div className="flex flex-1 flex-col items-center justify-center gap-10 bg-gradient-to-t from-black/80 via-black/40 px-6 text-center">
          <div className="flex flex-col items-center gap-4">
            <h1 className="z-auto bg-gradient-to-l from-white to-[#ECECEC]/40 bg-clip-text font-montserrat text-3xl tracking-wide text-transparent lg:py-2 lg:text-7xl lg:font-medium">
              Eleve com Rapidez:
              <br />
              <Typewriter
                words={[
                  "Resultados em Minutos",
                  "Mudança com Segurança",
                  "Eficiência que Eleva Projetos",
                ]}
                loop={0}
                cursor
                cursorStyle="|"
                typeSpeed={90}
                deleteSpeed={50}
                delaySpeed={2000}
              />
            </h1>

            <p className="max-w-xs font-inter text-sm leading-relaxed text-white/90 lg:max-w-2xl lg:text-xl lg:leading-relaxed">
              Eleve seus projetos com segurança.
              <br />
              Nossos serviços de içamento tornam o trabalho{" "}
              <span className="font-semibold text-white">rápido</span> e{" "}
              <span className="font-semibold text-white">confiável</span>.
            </p>
          </div>

          <div className="flex w-full flex-col gap-4 sm:w-auto lg:flex-row">
            <a href="#contato">
              <button className="w-60 rounded-full bg-[#DC143C] px-3 py-2 text-sm transition-colors duration-300 hover:bg-green-800 lg:w-auto lg:px-8 lg:py-3 lg:text-sm">
                Contrate Agora
              </button>
            </a>

            <a href="#trabalhos">
              <button className="w-60 rounded-full border border-white/40 bg-white/10 px-3 py-2 text-white shadow-lg backdrop-blur-md transition-all duration-300 hover:bg-white hover:text-black hover:shadow-xl lg:w-auto lg:px-8 lg:py-3 lg:text-sm">
                Nossos Serviços
              </button>
            </a>
          </div>

          <div>
            <ArrowBigDown className="my-2 h-8 w-8 animate-bounce rounded-full border border-white p-2 text-white/80 lg:h-12 lg:w-12" />
          </div>
        </div>
      </main>

      {/* Seção de Proteção, Normas e Certificações */}
      <section className="bg-[#0C0C08] py-[80px]">
        <h1 className="mb-8 text-center font-source text-2xl font-semibold leading-tight lg:text-[72px]">
          Proteção, Normas e Certificações
          <div className="mx-auto h-1 w-full rounded-full bg-gradient-to-r from-[#ffffff] to-red-100"></div>
        </h1>

        {/* mx-auto grid max-w-6xl grid-cols-3 gap-6 lg:flex lg:flex-col */}
        <div className="mx-auto max-w-6xl px-4">
          <div className="divide-y divide-white/20 md:grid md:grid-cols-3 md:gap-12 md:divide-x md:divide-y-0">
            <div className="pb-8 md:pb-0">
              <h2 className="mb-4 font-montserrat text-lg font-bold text-white lg:text-2xl">
                Documento ART
              </h2>
              <p className="font-inter text-sm leading-relaxed text-white/80 lg:text-xl">
                Laudo técnico ART emitido por engenheiro para içamento.
              </p>
            </div>

            <div className="py-8 md:px-12 md:py-0">
              <h2 className="mb-4 font-montserrat text-lg font-bold text-white lg:text-2xl">
                Seguro de Elevação
              </h2>
              <p className="font-inter text-sm leading-relaxed text-white/80 lg:text-xl">
                Termo de responsabilidade para prevenção de acidentes.
              </p>
            </div>

            <div className="pt-8 md:pl-12 md:pt-0">
              <h2 className="mb-4 font-montserrat text-lg font-bold text-white lg:text-2xl">
                Certificações de Segurança e Trabalho
              </h2>
              <p className="mb-3 font-inter text-sm leading-relaxed text-white/80 lg:text-xl">
                NR-35: Certifica profissionais para trabalho em altura.
              </p>
              <p className="font-inter text-sm leading-relaxed text-white/80 lg:text-xl">
                NR-18: Garante segurança e organização na construção civil.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Seção Respiro */}
      <section className="relative flex min-h-screen w-full flex-col justify-end bg-[url('/hero.jpg')] bg-cover bg-fixed bg-center bg-no-repeat">
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="relative z-10 mx-auto max-w-6xl px-4 pb-20 lg:px-8">
          <h1 className="mb-8 font-montserrat text-2xl font-medium leading-tight text-white lg:text-6xl lg:leading-tight">
            Elevar é nossa especialidade, segurança é nossa prioridade.
          </h1>

          <p className="max-w-2xl font-inter text-sm leading-relaxed text-white/90 lg:text-xl lg:leading-relaxed">
            Na Torres Içamentos, elevamos seus projetos com rapidez, precisão e total segurança,
            garantindo resultados confiáveis e sem complicações.
          </p>
        </div>
      </section>

      {/* Seção Trabalhos */}
      <section id="trabalhos" className="flex min-h-screen w-full flex-col bg-[#0C0C08] py-[80px]">
        <div className="mb-12 text-center">
          <h1 className="mb-4 font-source text-3xl font-semibold text-white lg:text-5xl">
            Trabalhos Concluídos
          </h1>
          <div className="mx-auto h-1 w-full rounded-full bg-gradient-to-r from-[#ffffff] to-red-100"></div>
        </div>

        <div className="flex flex-wrap justify-center gap-10">
          {/* Card-1 */}
          <div className="group relative flex min-h-[520px] w-full max-w-[420px] flex-col overflow-hidden rounded-[28px] border border-white/10 bg-gradient-to-b from-[#14140F] to-[#0C0C08] p-8 transition-all duration-500 hover:-translate-y-2">
            {/* Glow superior sutil */}
            <span className="absolute -top-24 left-1/2 h-[220px] w-[220px] -translate-x-1/2 rounded-full bg-slate-400/20 opacity-70 blur-[140px] transition-opacity duration-500 group-hover:opacity-100" />

            {/* Textura refinada */}
            <span className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.06),transparent_65%)] opacity-50" />

            {/* Imagem */}
            <img
              src="/Trabalhos-1.jpg"
              alt="Tampo de mesa branco sendo içado com proteção reforçada"
              className="relative z-10 mb-8 h-[260px] w-full rounded-2xl object-cover shadow-[0_24px_60px_rgba(0,0,0,0.65)] transition-all duration-500 group-hover:scale-[1.06]"
            />

            {/* Conteúdo */}
            <div className="relative z-10 flex flex-1 flex-col">
              <h1 className="mb-4 font-montserrat text-3xl font-semibold tracking-tight text-white">
                Tampo de Mesa
              </h1>

              <p className="mb-8 font-inter text-base leading-relaxed text-white/70">
                13º andar — içamento técnico com estrutura de madeira reforçada e mantas de
                proteção, garantindo total integridade do material durante a operação.
              </p>

              {/* CTA */}
              {/* <span className="mt-auto inline-flex items-center gap-3 font-inter text-sm uppercase tracking-wider text-white/60 transition-all duration-300 group-hover:text-white">
                Saber mais
                <span className="transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </span> */}
            </div>
          </div>

          {/* Card-2 */}
          <div className="group relative flex min-h-[520px] w-full max-w-[420px] flex-col overflow-hidden rounded-[28px] border border-white/10 bg-gradient-to-b from-[#14140F] to-[#0C0C08] p-8 transition-all duration-500 hover:-translate-y-2">
            {/* Glow superior sutil */}
            <span className="absolute -top-24 left-1/2 h-[220px] w-[220px] -translate-x-1/2 rounded-full bg-slate-400/20 opacity-70 blur-[140px] transition-opacity duration-500 group-hover:opacity-100" />

            {/* Textura refinada */}
            <span className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.06),transparent_65%)] opacity-50" />

            {/* Imagem */}
            <img
              src="/Trabalhos-2.jpg"
              alt="Tampo de mesa branco sendo içado com proteção reforçada"
              className="relative z-10 mb-8 h-[260px] w-full rounded-2xl object-cover shadow-[0_24px_60px_rgba(0,0,0,0.65)] transition-all duration-500 group-hover:scale-[1.06]"
            />

            {/* Conteúdo */}
            <div className="relative z-10 flex flex-1 flex-col">
              <h1 className="mb-4 font-montserrat text-3xl font-semibold tracking-tight text-white">
                Içamento de Móvel Embalado
              </h1>

              <p className="mb-8 font-inter text-base leading-relaxed text-white/70">
                Volume embalado e protegido sendo içado com cabos de aço, garantindo a movimentação
                segura em área residencial com acesso restrito.
              </p>

              {/* CTA */}
              {/* <span className="mt-auto inline-flex items-center gap-3 font-inter text-sm uppercase tracking-wider text-white/60 transition-all duration-300 group-hover:text-white">
                Saber mais
                <span className="transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </span> */}
            </div>
          </div>

          {/* Card-3 */}
          <div className="group relative flex min-h-[520px] w-full max-w-[420px] flex-col overflow-hidden rounded-[28px] border border-white/10 bg-gradient-to-b from-[#14140F] to-[#0C0C08] p-8 transition-all duration-500 hover:-translate-y-2">
            {/* Glow superior sutil */}
            <span className="absolute -top-24 left-1/2 h-[220px] w-[220px] -translate-x-1/2 rounded-full bg-slate-400/20 opacity-70 blur-[140px] transition-opacity duration-500 group-hover:opacity-100" />

            {/* Textura refinada */}
            <span className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.06),transparent_65%)] opacity-50" />

            {/* Imagem */}
            <img
              src="/Equipe.jpg"
              alt="Tampo de mesa branco sendo içado com proteção reforçada"
              className="relative z-10 mb-8 h-[260px] w-full rounded-2xl object-cover shadow-[0_24px_60px_rgba(0,0,0,0.65)] transition-all duration-500 group-hover:scale-[1.06]"
            />

            {/* Conteúdo */}
            <div className="relative z-10 flex flex-1 flex-col">
              <h1 className="mb-4 font-montserrat text-3xl font-semibold tracking-tight text-white">
                Equipe em operação
              </h1>

              <p className="mb-8 font-inter text-base leading-relaxed text-white/70">
                Registro da equipe conduzindo o equipamento com precisão e cuidado, garantindo um
                içamento seguro do início ao fim.
              </p>

              {/* CTA */}
              {/* <a
                href="#contato"
                className="mt-auto inline-flex items-center gap-3 font-inter text-sm uppercase tracking-wider text-white/60 transition-all duration-300 group-hover:text-white"
              >
                Solicitar orçamento
                <span className="transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </a> */}
            </div>
          </div>
        </div>
      </section>

      {/* Seção Parceiros */}
      <section
        id="parceiros"
        className="bg-[//parceiros.jpg] relative flex min-h-screen w-full flex-col justify-end overflow-hidden bg-[#0C0C08] bg-gradient-to-b from-[#0C0C08] via-[#0C0C08] to-[#090909] bg-cover bg-fixed bg-center bg-no-repeat py-[120px]"
      >
        {/* Imagem de fundo sutil */}
        <img
          src="/parceiros.jpg"
          alt="Fundo decorativo"
          className="pointer-events-none absolute inset-0 h-full w-full object-cover opacity-10"
        />

        {/* Luz de fundo sutil */}
        <span className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.08),transparent_70%)]" />

        <div className="relative z-10 mx-auto max-w-[1200px] px-2">
          {/* Título */}
          <h2 className="mb-6 text-center font-source text-3xl font-semibold leading-tight text-[#ECECEC] lg:text-5xl">
            Empresas Parceiras
          </h2>

          {/* Subtítulo */}
          <p className="mx-auto mt-6 max-w-xl px-4 text-center font-inter text-sm text-white/60 lg:text-2xl">
            Parcerias construídas com base em segurança, precisão e compromisso em cada operação
            realizada.
          </p>

          {/* Texto de autoridade */}
          <p className="mx-auto mt-12 max-w-4xl px-4 text-center font-inter text-sm leading-relaxed text-white/70 lg:text-lg lg:leading-relaxed">
            Atuamos ao lado de empresas dos mais diversos segmentos, como{" "}
            <span className="font-semibold text-white">
              MiCasa, Francino, Bazzi Móveis, Solo Móveis, Tuti Móveis, Rocha Machado Engenharia,
              Empório Beraldin, Fendi Móveis, Entreposto, Ketal Móveis, Side by Home, Luri
              Persianas, Três Arquitetura, Pomes Arquitetura, Lima Mudança
            </span>{" "}
            e muitos outros parceiros que confiam no nosso trabalho diariamente.
          </p>

          {/* Grid de parceiros */}
          <div className="mt-24 grid grid-cols-2 items-center justify-center gap-14 sm:grid-cols-3 md:grid-cols-4">
            {/* Parceiro */}
            <div className="group flex h-[160px] items-center justify-center rounded-2xl border border-white/15 bg-white/[0.06] backdrop-blur-md transition-all duration-300 ease-out hover:border-white/30 hover:bg-white/[0.12] hover:shadow-[0_0_40px_rgba(255,255,255,0.08)]">
              <img
                src="/micasa.png"
                alt="MiCasa"
                className="contrast-110 max-h-[72px] brightness-110 transition-all duration-300 group-hover:scale-105"
              />
            </div>

            <div className="group flex h-[160px] items-center justify-center rounded-2xl border border-white/15 bg-white/[0.06] backdrop-blur-md transition-all duration-300 hover:border-white/30 hover:bg-white/[0.12] hover:shadow-[0_0_40px_rgba(255,255,255,0.08)]">
              <img
                src="/bazzy.png"
                alt="Bazzi Móveis"
                className="max-h-[72px] object-contain transition-transform duration-300 group-hover:scale-105"
              />
            </div>

            <div className="group flex h-[160px] items-center justify-center rounded-2xl border border-white/15 bg-white/[0.06] backdrop-blur-md transition-all duration-300 hover:border-white/30 hover:bg-white/[0.12] hover:shadow-[0_0_40px_rgba(255,255,255,0.08)]">
              <img
                src="/lima.png"
                alt="Lima Mudança"
                className="max-h-[72px] object-contain transition-transform duration-300 group-hover:scale-105"
              />
            </div>

            <div className="group flex h-[160px] items-center justify-center rounded-2xl border border-white/15 bg-white/[0.06] backdrop-blur-md transition-all duration-300 hover:border-white/30 hover:bg-white/[0.12] hover:shadow-[0_0_40px_rgba(255,255,255,0.08)]">
              <img
                src="/rocha_machado.png"
                alt="Rocha Machado Engenharia"
                className="max-h-[72px] object-contain transition-transform duration-300 group-hover:scale-105"
              />
            </div>
          </div>

          {/* Selo de credibilidade */}
          <span className="mt-16 block text-center text-sm uppercase tracking-widest text-white/40">
            Parcerias construídas ao longo de anos de operação
          </span>

          {/* Linha divisória */}
          <div className="mt-24 h-px w-full bg-gradient-to-r from-transparent via-white/20 to-transparent" />
        </div>
      </section>

      {/* Seção Sobre */}
      <section
        id="sobre"
        className="flex min-h-screen w-full flex-col justify-end bg-[url('/Sobre.jpg')] bg-cover bg-fixed bg-center bg-no-repeat pb-[80px] pl-[80px] pr-12"
      >
        <div className="">
          <h1 className="mb-6 font-montserrat text-2xl font-medium leading-tight text-white lg:text-5xl lg:leading-tight">
            A TORRES IÇAMENTOS atua com equipamentos de alta qualidade e foco total em segurança.
          </h1>
          <p className="max-w-3xl pb-6 font-inter text-sm leading-relaxed text-white/90 lg:text-xl lg:leading-relaxed">
            Utilizamos estruturas que preservam paredes, janelas e pisos, garantindo eficiência sem
            danos. Nossa missão é realizar içamentos com excelência e responsabilidade técnica em
            cada operação.
          </p>
          <div className="flex flex-wrap content-center">
            <button className="flex items-center justify-center gap-3 rounded-lg bg-white/10 px-8 py-4 text-lg font-medium text-white backdrop-blur-md transition-all duration-300 hover:bg-[#ECECEC]/20">
              Solicitar Orçamento
              <i className="ph ph-arrow-circle-right text-xl text-red-500"></i>
            </button>
          </div>
        </div>
      </section>

      <section id="feedbacks" className="bg-[#0C0C08] py-20 text-white">
        <div className="container mx-auto px-4">
          {/* Cabeçalho da Seção */}
          <div className="mb-16 text-center">
            <h2 className="font-serif text-3xl font-bold lg:text-5xl">Opiniões</h2>

            <p className="mx-auto mt-4 max-w-2xl text-gray-400">
              Confira a opinião de nossos clientes sobre a segurança e eficiência dos nossos
              serviços
            </p>
          </div>

          {/* Container do Carrossel/Imagem Central */}
          <div className="relative flex items-center justify-center">
            <div
              className="h-96 w-full max-w-3xl rounded-xl bg-gray-700 bg-cover bg-center"
              style={{ backgroundImage: `url('/icamentofeedback.jpg')` }}
            />

            {/* Card de Feedback Central (Posicionado sobre a imagem) */}
            <div className="absolute left-1/2 top-1/2 w-full max-w-lg -translate-x-1/2 -translate-y-1/2">
              {/* Avatar */}
              <div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2">
                <div className="flex h-24 w-24 items-center justify-center rounded-full border-4 border-white bg-gray-300 shadow-lg">
                  <User className="h-12 w-12 text-gray-600" />
                </div>
              </div>

              {/* Conteúdo do Card */}
              <div className="rounded-xl bg-white px-8 pb-8 pt-16 text-center text-gray-800 shadow-2xl">
                <p className="italic text-gray-600">
                  "A equipe da Torres Içamentos realizou o serviço com agilidade e atenção aos
                  detalhes, garantindo segurança e confiança em cada etapa. Excelente trabalho."
                </p>
                <p className="mt-6 font-bold text-gray-900">Jaqueline Souza</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Seção Contato */}
      <section id="contato" className="bg-[#0C0C08] py-20 text-white">
        <div className="bg-[#0C0C08] px-4">
          <div className="mx-auto w-full max-w-6xl">
            {/* TÍTULO */}
            <div className="mb-16 text-center">
              <h1 className="mb-4 font-serif text-3xl font-light md:text-6xl lg:text-5xl">
                Contato
              </h1>
              <p className="text-lg text-gray-400">
                Fico com alguma dúvida? Então escreva para a gente!
              </p>
            </div>

            {/* CONTAINER DOS CARDS */}
            <div className="flex flex-col md:flex-row">
              {/* CARD ESQUERDO */}
              <div className="bg-black-900 relative flex flex-1 flex-col rounded-l-2xl border-8 border-white p-8 text-lg">
                {/* CONTEÚDO */}
                <div>
                  <h2 className="mb-4 text-3xl font-light">Informações para contato</h2>

                  <p className="mb-8 text-lg leading-relaxed text-gray-400">
                    Estamos prontos para atender você com agilidade, transparência e total
                    compromisso com a segurança. Se você precisa de um serviço de içamento
                    confiável, nossa equipe está preparada para entender sua necessidade e oferecer
                    a melhor solução para o seu projeto.
                    <br />
                    <br />
                    Entre em contato conosco para solicitar um orçamento, esclarecer dúvidas ou
                    obter mais informações sobre nossos serviços. Também é possível utilizar o
                    formulário ao lado para enviar sua mensagem de forma rápida e prática.
                    <br />
                    <br />
                    Será um prazer atender você e contribuir para o sucesso do seu projeto.
                  </p>

                  <div className="mb-4 flex items-center gap-4">
                    <Phone className="h-6 w-6 text-white" />
                    <p className="text-xl text-gray-400">(+55) 11 0000-0000</p>
                  </div>

                  <div className="mb-4 flex items-center gap-4">
                    <Mail className="h-6 w-6 text-white" />
                    <p className="text-xl text-gray-400">torresicomatias@gmail.com</p>
                  </div>

                  <div className="flex items-center gap-4">
                    <MapPin className="h-6 w-6 text-white" />
                    <p className="text-xl text-gray-400">R. Rosa Russ Opis, 20</p>
                  </div>
                </div>

                {/* ÍCONES SOCIAIS FIXADOS NO FUNDO */}
                <div className="mt-auto pt-10">
                  <p className="mb-4 text-center text-gray-400">Siga-nos nas redes sociais</p>

                  <div className="flex items-center justify-center gap-5">
                    <a href="#" className="text-green-500 transition hover:scale-110">
                      <img
                        src="https://cdn-icons-png.flaticon.com/512/733/733585.png"
                        alt="Whatsapp"
                        className="h-7 w-7"
                      />
                    </a>

                    <a href="#" className="text-white transition hover:scale-110">
                      <img
                        src="https://cdn-icons-png.flaticon.com/512/3046/3046121.png"
                        alt="TikTok"
                        className="h-7 w-7"
                      />
                    </a>

                    <a href="#" className="text-blue-400 transition hover:scale-110">
                      <img
                        src="https://cdn-icons-png.flaticon.com/512/733/733579.png"
                        alt="Twitter"
                        className="h-7 w-7"
                      />
                    </a>

                    <a href="#" className="text-blue-600 transition hover:scale-110">
                      <img
                        src="https://cdn-icons-png.flaticon.com/512/733/733547.png"
                        alt="Facebook"
                        className="h-7 w-7"
                      />
                    </a>
                  </div>
                </div>
              </div>

              {/* Lado Direito - Formulário */}
              <div className="flex-1 rounded-r-2xl border-8 border-l-0 border-white bg-white p-8">
                <form className="space-y-6">
                  {/* Linha 1: First Name e Last Name */}
                  <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                    <div>
                      <label className="mb-2 block text-sm font-medium text-gray-700">Nome:</label>
                      <input
                        type="text"
                        placeholder="José"
                        className="w-full rounded-lg border border-gray-300 bg-white px-4 py-2 text-gray-900 placeholder-gray-400 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-black"
                      />
                    </div>
                    <div>
                      <label className="mb-2 block text-sm font-medium text-gray-700">
                        Sobrenome
                      </label>
                      <input
                        type="text"
                        placeholder="Caique"
                        className="w-full rounded-lg border border-gray-300 bg-white px-4 py-2 text-gray-900 placeholder-gray-400 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-black"
                      />
                    </div>
                  </div>

                  {/* Email */}
                  <div>
                    <label className="mb-2 block text-sm font-medium text-gray-700">Email</label>
                    <input
                      type="email"
                      placeholder="josecaique@exemplo.com"
                      className="w-full rounded-lg border border-gray-300 bg-white px-4 py-2 text-gray-900 placeholder-gray-400 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-black"
                    />
                  </div>

                  {/* Phone Number */}
                  <div>
                    <label className="mb-2 block text-sm font-medium text-gray-700">Telefone</label>
                    <input
                      type="tel"
                      placeholder="+55 (11) 0000-0000"
                      className="w-full rounded-lg border border-gray-300 bg-white px-4 py-2 text-gray-900 placeholder-gray-400 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-black"
                    />
                  </div>

                  {/* Message */}
                  <div>
                    <label className="mb-2 block text-sm font-medium text-gray-700">Messagem</label>
                    <textarea
                      placeholder="Digite sua messagem aqui..."
                      rows={5}
                      className="w-full resize-none rounded-lg border border-gray-300 bg-white px-4 py-2 text-gray-900 placeholder-gray-400 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-black"
                    ></textarea>
                  </div>

                  {/* Submit Button */}
                  <div className="flex justify-end">
                    <button
                      type="submit"
                      className="rounded-lg bg-black px-8 py-3 font-medium text-white transition hover:bg-gray-900"
                    >
                      Enviar
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-[url('/footer.png')] bg-cover bg-center">
        <div className="container mx-auto px-4 pb-10 pt-10 md:px-[60px]">
          <div className="mt-24 flex flex-col items-center gap-12 md:flex-row md:gap-[200px]">
            <div className="shrink-0">
              <img src="logo.png" alt="Torres Içamentos Logo" className="max-w-[200px]" />
            </div>

            <div className="grid w-full grid-cols-1 gap-12 md:grid-cols-3 md:gap-20">
              <div className="min-w-0">
                <h2 className="mb-4 font-inter text-lg font-bold text-white">Endereço</h2>
                <div className="space-y-3">
                  <p className="flex items-center gap-2 font-inter text-white/80">
                    <img src="map.png" alt="Localização" className="h-4 w-4" />
                    R. Rosa Ruas Dias, 20
                  </p>
                  <p className="flex items-start gap-2 font-inter text-white/80">
                    <img src="email.png" alt="Email" className="mt-0.5 h-4 w-4 flex-shrink-0" />
                    <span className="min-w-0 break-all">torresicamentos@gmail.com</span>
                  </p>
                </div>
              </div>

              <div>
                <h2 className="mb-4 font-inter text-lg font-bold text-white">Navegação</h2>
                <ul className="space-y-2">
                  <li>
                    <a
                      href="#"
                      className="font-inter text-white/80 transition-colors hover:text-white hover:underline"
                    >
                      Início
                    </a>
                  </li>
                  <li>
                    <a
                      href="#trabalhos"
                      className="font-inter text-white/80 transition-colors hover:text-white hover:underline"
                    >
                      Trabalhos
                    </a>
                  </li>
                  <li>
                    <a
                      href="#parceiros"
                      className="font-inter text-white/80 transition-colors hover:text-white hover:underline"
                    >
                      Parceiros
                    </a>
                  </li>
                  <li>
                    <a
                      href="#sobre"
                      className="font-inter text-white/80 transition-colors hover:text-white hover:underline"
                    >
                      Sobre
                    </a>
                  </li>
                </ul>
              </div>

              <div>
                <h2 className="mb-4 font-inter text-lg font-bold text-white">Newsletter</h2>
                <form className="mb-6">
                  <div className="space-y-2">
                    <label
                      htmlFor="newsletter-email"
                      className="block font-inter text-sm text-white/80"
                    >
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
                      className="w-full rounded bg-[#DC143C] py-2 font-inter text-white transition-colors duration-200 hover:bg-[#B91C3C]"
                    >
                      Inscrever-se
                    </button>
                  </div>
                </form>

                <div>
                  <h3 className="mb-3 font-inter text-sm font-medium text-white">Siga-nos</h3>
                  <div className="flex gap-3">
                    <a
                      href="#"
                      className="transition-transform hover:scale-110"
                      aria-label="Facebook"
                    >
                      <img src="face.png" alt="Facebook" className="h-6 w-6" />
                    </a>
                    <a
                      href="#"
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
              <p className="text-white/60">
                © 2025 Torres Içamentos. Todos os Direitos Reservados
              </p>
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
                <span className="text-xs">©</span>
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
    </Fragment>
  );
};
