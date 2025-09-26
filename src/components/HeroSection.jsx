import FotoPerfil from "../assets/foto-perfil.png";

function HeroSection() {
  return (
    <div className="flex flex-row justify-evenly items-center max-lg:flex-col mb-60 max-lg:gap-10 pt-30">
      <div className="flex flex-col gap-3">
        <h1 className="font-bold text-7xl w-100">
          <span className="text-purple-700">Olá</span>, eu sou o Mauro
        </h1>
        <p className="text-gray-400 text-2xl
        /* -- responsividade -- */


        ">Sou um desenvolvedor fullstack</p>
      </div>

      <div className="w-90 h-90 rounded-full overflow-hidden flex justify-center border-4 border-black items-center">
        <img
          src={FotoPerfil}
          alt="Foto de perfil"
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
}

export default HeroSection;
