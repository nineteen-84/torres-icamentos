import { useEffect, useState } from "react";
import { Fragment } from "react/jsx-runtime";

import { Loading } from "../../components/Loading";
import { Typewriter } from "react-simple-typewriter";
import { ArrowBigDown, Mail, MapPin, Phone } from "lucide-react";
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { Card } from "../../components/Card";
import { CardOpinion } from "../../components/Card/Opinion";

export const Home = () => {
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
      <div className="fixed bottom-4 right-4 z-[9999] md:bottom-6 md:right-6">
        <a
          id="robbu-whatsapp-button"
          target="_blank"
          href="https://api.whatsapp.com/send?phone=5511000000000&text=Olá!%20Quero%20solicitar%20um%20orçamento."
          className="flex h-12 w-12 items-center justify-center rounded-full bg-green-500 shadow-lg transition-all duration-300 hover:scale-110 hover:shadow-xl md:h-16 md:w-16"
        >
          <svg className="h-6 w-6 text-white md:h-8 md:w-8" fill="currentColor" viewBox="0 0 24 24">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488" />
          </svg>
        </a>
      </div>

      {/* Home */}
      <main className="flex min-h-screen flex-col bg-[url('/main.jpg')] bg-cover bg-center bg-no-repeat">
        <Header />

        <div className="flex flex-1 flex-col items-center justify-center gap-10 bg-gradient-to-t from-black/80 via-black/40 px-6 text-center">
          <div className="flex flex-col items-center gap-4">
            <h1 className="z-auto bg-gradient-to-l from-white to-[#ECECEC]/40 bg-clip-text text-3xl tracking-wide text-transparent lg:py-2 lg:text-7xl lg:font-medium">
              Torres Içamentos:
              <br />
              <Typewriter
                words={[
                  "Resultados em Minutos",
                  "Mudança com Segurança",
                  "Eficiência que Eleva Projetos",
                ]}
                loop={0}
                cursor={true}
                cursorStyle="|"
                cursorColor="#ffff"
                typeSpeed={90}
                deleteSpeed={50}
                delaySpeed={2000}
              />
            </h1>

            <p className="max-w-xs text-sm leading-relaxed text-white/90 lg:max-w-2xl lg:text-xl lg:leading-relaxed">
              Eleve seus projetos com segurança.
              <br />
              Nossos serviços de içamento tornam o trabalho{" "}
              <span className="font-semibold text-white">rápido</span> e{" "}
              <span className="font-semibold text-white">confiável</span>.
            </p>
          </div>

          <div className="flex w-full flex-col gap-4 sm:w-auto lg:flex-row">
            <a href="#contato">
              <button className="h-10 w-60 rounded-full bg-[#DC143C] px-3 text-sm transition-colors duration-300 hover:bg-green-800 lg:w-auto lg:px-8 lg:text-sm">
                Entrar em Contato
              </button>
            </a>

            <a href="#trabalhos">
              <button className="h-10 w-60 rounded-full border border-white/40 bg-white/10 px-3 text-white shadow-lg backdrop-blur-md transition-all duration-300 hover:bg-white hover:text-black hover:shadow-xl lg:w-auto lg:px-8 lg:text-sm">
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
        <h1 className="mb-4 text-center text-3xl font-bold leading-tight md:text-6xl lg:text-5xl">
          Proteção, Normas e Certificações
          <div className="mx-auto mt-4 h-1 w-full rounded-full bg-gradient-to-r from-[#ffffff] to-red-100"></div>
        </h1>

        {/* mx-auto grid max-w-6xl grid-cols-3 gap-6 lg:flex lg:flex-col */}
        <div className="mx-auto max-w-6xl px-4">
          <div className="divide-y divide-white/20 md:grid md:grid-cols-3 md:gap-12 md:divide-x md:divide-y-0">
            <div className="pb-8 md:pb-0">
              <h2 className="mb-4 text-lg font-bold text-white lg:text-2xl">Documento ART</h2>
              <p className="text-sm leading-relaxed text-white/80 lg:text-xl">
                Laudo técnico ART emitido por engenheiro para içamento.
              </p>
            </div>

            <div className="py-8 md:px-12 md:py-0">
              <h2 className="mb-4 text-lg font-bold text-white lg:text-2xl">Seguro de Elevação</h2>
              <p className="text-sm leading-relaxed text-white/80 lg:text-xl">
                Termo de responsabilidade para prevenção de acidentes.
              </p>
            </div>

            <div className="pt-8 md:pl-12 md:pt-0">
              <h2 className="mb-4 text-lg font-bold text-white lg:text-2xl">
                Certificações de Segurança e Trabalho
              </h2>
              <p className="mb-3 text-sm leading-relaxed text-white/80 lg:text-xl">
                NR-35: Certifica profissionais para trabalho em altura.
              </p>
              <p className="text-sm leading-relaxed text-white/80 lg:text-xl">
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
          <h1 className="mb-8 text-2xl font-medium leading-tight text-white lg:text-6xl lg:leading-tight">
            Elevar é nossa especialidade, segurança é nossa prioridade.
          </h1>

          <p className="max-w-2xl text-sm leading-relaxed text-white/90 lg:text-xl lg:leading-relaxed">
            Na Torres Içamentos, elevamos seus projetos com rapidez, precisão e total segurança,
            garantindo resultados confiáveis e sem complicações.
          </p>
        </div>
      </section>

      {/* Seção Trabalhos */}
      <section id="trabalhos" className="flex min-h-screen w-full flex-col bg-[#0C0C08] py-[80px]">
        <div className="mb-12 text-center">
          <h1 className="mb-4 text-3xl font-bold md:text-6xl lg:text-5xl">Trabalhos Concluídos</h1>
          <div className="mx-auto h-1 w-full rounded-full bg-gradient-to-r from-[#ffffff] to-red-100"></div>
        </div>

        <div className="flex flex-wrap justify-center gap-10">
          <Card
            img="public/Trabalhos-1.jpg"
            title="Tampo de Mesa"
            desc="13º andar — içamento técnico com estrutura de madeira reforçada e mantas de proteção,
            garantindo total integridade do material durante a operação."
          />

          <Card
            img="public/Trabalhos-2.jpg"
            title="Içamento de Móvel Embalado"
            desc="Volume embalado e protegido sendo içado com cabos de aço, garantindo a movimentação
            segura em área residencial com acesso restrito."
          />

          <Card
            img="public/Equipe.jpg"
            title="Equipe em operação"
            desc="Registro da equipe conduzindo o equipamento com precisão e cuidado, garantindo um
            içamento seguro do início ao fim."
          />
        </div>

        {/* <Card /> */}
        {/* <Card /> */}
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
          {/* mb-4 text-3xl font-bold md:text-6xl lg:text-5xl */}
          <h2 className="mb-4 text-center text-3xl font-bold md:text-6xl lg:text-5xl">
            Empresas Parceiras
          </h2>

          {/* Subtítulo */}
          <p className="mx-auto mt-6 max-w-xl px-4 text-center text-sm text-white/60 lg:text-2xl">
            Parcerias construídas com base em segurança, precisão e compromisso em cada operação
            realizada.
          </p>

          {/* Texto de autoridade */}
          <p className="mx-auto mt-12 max-w-4xl px-4 text-center text-sm leading-relaxed text-white/70 lg:text-lg lg:leading-relaxed">
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
            <a href="https://www.micasa.com.br/" target="_blank" rel="noopener noreferrer">
              <div className="group flex h-[160px] items-center justify-center rounded-2xl border border-white/15 bg-white/[0.06] backdrop-blur-md transition-all duration-300 ease-out hover:border-white/30 hover:bg-white/[0.12] hover:shadow-[0_0_40px_rgba(255,255,255,0.08)]">
                <img
                  src="/micasa.png"
                  alt="MiCasa"
                  className="contrast-110 max-h-[72px] brightness-110 transition-all duration-300 group-hover:scale-105"
                />
              </div>
            </a>

            <a href="https://www.bazzimoveis.com.br/" target="_blank" rel="noopener noreferrer">
              <div className="group flex h-[160px] items-center justify-center rounded-2xl border border-white/15 bg-white/[0.06] backdrop-blur-md transition-all duration-300 hover:border-white/30 hover:bg-white/[0.12] hover:shadow-[0_0_40px_rgba(255,255,255,0.08)]">
                <img
                  src="/bazzy.png"
                  alt="Bazzi Móveis"
                  className="max-h-[72px] object-contain transition-transform duration-300 group-hover:scale-105"
                />
              </div>
            </a>

            <a href="https://www.limamudancas.com.br/" target="_blank" rel="noopener noreferrer">
              <div className="group flex h-[160px] items-center justify-center rounded-2xl border border-white/15 bg-white/[0.06] backdrop-blur-md transition-all duration-300 hover:border-white/30 hover:bg-white/[0.12] hover:shadow-[0_0_40px_rgba(255,255,255,0.08)]">
                <img
                  src="/lima.png"
                  alt="Lima Mudança"
                  className="max-h-[72px] object-contain transition-transform duration-300 group-hover:scale-105"
                />
              </div>
            </a>

            <a
              href="https://www.rochamachadoengenharia.com.br/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="group flex h-[160px] items-center justify-center rounded-2xl border border-white/15 bg-white/[0.06] backdrop-blur-md transition-all duration-300 hover:border-white/30 hover:bg-white/[0.12] hover:shadow-[0_0_40px_rgba(255,255,255,0.08)]">
                <img
                  src="/rocha_machado.png"
                  alt="Rocha Machado Engenharia"
                  className="max-h-[72px] object-contain transition-transform duration-300 group-hover:scale-105"
                />
              </div>
            </a>
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
          <h1 className="mb-6 text-2xl font-medium leading-tight text-white lg:text-5xl lg:leading-tight">
            A TORRES IÇAMENTOS trabalha com equipamentos de primeira linha e prioriza a segurança em
            tudo que faz.
          </h1>
          <p className="max-w-3xl pb-6 text-sm leading-relaxed text-white/90 lg:text-xl lg:leading-relaxed">
            Usamos estruturas que protegem paredes, janelas e pisos, garantindo um trabalho
            eficiente sem causar danos. Nossa missão é executar cada içamento com excelência e total
            responsabilidade técnica.
          </p>
          <div className="flex flex-wrap content-center">
            {/* <button className="flex items-center justify-center gap-3 rounded-lg bg-white/10 px-8 py-4 text-lg font-medium text-white backdrop-blur-md transition-all duration-300 hover:bg-[#ECECEC]/20">
              Solicitar Orçamento
              <i className="ph ph-arrow-circle-right text-xl text-red-500"></i>
            </button> */}
          </div>
        </div>
      </section>

      <section id="feedbacks" className="bg-[#0C0C08] py-20 text-white">
        <div className="container mx-auto px-4">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-3xl font-bold md:text-6xl lg:text-5xl">Opiniões</h2>

            <p className="mx-auto mt-4 max-w-2xl text-gray-400">
              Veja o que nossos clientes falam sobre a segurança e qualidade dos nossos serviços.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            <div className="relative flex items-center justify-center">
              <CardOpinion
                comment="A equipe da Torres Içamentos fez um trabalho incrível! Foram super ágeis e cuidadosos com cada detalhe. Me senti segura durante todo o processo. Recomendo!"
                author="Jaqueline Souza"
              />
            </div>

            <div className="relative flex items-center justify-center">
              <CardOpinion
                comment="Serviço impecável! A Torres Içamentos cumpriu todos os prazos e fez tudo com muito cuidado. Equipe profissional e equipamentos de qualidade."
                author="Carlos Silva"
              />
            </div>

            <div className="relative flex items-center justify-center">
              <CardOpinion
                comment="Excelente trabalho! Precisei de um içamento urgente e eles resolveram rapidinho. Preço justo e resultado perfeito. Super indico!"
                author="Maria Santos"
              />
            </div>
          </div>
        </div>
      </section>


      {/* Seção Contato */}
      <section
        id="contato"
        className="relative w-full min-h-[calc(100vh-80px)] bg-[url('/logo-cntt.jpeg')] bg-cover bg-center bg-no-repeat py-20"
      >
        {/* Overlay */}
        <div className="pointer-events-none absolute inset-0 bg-[#0C0C08]"></div>

        {/* Conteúdo */}
        <div className="relative z-10 container mx-auto flex flex-col lg:flex-row gap-10 px-4 py-10">

          {/* Coluna lateral — logo primeiro no mobile */}
          <div className="flex flex-col w-full gap-8 lg:w-1/2">
            {/* Logo da empresa */}
            <div className="group overflow-hidden rounded-2xl shadow-md transition duration-500 hover:shadow-lg">
              <img
                src="/logo-cntt.jpeg"
                alt="Torres Içamentos"
                className="w-full max-w-full h-96 object-cover rounded-2xl transition duration-500 group-hover:scale-105"
              />
            </div>

            {/* Card informações */}
            <div className="w-full rounded-2xl bg-white p-6 shadow-md transition duration-500 hover:shadow-lg">
              <div className="flex flex-col gap-4">
                {[
                  { icon: "https://img.icons8.com/?size=100&id=12580&format=png&color=000000", label: "Email", value: "torresicamentos@gmail.com", href: "mailto:torresicamentos@gmail.com" },
                  { icon: "https://img.icons8.com/?size=100&id=9660&format=png&color=000000", label: "Telefone", value: "5925-4049", href: "tel:59254049" },
                  { icon: "https://img.icons8.com/?size=100&id=16712&format=png&color=000000", label: "WhatsApp", value: "(11) 94719-6430", href: "https://wa.me/5511947196430" },
                ].map((item, i) => (
                  <a
                    key={i}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 rounded-xl bg-[#FAFAFA] p-4 transition duration-300 hover:bg-[#F2F2F2] hover:scale-105"
                  >
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-white shadow-sm">
                      <img src={item.icon} alt={item.label} className="h-6 w-6" />
                    </div>
                    <div>
                      <p className="text-xs font-medium text-gray-500">{item.label}</p>
                      <p className="text-sm font-semibold text-black">{item.value}</p>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Card formulário */}
          <div className="w-full rounded-2xl bg-white p-8 shadow-md transition duration-500 hover:shadow-lg lg:w-1/2 flex flex-col gap-6">
            <h1 className="text-2xl font-bold text-black lg:text-5xl">Entre em contato com a equipe da Torres Içamentos</h1>
            <p className="text-sm text-[#343434] lg:text-lg">Solicite informações ou orçamentos com nossa equipe especializada.</p>
            <hr className="border-0 h-px w-full bg-[#343434] mb-4" />

            {/* Campos */}
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex flex-col gap-2 md:w-1/2">
                <label htmlFor="nome" className="text-sm font-semibold text-black">Nome</label>
                <input
                  type="text"
                  id="nome"
                  name="nome"
                  placeholder="Ex: José"
                  className="h-11 w-full rounded-xl border border-gray-300 px-4 text-sm text-black focus:border-red-600 focus:ring-2 focus:ring-red-300 focus:outline-none transition"
                  required
                />
              </div>
              <div className="flex flex-col gap-2 md:w-1/2">
                <label htmlFor="sobrenome" className="text-sm font-semibold text-black">Sobrenome</label>
                <input
                  type="text"
                  id="sobrenome"
                  name="sobrenome"
                  placeholder="Ex: Silva"
                  className="h-11 w-full rounded-xl border border-gray-300 px-4 text-sm text-black focus:border-red-600 focus:ring-2 focus:ring-red-300 focus:outline-none transition"
                  required
                />
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="email" className="text-sm font-semibold text-black">E-mail</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="exemplo@dominio.com"
                className="h-11 w-full rounded-xl border border-gray-300 px-4 text-sm text-black focus:border-red-600 focus:ring-2 focus:ring-red-300 focus:outline-none transition"
                required
              />
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="mensagem" className="text-sm font-semibold text-black">Mensagem</label>
              <textarea
                id="mensagem"
                name="mensagem"
                placeholder="Digite sua mensagem"
                rows={4}
                className="resize-none rounded-xl border border-gray-300 px-4 py-3 text-sm text-black focus:border-red-600 focus:ring-2 focus:ring-red-300 focus:outline-none transition"
                required
              />
            </div>

            {/* Botão enviar */}
            <button className="mt-4 w-full py-3 rounded-xl bg-red-600 text-white font-semibold transition duration-300 hover:bg-red-700 hover:scale-105">
              Enviar
            </button>
          </div>
        </div>
      </section>
      <Footer />
    </Fragment>
  );
};
