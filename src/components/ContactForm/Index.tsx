export const ContactForm = () => {
  return (
    <>
      {/* Overlay */}
      <div className="pointer-events-none absolute inset-0 bg-[#0C0C08]"></div>

      {/* Conteúdo */}
      <div className="container relative z-10 mx-auto flex flex-col gap-10 px-4 py-10 lg:flex-row">
        {/* Coluna lateral — logo primeiro no mobile */}
        <div className="flex w-full flex-col gap-8 lg:w-1/2">
          {/* Logo da empresa */}
          <div className="group overflow-hidden rounded-2xl shadow-md transition duration-500 hover:shadow-lg">
            <img
              src="/logo-cntt.jpeg"
              alt="Torres Içamentos"
              className="h-96 w-full max-w-full rounded-2xl object-cover transition duration-500 group-hover:scale-105"
            />
          </div>

          {/* Card informações */}
          <div className="w-full rounded-2xl bg-white p-6 shadow-md transition duration-500 hover:shadow-lg">
            <div className="flex flex-col gap-4">
              {[
                {
                  icon: "https://img.icons8.com/?size=100&id=12580&format=png&color=000000",
                  label: "Email",
                  value: "torresicamentos@gmail.com",
                  href: "mailto:torresicamentos@gmail.com",
                },
                {
                  icon: "https://img.icons8.com/?size=100&id=9660&format=png&color=000000",
                  label: "Telefone",
                  value: "5925-4049",
                  href: "tel:59254049",
                },
                {
                  icon: "https://img.icons8.com/?size=100&id=16712&format=png&color=000000",
                  label: "WhatsApp",
                  value: "(11) 94719-6430",
                  href: "https://wa.me/5511947196430",
                },
              ].map((item, i) => (
                <a
                  key={i}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 rounded-xl bg-[#FAFAFA] p-4 transition duration-300 hover:scale-105 hover:bg-[#F2F2F2]"
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
        <div className="flex w-full flex-col gap-6 rounded-2xl bg-white p-8 shadow-md transition duration-500 hover:shadow-lg lg:w-1/2">
          <h1 className="text-2xl font-bold text-black lg:text-5xl">
            Entre em contato com a equipe da Torres Içamentos
          </h1>
          <p className="text-sm text-[#343434] lg:text-lg">
            Solicite informações ou orçamentos com nossa equipe especializada.
          </p>
          <div className="flex items-center">
            <div className="flex-grow border-t border-gray-300"></div>
            <span className="mx-4 flex-shrink text-gray-400">•</span>
            <div className="flex-grow border-t border-gray-300"></div>
          </div>
          <p className="text-center text-sm text-gray-500">ou chame no whatsapp</p>

          {/* Campos */}
          <div className="flex flex-col gap-4 md:flex-row">
            <div className="flex flex-col gap-2 md:w-1/2">
              <label htmlFor="nome" className="text-sm font-semibold text-black">
                Nome
              </label>
              <input
                type="text"
                id="nome"
                name="nome"
                placeholder="Ex: José"
                className="h-11 w-full rounded-xl border border-gray-300 px-4 text-sm text-black transition focus:border-red-600 focus:outline-none focus:ring-2 focus:ring-red-300"
                required
              />
            </div>
            <div className="flex flex-col gap-2 md:w-1/2">
              <label htmlFor="sobrenome" className="text-sm font-semibold text-black">
                Sobrenome
              </label>
              <input
                type="text"
                id="sobrenome"
                name="sobrenome"
                placeholder="Ex: Silva"
                className="h-11 w-full rounded-xl border border-gray-300 px-4 text-sm text-black transition focus:border-red-600 focus:outline-none focus:ring-2 focus:ring-red-300"
                required
              />
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="email" className="text-sm font-semibold text-black">
              E-mail
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="exemplo@dominio.com"
              className="h-11 w-full rounded-xl border border-gray-300 px-4 text-sm text-black transition focus:border-red-600 focus:outline-none focus:ring-2 focus:ring-red-300"
              required
            />
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="mensagem" className="text-sm font-semibold text-black">
              Mensagem
            </label>
            <textarea
              id="mensagem"
              name="mensagem"
              placeholder="Digite sua mensagem"
              rows={4}
              className="resize-none rounded-xl border border-gray-300 px-4 py-3 text-sm text-black transition focus:border-red-600 focus:outline-none focus:ring-2 focus:ring-red-300"
              required
            />
          </div>

          {/* Botão enviar */}
          <button className="mt-4 w-full rounded-xl bg-red-600 py-3 font-semibold text-white transition duration-300 hover:scale-105 hover:bg-red-700">
            Enviar
          </button>
        </div>
      </div>
    </>
  );
};
