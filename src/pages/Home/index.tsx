import { useEffect, useState } from "react";
import { Fragment } from "react/jsx-runtime";

import { ArrowBigDown } from "lucide-react";
import { Typewriter } from "react-simple-typewriter";
import { Card } from "../../components/Card";
import { CardOpinion } from "../../components/Card/Opinion";
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { Loading } from "../../components/Loading";
import { ContactForm } from "../../components/ContactForm/Index";
import { Partner } from "../../components/Card/Partners";
import { WhatsApp } from "../../components/Button/WhatsApp";

export const Home = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false); // desativar tela de loading
    }, 5000); // cinco segundos

    return () => clearTimeout(timer);
  }, []);

  if (loading) return <Loading />;

  return (
    <Fragment>
      <WhatsApp />

      {/* Seção Home */}
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

      {/* Seção Sobre o Trabalho */}
      <section className="relative flex min-h-screen w-full flex-col justify-end bg-[url('/hero.jpg')] bg-cover bg-scroll bg-center bg-no-repeat lg:bg-fixed">
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

      {/* Seção de Trabalho Realizados */}
      <section id="trabalhos" className="flex min-h-screen w-full flex-col bg-[#0C0C08] py-[80px]">
        <div className="mb-12 text-center">
          <h1 className="mb-4 text-3xl font-bold md:text-6xl lg:text-5xl">Trabalhos Concluídos</h1>
          <div className="mx-auto h-1 w-full rounded-full bg-gradient-to-r from-[#ffffff] to-red-100"></div>
        </div>

        <div className="flex flex-wrap justify-center gap-10">
          <Card
            img="/Trabalhos-1.jpg"
            title="Tampo de Mesa"
            desc="13º andar — içamento técnico com estrutura de madeira reforçada e mantas de proteção,
            garantindo total integridade do material durante a operação."
          />

          <Card
            img="/Trabalhos-2.jpg"
            title="Içamento de Móvel Embalado"
            desc="Volume embalado e protegido sendo içado com cabos de aço, garantindo a movimentação
            segura em área residencial com acesso restrito."
          />

          <Card
            img="/Equipe.jpg"
            title="Equipe em operação"
            desc="Registro da equipe conduzindo o equipamento com precisão e cuidado, garantindo um
            içamento seguro do início ao fim."
          />
        </div>
      </section>

      {/* Seção de Parceiros */}
      <section
        id="parceiros"
        className="relative flex min-h-screen w-full flex-col justify-end overflow-hidden bg-[#0C0C08] bg-gradient-to-b from-[#0C0C08] via-[#0C0C08] to-[#090909] bg-cover bg-scroll bg-center bg-no-repeat py-[120px] lg:bg-fixed"
      >
        <img
          src="/parceiros.jpg"
          alt="Fundo decorativo"
          className="pointer-events-none absolute inset-0 h-full w-full object-cover opacity-10"
        />

        <span className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.08),transparent_70%)]" />

        <div className="relative z-10 mx-auto max-w-[1200px] px-2">
          <h2 className="mb-4 text-center text-3xl font-bold md:text-6xl lg:text-5xl">
            Empresas Parceiras
          </h2>

          <p className="mx-auto mt-6 max-w-xl px-4 text-center text-sm text-white/60 lg:text-2xl">
            Parcerias construídas com base em segurança, precisão e compromisso em cada operação
            realizada.
          </p>

          <p className="mx-auto mt-12 max-w-4xl px-4 text-center text-sm leading-relaxed text-white/70 lg:text-lg lg:leading-relaxed">
            Atuamos ao lado de empresas dos mais diversos segmentos, como{" "}
            <span className="font-semibold text-white">
              MiCasa, Francino, Bazzi Móveis, Solo Móveis, Tuti Móveis, Rocha Machado Engenharia,
              Empório Beraldin, Fendi Móveis, Entreposto, Ketal Móveis, Side by Home, Luri
              Persianas, Três Arquitetura, Pomes Arquitetura, Lima Mudança
            </span>{" "}
            e muitos outros parceiros que confiam no nosso trabalho diariamente.
          </p>

          <div className="mt-24 grid grid-cols-2 items-center justify-center gap-14 sm:grid-cols-3 md:grid-cols-4">
            <Partner link="https://www.micasa.com.br/" img="/bazzy.png" alt="MiCasa" />
            <Partner link="https://www.bazzimoveis.com.br/" img="/micasa.png" alt="Bazzi Móveis" />
            <Partner link="https://www.limamudancas.com.br/" img="/lima.png" alt="Lima Mudança" />
            <Partner
              link="https://www.rochamachadoengenharia.com.br/"
              img="/rocha_machado.png"
              alt="Rocha Machado Engenharia"
            />
          </div>

          <span className="mt-16 block text-center text-sm uppercase tracking-widest text-white/40">
            Parcerias construídas ao longo de anos de operação
          </span>

          <div className="mt-24 h-px w-full bg-gradient-to-r from-transparent via-white/20 to-transparent" />
        </div>
      </section>

      {/* Seção sobre as Operações */}
      <section
        id="sobre"
        className="flex min-h-screen w-full flex-col justify-end bg-[url('/Sobre.jpg')] bg-cover bg-scroll bg-center bg-no-repeat px-6 pb-[80px] lg:bg-fixed lg:pl-[80px] lg:pr-12"
      >
        <div>
          <h1 className="mb-6 text-2xl font-medium leading-tight text-white lg:text-5xl lg:leading-tight">
            A Torres Içamentos atua há mais de 11 anos com equipamentos de primeira linha,
            priorizando a segurança em cada operação.
          </h1>

          <p className="max-w-3xl pb-6 text-sm leading-relaxed text-white/90 lg:text-xl lg:leading-relaxed">
            Executamos içamentos com planejamento técnico e total cuidado com o ambiente, utilizando
            estruturas que protegem paredes, janelas e pisos. Atuamos com responsabilidade, precisão
            e respeito ao seu patrimônio.
          </p>

          <p className="mt-2 text-sm text-white/70 lg:text-base">
            Atendemos São Paulo, Grande São Paulo, litoral e interior.
          </p>

          <div className="mt-10 flex w-full justify-normal">
            <a href="#contato">
              <button className="h-10 w-60 rounded-full bg-[#DC143C] px-3 text-sm text-white transition-colors duration-300 hover:bg-green-800 lg:w-auto lg:px-8">
                Solicitar orçamento
              </button>
            </a>
          </div>
        </div>
      </section>

      {/* Seção de Feedback dos Clientes */}
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

      {/* Seção de Contato */}
      <section
        id="contato"
        className="relative min-h-[calc(100vh-80px)] w-full bg-[url('/logo-cntt.jpeg')] bg-cover bg-center bg-no-repeat py-20"
      >
        <ContactForm />
      </section>

      <Footer />
    </Fragment>
  );
};
