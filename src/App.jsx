import Navbar from "./styles/Navbar"
import Sobre from "./components/Sobre"
import Habilidades from "./components/Habilidades";
import HeroSection from "./components/HeroSection";
import ProjetoLista from "./components/ProjetoLista";
import Footer from "./styles/Footer"

function App() {
  return (
    <div className="min-h-screen bg-[#111827] text-white">
      <Navbar></Navbar>
      <HeroSection></HeroSection>
      <Sobre></Sobre>
      <Habilidades></Habilidades>
      <ProjetoLista></ProjetoLista>
      <Footer></Footer>
    </div>
  );
}

export default App
