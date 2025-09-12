import { FaReact } from "react-icons/fa";
import { FaJs } from "react-icons/fa";
import { FaPython } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa";

function Habilidades() {
  return (
    <div className="flex justify-center items-center flex-col mt-20">
      <h2 className="mb-4 text-3xl font-bold text-purple-700">Habilidades</h2>
      <section
        id=""
        className="
        {/* Responsividade para Desktops */}
        w-full mt-10 flex flex-row justify-evenly items-center
        
        {/* Responsividade para mobile */}
        max-xl:flex-col max-xl:gap-10
        "
      >
        <div className="flex flex-col justify-center items-center gap-5">
          <FaReact size={90} color="#61DAFB"></FaReact>
          <p className="w-80 text-center">
            Criação de interfaces responsivas e componentizadas seguindo as
            melhores práticas do framework.
          </p>
        </div>

        <div
          id="js"
          className="flex flex-col justify-center items-center gap-5"
        >
          <FaJs color="#F7DF1E" size={90}></FaJs>
          <p className="w-80 text-center">
            Desenvolvimento de aplicações web modernas com foco em performance e
            experiência do usuário.
          </p>
        </div>

        <div className="flex flex-col justify-center items-center gap-5">
          <FaNodeJs color="#339933" size={90}></FaNodeJs>
          <p className="w-80 text-center">
            Construção de APIs RESTful escaláveis e sistemas backend robustos
            para aplicações web.
          </p>
        </div>

        <div className="flex flex-col justify-center items-center gap-5">
          <FaPython color="#3776AB" size={90}></FaPython>
          <p className="w-80 text-center">
            Desenvolvimento de automações, análise de dados e integração com
            diferentes sistemas e APIs.
          </p>
        </div>
      </section>
    </div>
  );
}

export default Habilidades;
