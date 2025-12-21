import { Lightbulb } from "lucide-react";
import { Fragment } from "react/jsx-runtime";

export const NotFound = () => {
  return (
    <Fragment>
      {/* 404 Page */}
      <main className="flex min-h-screen flex-col bg-[url('/main.jpg')] bg-cover bg-fixed bg-center bg-no-repeat">
        <header className="mb-4 mt-4 flex justify-center p-8">
          <nav className="flex gap-10">
            {["Trabalhos", "Parceiros", "Sobre", "Contato"].map((item) => (
              <a
                key={item}
                href={`/#${item.toLowerCase()}`}
                className="w-28 rounded-full px-4 py-2 text-center text-white transition-all duration-300 hover:bg-white hover:text-black hover:shadow-md"
              >
                {item}
              </a>
            ))}
          </nav>
        </header>

        <div className="flex flex-1 flex-col items-center justify-center gap-12 bg-gradient-to-t from-black/70 via-black/30 text-center">
          <div className="flex flex-col items-center gap-6">
            <div className="mb-4">
              <h1 className="bg-gradient-to-l from-white to-[#ECECEC]/40 bg-clip-text font-montserrat text-9xl font-bold tracking-wide text-transparent">
                404
              </h1>
            </div>

            <h2 className="bg-gradient-to-l from-white to-[#ECECEC]/40 bg-clip-text font-montserrat text-5xl font-medium tracking-wide text-transparent">
              Ops! Esta página não conseguimos içar!
            </h2>

            <p className="max-w-2xl font-inter text-xl font-light text-[#ffffff]">
              Parece que a página que você procura caiu durante o transporte.
            </p>
          </div>

          <div className="flex gap-4">
            <a
              href="/"
              className="rounded-3xl bg-[#DC143C] px-8 py-3 font-medium text-white transition-colors duration-300 ease-in hover:bg-red-700"
            >
              Voltar ao Início
            </a>
            <a
              href="/#contato"
              className="rounded-full border border-white/40 bg-white/10 px-8 py-3 font-medium text-white shadow-lg backdrop-blur-md transition-all duration-300 hover:bg-white hover:text-black hover:shadow-xl"
            >
              Fale Conosco
            </a>
          </div>

          <div className="mt-8 text-white/60">
            <p className="flex items-center gap-2 font-inter text-sm">
              <Lightbulb size={32} /> Dica: Que tal conhecer nossos trabalhos de içamento enquanto
              está aqui?
            </p>
          </div>
        </div>
      </main>
    </Fragment>
  );
};
