import { FaGithub } from "react-icons/fa";
import Pokebola from "../assets/pokebola.png";
import MusicImg from "../assets/music-page.png";
import CalculadoraImg from "../assets/calculadoraFrete.png";

function ProjetoLista() {
  return (
    <div
      id="projetos"
      className="flex items-center justify-center flex-col flex-gap-8 mt-50 pb-20"
    >
      <h2 className="mb-4 text-5xl font-bold hover:text-white text-purple-700">
        Projetos
      </h2>
      <section className=" flex justify-evenly mt-30 w-screen">
        {/* Projeto pokédex */}
        <div className="flex flex-col w-100 h-auto p-5 rounded-xl items-center gap-4 bg-gray-700 transform transition duration-300 hover:scale-105 hover:shadow-xl hover:shadow-purple-500">
          <img
            className="w-90 h-90 rounded-2xl"
            src={Pokebola}
            alt="Foto de uma pokédex"
          />
          <h3 className="font-bold text-xl">Projeto Pokédex</h3>
          <p className="text-center">
            Projeto baseado em uma pokédex usando uma API.
          </p>
          <div className="links">
            <a href="https://github.com/Nogrog150/Pokedex" target="blank">
              <FaGithub size={50} />
            </a>
          </div>
        </div>

        {/* Projeto site de música */}
        <div className="flex flex-col w-100 h-auto p-5 rounded-xl items-center gap-4 bg-gray-700 transform transition duration-300 hover:scale-105 hover:shadow-xl hover:shadow-purple-500">
          <img
            className="rounded-2xl w-90 h-90"
            src={MusicImg}
            alt="Imagem com varias fotos saindo de uma caixa de som."
          />
          <h3 className="font-bold text-xl">Landing page</h3>
          <p className="text-center">Site baseado em aplicativo de música.</p>
          <div className="links">
            <a
              href="https://github.com/Nogrog150/Music-landing-page"
              target="_blank"
            >
              <FaGithub className="mt-4" size={50}></FaGithub>
            </a>
          </div>
        </div>

        {/* Calculadora de frete */}
        <div className="flex flex-col w-100 h-auto p-5 rounded-xl items-center gap-4 bg-gray-700 transform transition duration-300 hover:scale-105 hover:shadow-xl hover:shadow-purple-500">
          <img
            src={CalculadoraImg}
            alt="Foto com vários métodos de fretes saindo de um telefone"
            className="rounded-2xl w-90 h-90"
          />
          <h3 className="font-bold text-xl">Calculadora Frete</h3>
          <p className="text-center">
            Site feito com node.js para calcular fretes
          </p>
          <a
            href="https://github.com/Nogrog150/calculadora-de-frete"
            target="_blank"
          >
            <FaGithub className="mt-4" size={50}></FaGithub>
          </a>
        </div>
      </section>
    </div>
  );
}

export default ProjetoLista;
