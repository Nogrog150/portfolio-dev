import { useState } from "react";
import { RxHamburgerMenu, RxCross1 } from "react-icons/rx";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div>
      <header className="relative flex justify-between items-center p-5 bg-[#1F2937] text-[#F9FAFB] rounded-xl">
        <h2 className="text-2xl font-bold">DevMauro</h2>
        
        <nav>
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="lg:hidden relative z-99" 
          >
            {menuOpen ? <RxCross1 size={25} /> : <RxHamburgerMenu size={25} />}
          </button>

          <ul
            className={`
              /* --- Estilos Base para o Menu Mobile (padrão) --- */
              fixed top-0 right-0 h-full w-64 bg-[#1F2937] 
              flex flex-col justify-center items-center gap-8
              transition-transform duration-300 ease-in-out z-10
              
              /* --- Esconde ou Mostra o Menu Mobile --- */
              ${menuOpen ? "translate-x-0" : "translate-x-full"}

              /* --- Estilos para Telas Grandes (Desktop) --- */
              lg:relative lg:flex lg:flex-row lg:h-auto lg:w-auto
              lg:bg-transparent lg:translate-x-0 lg:gap-10
            `}
          >
            <li><a href="#inicio" onClick={() => setMenuOpen(false)}>Inicio</a></li>
            <li><a href="#sobre" onClick={() => setMenuOpen(false)}>Sobre</a></li>
            <li><a href="#habilidades" onClick={() => setMenuOpen(false)}>Habilidades</a></li>
            <li><a href="#projetos" onClick={() => setMenuOpen(false)}>Projetos</a></li>
            <li><a href="#contato" onClick={() => setMenuOpen(false)}>Contato</a></li>
          </ul>
        </nav>
      </header>
    </div>
  );
}