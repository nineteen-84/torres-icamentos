import { Menu, X } from "lucide-react";
import { useState } from "react";

import { Link } from "react-scroll";

export const Header = () => {
  const [open, setOpen] = useState(false);
  const optionsMenu = ["Home", "Trabalhos", "Parceiros", "Sobre", "Contato"];

  return (
    <header className="relative mx-6 mt-6 lg:mx-0 lg:mt-0 lg:flex lg:justify-center lg:p-8">
      <div className="flex items-center justify-between lg:hidden">
        <img className="h-12 rounded-lg border border-gray-600" src="/logo.png" alt="Logo" />

        <button
          onClick={() => setOpen(!open)}
          className="fixed right-6 top-6 z-50 rounded-full bg-black/20 p-3 text-white backdrop-blur-sm transition-all duration-300 hover:scale-110 hover:bg-white hover:text-black active:scale-95"
        >
          <div className={`transition-transform duration-300 ${open ? "rotate-90" : "rotate-0"}`}>
            {open ? <X size={20} /> : <Menu size={20} />}
          </div>
        </button>
      </div>

      <nav
        className={`fixed inset-0 z-40 flex flex-col items-center justify-center gap-10 bg-black/95 transition-all duration-300 ${open ? "opacity-100" : "pointer-events-none opacity-0"} lg:pointer-events-auto lg:static lg:z-auto lg:flex lg:flex-row lg:gap-10 lg:bg-transparent lg:opacity-100`}
      >
        {optionsMenu.map((item) => (
          <Link
            key={item}
            to={item.toLowerCase()}
            smooth={true}
            duration={1000}
            onClick={() => setOpen(false)}
            className="w-28 cursor-pointer rounded-full px-4 py-2 text-center text-white transition-all duration-300 hover:bg-white hover:text-black hover:shadow-md lg:w-auto"
          >
            {item}
          </Link>
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
  );
};
