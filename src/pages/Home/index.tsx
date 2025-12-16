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

      <section id="feedbacks" className="bg-black text-white py-20">
        <div className="container mx-auto px-4">
          {/* Cabeçalho da Seção */}
          <div className="text-center mb-16">
            <h2 className="text-5xl font-serif font-bold">Feedbacks</h2>
            <p className="text-gray-400 mt-4 max-w-2xl mx-auto">Confira a opinião de nossos clientes sobre a segurança e eficiência dos nossos serviços</p>
          </div>

          {/* Container do Carrossel/Imagem Central */}
          <div className="relative flex items-center justify-center">
            
            {/* IMAGEM CENTRALIZADA (Elemento de Fundo) */}
            <div
              className="w-full max-w-3xl h-96 bg-gray-700 rounded-xl bg-cover bg-center"
              style={{ backgroundImage: `url('/icamentofeedback.jpg')` }}
            />

            {/* Card de Feedback Central (Posicionado sobre a imagem) */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 max-w-lg w-full">
              {/* Avatar */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
                <div className="w-24 h-24 bg-gray-300 rounded-full border-4 border-white shadow-lg" />
              </div>

              {/* Conteúdo do Card */}
              <div className="bg-white text-gray-800 rounded-xl shadow-2xl pt-16 pb-8 px-8 text-center">
                <p className="text-gray-600 italic">
                  "A equipe da Torres Içamentos realizou o serviço com agilidade e atenção aos detalhes, garantindo segurança e confiança em cada etapa. Excelente trabalho."
                </p>
                <p className="font-bold text-gray-900 mt-6">
                  Cliente
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

              {/* CONTATO */}
        <section id="contato-form" className="bg-black text-white py-20">
          <div className="bg-black px-4">
            <div className="w-full max-w-6xl mx-auto">

              {/* TÍTULO */}
              <div className="text-center mb-16">
                <h1 className="text-5xl md:text-6xl font-serif font-light mb-4">
                  Contato
                </h1>
                <p className="text-gray-400 text-lg">
                  Any question or remark? Just write us a message!
                </p>
              </div>

            {/* CONTAINER DOS CARDS */}
            <div className="flex flex-col md:flex-row">

              {/* CARD ESQUERDO */}
              <div className="bg-black-900 rounded-l-2xl p-8 border-8 border-white relative flex-1 flex flex-col text-lg">

                {/* CONTEÚDO */}
                <div>
                  <h2 className="text-3xl font-light mb-4">
                    Informações para contato
                  </h2>

                  <p className="text-gray-400 text-lg mb-8 leading-relaxed">
                  Estamos prontos para atender você com agilidade, transparência e total compromisso com a segurança.
                  Se você precisa de um serviço de içamento confiável, nossa equipe está preparada para entender
                  sua necessidade e oferecer a melhor solução para o seu projeto.
                  <br /><br />
                  Entre em contato conosco para solicitar um orçamento, esclarecer dúvidas ou obter mais informações
                  sobre nossos serviços. Também é possível utilizar o formulário ao lado para enviar sua mensagem
                  de forma rápida e prática.
                  <br /><br />
                  Será um prazer atender você e contribuir para o sucesso do seu projeto.
                  </p>

                  {/* Telefone */}
                  <div className="flex items-center gap-4 mb-4">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    <p className="text-gray-400 text-xl">(0) 5625 - 4048</p>
                  </div>

                  {/* Email */}
                  <div className="flex items-center gap-4 mb-4">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <p className="text-gray-400 text-xl">torresicomatias@gmail.com</p>
                  </div>

                  {/* Endereço */}
                  <div className="flex items-center gap-4">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <p className="text-gray-400 text-xl">R. Rosa Russ Opis, 20</p>
                  </div>
                </div>

                              {/* ÍCONES SOCIAIS FIXADOS NO FUNDO */}
              <div className="mt-auto pt-10">
                <p className="text-center text-gray-400 mb-4">
                  Siga-nos nas redes sociais
                </p>

                <div className="flex justify-center items-center gap-5">
                  <a href="#" className="hover:scale-110 transition">
                    <img
                      src="https://cdn-icons-png.flaticon.com/512/733/733585.png"
                      alt="Whatsapp"
                      className="w-7 h-7"
                    />
                  </a>

                  <a href="#" className="hover:scale-110 transition">
                    <img
                      src="https://cdn-icons-png.flaticon.com/512/3046/3046121.png"
                      alt="TikTok"
                      className="w-7 h-7"
                    />
                  </a>

                  <a href="#" className="hover:scale-110 transition">
                    <img
                      src="https://cdn-icons-png.flaticon.com/512/733/733579.png"
                      alt="Twitter"
                      className="w-7 h-7"
                    />
                  </a>

                  <a href="#" className="hover:scale-110 transition">
                    <img
                      src="https://cdn-icons-png.flaticon.com/512/733/733547.png"
                      alt="Facebook"
                      className="w-7 h-7"
                    />
                  </a>
                </div>
              </div>


              </div>

              {/* Lado Direito - Formulário */}
              <div className="bg-white rounded-r-2xl p-8 border-8 border-l-0 border-white flex-1">
                <form className="space-y-6">
                  {/* Linha 1: First Name e Last Name */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-gray-700 text-sm font-medium mb-2">First Name</label>
                      <input type="text" placeholder="John" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent bg-white text-gray-900 placeholder-gray-400" />
                    </div>
                    <div>
                      <label className="block text-gray-700 text-sm font-medium mb-2">Last Name</label>
                      <input type="text" placeholder="Doe" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent bg-white text-gray-900 placeholder-gray-400" />
                    </div>
                  </div>

                  {/* Email */}
                  <div>
                    <label className="block text-gray-700 text-sm font-medium mb-2">Email</label>
                    <input type="email" placeholder="john@example.com" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent bg-white text-gray-900 placeholder-gray-400" />
                  </div>

                  {/* Phone Number */}
                  <div>
                    <label className="block text-gray-700 text-sm font-medium mb-2">Phone Number</label>
                    <input type="tel" placeholder="+1 (82) 3458-789" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent bg-white text-gray-900 placeholder-gray-400" />
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-gray-700 text-sm font-medium mb-2">Message</label>
                    <textarea placeholder="Write your message..." rows={5} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent bg-white text-gray-900 placeholder-gray-400 resize-none"></textarea>
                  </div>

                  {/* Submit Button */}
                  <div className="flex justify-end">
                    <button type="submit" className="bg-black text-white px-8 py-3 rounded-lg font-medium hover:bg-gray-900 transition">
                      Enviar
                    </button>
                  </div>
                </form>
              </div>
            </div>
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
