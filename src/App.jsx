import Navbar from "./styles/Navbar"
import Sobre from "./components/Sobre"
import Habilidades from "./components/Habilidades";
import HeroSection from "./components/HeroSection";

function App() {
  return (
    <div className="min-h-screen bg-[#111827] text-white">
      <Navbar></Navbar>
      <HeroSection></HeroSection>
      <Sobre></Sobre>
      <Habilidades></Habilidades>
    </div>
  );
}

export default App
