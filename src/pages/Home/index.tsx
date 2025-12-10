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
      <section>
        <h1>Proteção, Normas e Certificações</h1>

        <div>
          <div>
            <h2>Documento ART</h2>
            <p>Laudo técnico ART emitido por engenheiro para içamento.</p>
          </div>

          <div>
            <h2>Seguro de Elevação</h2>
            <p>Termo de responsabilidade para prevenção de acidentes.</p>
          </div>

          <div>
            <h2>Certificações de Segurança e Trabalho</h2>
            <p>
              NR-35: Certifica profissionais para trabalho em altura. NR-18: Garante segurança e
              organização na construção civil.
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

      <section id="parceiros">
        <div>
          <h1>Parceiros</h1>
          <p>
            Parcerias fortalecem nossa atuação e ampliam nossa capacidade de oferecer soluções
            seguras e eficientes. Trabalhamos ao lado de empresas que compartilham nossos valores,
            garantindo qualidade em cada etapa do processo.
          </p>
          <button className="rounded-3xl bg-[#DC143C] px-8 py-2">Seja um Parceiro</button>
        </div>

        <div>
          <img src="" alt="" />
          <img src="" alt="" />
          <img src="" alt="" />
        </div>
      </section>

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

      <section id="contato">
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

      <footer>
        <div>
          <img src="" alt="" />

          <div>
            <div>
              <h2>Endereço</h2>

              <div>
                <span>
                  <i className="ph ph-map-pin"></i>R Rosa Ruas Dias 20
                </span>

                <span>
                  <i className="ph ph-envelope-simple"></i>torresicamentos@gmail.com
                </span>
              </div>
            </div>

            <div>
              <h2>Sobre</h2>
              <h2>Trabalhos</h2>
              <h2>Parcerias</h2>
              <h2>Documentação</h2>
              <h2>Início</h2>
            </div>

            <div>
              <form action="">
                <h1>Notificações</h1>

                <div>
                  <label htmlFor="" id="email">
                    Email
                  </label>
                  <input type="text" id="email" />
                  <button>Inscrever-se</button>
                </div>
              </form>

              <div>
                <h2>Siga-nos</h2>

                <div>
                  <a href="">
                    <i className="ph ph-facebook-logo"></i>
                  </a>
                  <a href="">
                    <i className="ph ph-paper-plane-tilt"></i>
                  </a>
                  <a href="">
                    <i className="ph ph-instagram-logo"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div>
          <h3>© 2025 Todos os Direitos Reservados</h3>

          <nav>
            <a href="">Política de Privacidade</a>
            <a href="">Termos de uso</a>
          </nav>
        </div>
      </footer>
    </Fragment>
  );
};
