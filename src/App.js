import './App.css';
import Home from './pages/home.js';
import Projetos from './pages/Projetos.js';
import Personagem from './pages/Personagem.js';
import Footer from './pages/Footer.js';

function App() {
  return (
    <div className="App">
      <Home />
      <Projetos />
      <Personagem />
      <Footer />
    </div>
  );
}

export default App;
