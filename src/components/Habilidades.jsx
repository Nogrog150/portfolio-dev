import { FaReact } from "react-icons/fa";
import { FaJs } from "react-icons/fa";
import { FaPython } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa";

function Habilidades() {
  return (
    <div id="habilidades" className="flex justify-center items-center flex-col mt-50 ">
      <h2 className="mb-4 text-5xl font-bold hover:text-white text-purple-700">Habilidades</h2>
      <section
        id=""
        className="

        {/* Responsividade para Desktops */}
        w-full mt-30 flex flex-row justify-evenly items-center
        
        {/* Responsividade para mobile */}
        max-xl:flex-col max-xl:gap-10
        "
      >
        <div className="flex flex-col justify-center items-center gap-5 hover:bg-gray-700 rounded-3xl p-5 
        // Efeitos
        transform transition duration-300 hover:scale-105 hover:shadow-xl hover:shadow-purple-500
        ">
          <FaReact size={90} color="#61DAFB"></FaReact>
          <p className="w-80 text-center">
            Criação de interfaces responsivas e componentizadas seguindo as
            melhores práticas do framework.
          </p>
        </div>

        <div className="flex flex-col justify-center items-center gap-5 hover:bg-gray-700 rounded-3xl p-5 
        // Efeitos
        transform transition duration-300 hover:scale-105 hover:shadow-xl hover:shadow-purple-500
        ">
          <FaJs color="#F7DF1E" size={90}></FaJs>
          <p className="w-80 text-center">
            Desenvolvimento de aplicações web modernas com foco em performance e
            experiência do usuário.
          </p>
        </div>

        <div className="flex flex-col justify-center items-center gap-5 hover:bg-gray-700 rounded-3xl p-5 
        // Efeitos
        transform transition duration-300 hover:scale-105 hover:shadow-xl hover:shadow-purple-500
        ">
          <FaNodeJs color="#339933" size={90}></FaNodeJs>
          <p className="w-80 text-center">
            Construção de APIs RESTful escaláveis e sistemas backend robustos
            para aplicações web.
          </p>
        </div>

        <div className="flex flex-col justify-center items-center gap-5 hover:bg-gray-700 rounded-3xl p-5 
        // Efeitos
        transform transition duration-300 hover:scale-105 hover:shadow-xl hover:shadow-purple-500
        ">
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
