import { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div>
      <header className="flex justify-between p-5 bg-[#1F2937] text-[#F9FAFB] rounded-xl text-center text-al">
        <h2>DevMauro</h2>
        <nav>
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="lg:hidden"
          >
            <RxHamburgerMenu size={25} />
          </button>

          <ul
            className={`flex gap-10 max-lg:flex-col max-lg:mt-5 max-lg:fixed max-lg:pr-11 ${
              menuOpen ? "block" : "hidden lg:flex"
            }`}
          >
            <li>Inicio</li>
            <li>Sobre</li>
            <li>Habilidades</li>
            <li>Projetos</li>
            <li>Contato</li>
          </ul>
        </nav>
      </header>
    </div>
  );
}

export default Navbar;
