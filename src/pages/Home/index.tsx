import { Construction, Factory, Settings, Camera, Phone, Mail, MapPin, Clock, User } from "lucide-react";

export const Home = () => {
  return (
    <div className="bg-white text-gray-900">
      {/* Header */}
      <header className="bg-white shadow-sm fixed w-full z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold text-red-600">Torres Içamentos</div>
          <nav className="hidden md:flex space-x-8">
            <a href="#home" className="hover:text-red-600 transition">
              Home
            </a>
            <a href="#servicos" className="hover:text-red-600 transition">
              Serviços
            </a>
            <a href="#portfolio" className="hover:text-red-600 transition">
              Portfólio
            </a>
            <a href="#equipe" className="hover:text-red-600 transition">
              Equipe
            </a>
            <a href="#sobre" className="hover:text-red-600 transition">
              Sobre
            </a>
            <a href="#contato" className="hover:text-red-600 transition">
              Contato
            </a>
          </nav>
          <button className="bg-red-600 text-white px-6 py-2 rounded hover:bg-red-700 transition">
            Solicitar Orçamento
          </button>
        </div>
      </header>

      {/* Hero - Carrossel */}
      <section id="home" className="pt-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 py-16">
          <div className="text-center mb-12">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Soluções em <span className="text-red-600">Içamentos</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Içamos seus móveis com precisão, segurança e experiência – cada projeto tratado com cuidado especializado.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-red-600 text-white px-8 py-3 rounded hover:bg-red-700 transition">
                Conheça nossos serviços
              </button>
              <button className="border border-red-600 text-red-600 px-8 py-3 rounded hover:bg-red-600 hover:text-white transition">
                Solicite um orçamento
              </button>
            </div>
          </div>

          {/* Carrossel de projetos */}
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="h-48 bg-gray-300 flex items-center justify-center">
                <Construction className="w-16 h-16 text-gray-600" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Projeto Industrial ABC</h3>
                <p className="text-gray-600">
                  Içamento de maquinário pesado em complexo industrial
                </p>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="h-48 bg-gray-300 flex items-center justify-center">
                <Factory className="w-16 h-16 text-gray-600" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Instalação Fabril XYZ</h3>
                <p className="text-gray-600">Montagem de estruturas metálicas de grande porte</p>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="h-48 bg-gray-300 flex items-center justify-center">
                <Settings className="w-16 h-16 text-gray-600" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Obra Logística DEF</h3>
                <p className="text-gray-600">Içamento especializado em centro de distribuição</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Serviços */}
      <section id="servicos" className="py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-12">Nossos Serviços</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="w-16 h-16 bg-red-600 rounded-full mb-6 flex items-center justify-center">
                <Construction className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-semibold mb-4">Içamento Pesado</h3>
              <p className="text-gray-600">
                Transporte e movimentação de cargas de grande porte com segurança e precisão
                técnica.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="w-16 h-16 bg-red-600 rounded-full mb-6 flex items-center justify-center">
                <Settings className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-semibold mb-4">Içamento Médio</h3>
              <p className="text-gray-600">
                Soluções versáteis para cargas de porte médio em diversos setores industriais.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="w-16 h-16 bg-red-600 rounded-full mb-6 flex items-center justify-center">
                <Settings className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-semibold mb-4">Içamento Especializado</h3>
              <p className="text-gray-600">
                Projetos customizados com análise técnica detalhada e equipamentos específicos.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Portfólio */}
      <section id="portfolio" className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-12">Portfólio</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <div key={item} className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="h-48 bg-gray-300 flex items-center justify-center">
                  <Camera className="w-16 h-16 text-gray-600" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">Projeto Industrial {item}</h3>
                  <p className="text-gray-600">
                    Içamento de maquinário em fábrica - Setor automotivo
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Equipe */}
      <section id="equipe" className="py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-12">Nossa Equipe</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-32 h-32 bg-gray-300 rounded-full mx-auto mb-4 flex items-center justify-center">
                <User className="w-16 h-16 text-gray-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">João Silva</h3>
              <p className="text-red-600 mb-2">Engenheiro de Operações</p>
              <p className="text-gray-600">10 anos em içamentos industriais</p>
            </div>
            <div className="text-center">
              <div className="w-32 h-32 bg-gray-300 rounded-full mx-auto mb-4 flex items-center justify-center">
                <User className="w-16 h-16 text-gray-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Maria Santos</h3>
              <p className="text-red-600 mb-2">Engenheira de Segurança</p>
              <p className="text-gray-600">8 anos em projetos especializados</p>
            </div>
            <div className="text-center">
              <div className="w-32 h-32 bg-gray-300 rounded-full mx-auto mb-4 flex items-center justify-center">
                <User className="w-16 h-16 text-gray-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Carlos Oliveira</h3>
              <p className="text-red-600 mb-2">Técnico Especialista</p>
              <p className="text-gray-600">12 anos em operações de içamento</p>
            </div>
          </div>
        </div>
      </section>

      {/* Sobre */}
      <section id="sobre" className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-8">Sobre a Torres Içamentos</h2>
          <p className="text-xl text-gray-600 mb-8">
            A <strong>TORRES IÇAMENTOS</strong> trabalha com equipamentos de alta qualidade, sempre visando a segurança de seus funcionários e clientes.
            Utilizamos uma estrutura que não danifica paredes, janelas, guarda-corpo, parapeitos, portas e qualquer tipo de pisos.

            <p>A missão de nossa empresa é realizar um trabalho de qualidade com segurança.
            </p>
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="text-3xl font-bold text-red-600 mb-2">15+</div>
              <p className="text-gray-600">Anos de experiência</p>
            </div>
            <div>
              <div className="text-3xl font-bold text-red-600 mb-2">500+</div>
              <p className="text-gray-600">Projetos realizados</p>
            </div>
            <div>
              <div className="text-3xl font-bold text-red-600 mb-2">100%</div>
              <p className="text-gray-600">Segurança garantida</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contato */}
      <section id="contato" className="py-16">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-12">Entre em Contato</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-semibold mb-6">Informações de Contato</h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <Phone className="w-6 h-6 mr-4 text-red-600" />
                  <div>
                    <p className="font-semibold">Telefone</p>
                    <p className="text-gray-600">(11) 5925-6665</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <Mail className="w-6 h-6 mr-4 text-red-600" />
                  <div>
                    <p className="font-semibold">E-mail</p>
                    <p className="text-gray-600">torresicamentos@gmail.com</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <MapPin className="w-6 h-6 mr-4 text-red-600" />
                  <div>
                    <p className="font-semibold">Endereço</p>
                    <p className="text-gray-600">São Paulo, SP</p>
                  </div>
                </div>
                <div className="flex items-center mt-4">
                  <Clock className="w-6 h-6 mr-4 text-red-600" />
                  <div>
                    <p className="font-semibold">Atendimento</p>
                    <p className="text-gray-600">Seg a Sex: 9:00 às 18:00</p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <form className="space-y-4">
                <input
                  type="text"
                  placeholder="Nome"
                  className="w-full p-3 border border-gray-300 rounded"
                />
                <input
                  type="text"
                  placeholder="Empresa"
                  className="w-full p-3 border border-gray-300 rounded"
                />
                <input
                  type="tel"
                  placeholder="Telefone"
                  className="w-full p-3 border border-gray-300 rounded"
                />
                <input
                  type="email"
                  placeholder="E-mail"
                  className="w-full p-3 border border-gray-300 rounded"
                />
                <textarea
                  placeholder="Mensagem"
                  rows={4}
                  className="w-full p-3 border border-gray-300 rounded"
                ></textarea>
                <button
                  type="submit"
                  className="w-full bg-red-600 text-white py-3 rounded hover:bg-red-700 transition"
                >
                  Enviar Mensagem
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p>&copy; 2024 Torres Içamentos. Todos os direitos reservados.</p>
        </div>
      </footer>
    </div>
  );
};
