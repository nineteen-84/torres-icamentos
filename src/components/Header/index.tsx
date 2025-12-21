import { useState } from 'react';

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = ["Trabalhos", "Parceiros", "Sobre", "Contato"];

  return (
    <header className="relative z-50 mb-4 mt-4 flex justify-between items-center p-4 md:p-8">
      {/* Logo */}
      <div className="flex items-center">
        <h2 className="text-white font-bold text-xl md:text-2xl font-montserrat">
          Torres Içamentos
        </h2>
      </div>

      {/* Desktop Navigation */}
      <nav className="hidden md:flex gap-10">
        {menuItems.map((item) => (
          <a
            key={item}
            href={`#${item.toLowerCase()}`}
            className="w-28 rounded-full px-4 py-2 text-center text-white transition-all duration-300 hover:bg-white hover:text-black hover:shadow-md"
          >
            {item}
          </a>
        ))}
      </nav>

      {/* Mobile Menu Button */}
      <button
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        className="md:hidden flex flex-col justify-center items-center w-8 h-8 space-y-1"
        aria-label="Menu"
      >
        <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${
          isMenuOpen ? 'rotate-45 translate-y-1.5' : ''
        }`} />
        <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${
          isMenuOpen ? 'opacity-0' : ''
        }`} />
        <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${
          isMenuOpen ? '-rotate-45 -translate-y-1.5' : ''
        }`} />
      </button>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="md:hidden fixed inset-0 bg-black/90 backdrop-blur-sm z-40">
          <nav className="flex flex-col items-center justify-center h-full space-y-8">
            {menuItems.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                onClick={() => setIsMenuOpen(false)}
                className="text-white text-2xl font-montserrat hover:text-[#DC143C] transition-colors duration-300"
              >
                {item}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};