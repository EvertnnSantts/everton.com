import './App.css';
import Menu from "../components/Menu.js";
import Home from './pages/home.js';
import Projetos from './pages/Projetos.js';
import Personagem from './pages/Personagem.js';
import Footer from './pages/Footer.js'

function App() {
  return (
    <div className="App">
      <Menu/>
      <Home />
      <Projetos />
      <Personagem />
      <Footer />
    </div>
  );
}

export default App;
