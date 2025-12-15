import { Fragment } from "react/jsx-runtime";

export const Home = () => {
  return (
    <Fragment>
      {/* Home */}
      <main className="flex min-h-screen flex-col bg-[url('/bg.png')] bg-cover bg-fixed bg-center bg-no-repeat">
        <header className="mb-4 mt-4 flex justify-center p-8">
          <nav className="flex gap-28">
            <a href="#sobre">Sobre</a>
            <a href="#parceiros">Parceiros</a>
            <a href="#trabalhos">Trabalhos</a>
            <a href="#contato">Contato</a>
          </nav>
        </header>

        <div className="flex flex-1 flex-col items-center justify-center gap-12 text-center">
          <div className="flex flex-col gap-4">
            <h1 className="bg-gradient-to-l from-white to-[#ECECEC]/40 bg-clip-text font-montserrat text-7xl font-medium tracking-wide text-transparent">
              Eleve com Rapidez: <br />
              Resultados em Minutos
            </h1>
            <p className="font-inter text-xl font-light text-[#ececec65]">
              Eleve seus projetos com segurança. Nossos serviços de içamento
              <br /> tornam o trabalho rápido e confiável.
            </p>
          </div>

          <div className="flex gap-4">
            <button className="rounded-3xl bg-[#DC143C] px-8 py-2">Contrate Agora</button>
            <button className="rounded-3xl border-2 px-8 py-2">Nossos Serviços</button>
          </div>
        </div>
      </main>

      {/* Seção de Proteção, Normas e Certificações */}
      <section className="rounded-3xl bg-[#0C0C08] py-[100px]">
        <h1 className="mb-8 text-center font-source text-[87px]">
          Proteção, Normas e Certificações
        </h1>

        <div className="mx-auto grid max-w-6xl grid-cols-3 gap-6">
          <div>
            <h2 className="mb-4 font-montserrat text-2xl font-bold">Documento ART</h2>
            <p className="font-inter text-xl">
              Laudo técnico ART emitido por engenheiro para içamento.
            </p>
          </div>

          <div>
            <h2 className="mb-4 font-montserrat text-2xl font-bold">Seguro de Elevação</h2>
            <p className="font-inter text-xl">
              Termo de responsabilidade para prevenção de acidentes.
            </p>
          </div>

          <div>
            <h2 className="mb-4 font-montserrat text-2xl font-bold">
              Certificações de Segurança e Trabalho
            </h2>
            <p className="mb-3 font-inter text-xl">
              NR-35: Certifica profissionais para trabalho em altura.
            </p>
            <p className="font-inter text-xl">
              NR-18: Garante segurança e organização na construção civil.
            </p>
          </div>
        </div>
      </section>

      <section className="flex min-h-screen flex-col bg-[url('/bg-desc.png')] bg-cover bg-fixed bg-center bg-no-repeat">
        <h1>Elevar é nossa especialidade, segurança é nossa prioridade.</h1>
        <p>
          Na Torres Içamentos, elevamos seus projetos com rapidez, precisão e total segurança,
          garantindo resultados confiáveis e sem complicações.
        </p>
      </section>

      <section id="trabalhos">
        <h1>Trabalhos Concluídos</h1>

        <div>
          <div>
            <img src="" alt="" />

            <div>
              <h1>Tempo de Mesa</h1>
              <p>
                13º andar — montagem em embalagem de madeira com mantas de proteção para garantir
                total segurança no içamento.
              </p>
            </div>
          </div>

          <div>
            <img src="" alt="" />

            <div>
              <h1>Içamento de Móvel Embalado</h1>
              <p>
                Volume embalado e protegido sendo içado com cabos de aço, garantindo a movimentação
                segura em área residencial com acesso restrito.
              </p>
            </div>
          </div>

          <div>
            <img src="" alt="" />

            <div>
              <h1>Equipe em operação</h1>
              <p>
                Registro da equipe conduzindo o equipamento com precisão e cuidado, garantindo um
                içamento seguro do início ao fim.
              </p>
            </div>
          </div>
        </div>

        <button>
          Solicitar Orçamento <i className="ph ph-arrow-circle-down"></i>
        </button>
      </section>

      <section
        id="parceiros"
        className="h-[800px] bg-[url('/bg-parceiros.png')] bg-cover bg-center bg-no-repeat"
      >
        <div className="max-w-3xl pl-[200px] pt-[250px]">
          <h1 className="mb-6 font-source text-6xl">Parceiros</h1>
          <p className="mb-6 font-montserrat text-2xl">
            Parcerias fortalecem nossa atuação e ampliam nossa capacidade de oferecer soluções
            seguras e eficientes. Trabalhamos ao lado de empresas que compartilham nossos valores,
            garantindo qualidade em cada etapa do processo.
          </p>
          <button className="font-sm rounded-3xl bg-[#DC143C] px-8 py-3 font-inter font-bold hover:bg-[#B01030]">
            Seja um Parceiro
          </button>
        </div>
      </section>
      <div className="rounded-3xl bg-[#0C0C08] py-[60px]">
        <div className="flex flex-col items-center justify-center md:flex-row md:gap-14 lg:flex-row lg:gap-20 xl:flex-row xl:gap-[200px]">
          <img src="rocha_machado.png" alt="" className="h-28 w-auto md:h-20 lg:h-auto xl:h-auto" />
          <img
            src="lima.png"
            alt=""
            className="mb-24 mt-24 h-32 w-auto md:mb-0 md:mt-0 md:h-28 lg:mb-0 lg:mt-0 lg:h-auto xl:mb-0 xl:mt-0 xl:h-auto"
          />
          <img src="bazzy.png" alt="" className="w-auto md:h-28" />
        </div>
      </div>

      <section id="sobre">
        <div>
          <h1>
            A TORRES IÇAMENTOS atua com equipamentos de alta qualidade e foco total em segurança.
          </h1>
          <p>
            Utilizamos estruturas que preservam paredes, janelas e pisos, garantindo eficiência sem
            danos. Nossa missão é realizar içamentos com excelência e responsabilidade técnica em
            cada operação.
          </p>
          <button>
            Solicitar Orçamento <i className="ph ph-arrow-circle-down"></i>
          </button>
        </div>
      </section>

      <section id="feedback">
        <h1>Feedback</h1>
        <p>
          Confira a opinião de nossos clientes sobre a segurança e eficiência dos nossos serviços
        </p>

        <div>
          <div>
            <img src="" alt="" />
            <img src="" alt="" />
            <img src="" alt="" />
          </div>

          <div>
            <img src="" alt="" />
            <p>
              A equipe da Torres Icamentos realizou o serviço com agilidade e atenção aos detalhes,
              garantindo segurança e confiança em cada etapa. Excelente trabalho.
            </p>
            <h3>Cliente</h3>
          </div>
        </div>
      </section>

      <section id="contato" className="bg-[#0C0C08]">
        <div>
          <h2>Solicite um orçamento com nossa equipe</h2>

          <div>
            <form action="">
              <div>
                <label htmlFor="name" id="name">
                  Nome*
                </label>
                <input type="text" id="name" name="name" />

                <label htmlFor="surname" id="surname">
                  Nome*
                </label>
                <input type="text" id="surname" name="name" />
              </div>

              <label htmlFor="email" id="email">
                Email*
              </label>
              <input type="email" id="email" name="email" />

              <label htmlFor="descriptiopn" id="descriptiopn">
                Deixe sua mensagem*
              </label>
              <textarea name="descriptiopn" id="descriptiopn" cols={30} rows={10}></textarea>
            </form>
          </div>
        </div>
      </section>

      <footer className="bg-[url('/footer.png')] bg-cover bg-center">
        <div className="container mx-auto px-[60px] pb-10 pt-10">
          <div className="flex flex-col items-center gap-[200px] md:flex-row">
            <div className="shrink-0">
              <img src="logo.png" alt="" />
            </div>

            <div className="grid grid-cols-1 gap-20 md:grid-cols-3">
              <div>
                <h2 className="mb-[16px] font-inter text-lg font-bold">Endereço</h2>
                <p className="mb-3 flex gap-2 font-inter">
                  <img src="map.png" alt="" />R Rosa Ruas Dias 20
                  <br />
                </p>
                <p className="flex gap-2 font-inter">
                  <img src="email.png" alt="" />
                  torresicamentos@gmail.com
                </p>
              </div>

              <div>
                <h2 className="mb-[16px] font-inter text-lg font-bold">Sobre</h2>
                <ul>
                  <li className="mb-3 font-inter">
                    <a href="" className="hover:underline">
                      Inicio
                    </a>
                  </li>
                  <li className="mb-3 font-inter">
                    <a href="" className="hover:underline">
                      Trabalhos
                    </a>
                  </li>
                  <li className="mb-3 font-inter">
                    <a href="" className="hover:underline">
                      Parcerias
                    </a>
                  </li>
                  <li className="mb-3 font-inter">
                    <a href="" className="hover:underline">
                      Documentação
                    </a>
                  </li>
                </ul>
              </div>

              <div>
                <h2 className="mb-[16px] font-inter text-lg font-bold">Notificações</h2>
                <form action="" className="mb-3">
                  <div className="">
                    <label htmlFor="" id="email">
                      Email
                    </label>
                    <input type="text" id="email" className="mb-2 mt-2 flex w-[235px] py-1" />
                    <button className="w-[235px] bg-[#0A84FF] py-1 transition-colors duration-200 hover:bg-[#0070E0]">
                      Inscrever-se
                    </button>
                  </div>
                </form>

                <div>
                  <h2 className="mb-3">Siga-nos</h2>
                  <div className="flex gap-3">
                    <a href="">
                      <img src="face.png" alt="" className="h-6 w-6" />
                    </a>
                    <a href="">
                      <img src="insta.png" alt="" className="h-6 w-6" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mx-auto px-2 px-[120px]">
          <div className="flex justify-between gap-4 text-sm">
            <h3 className="text-sm">© 2025 Todos os Direitos Reservados</h3>
            <nav className="mb-3 flex gap-6">
              <a href="" className="hover:underline">
                Política de Privacidade
              </a>
              <a href="" className="hover:underline">
                Termos de uso
              </a>
            </nav>
          </div>
        </div>
      </footer>
    </Fragment>
  );
};
