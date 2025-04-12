import "../pages/home.css";
import Menu from "../components/Menu";

//img
import github from "../assets/placa-do-github (1).png";
import linkedin from "../assets/linkedin__1_-removebg-preview 1 (3).png";
import instagram from "../assets/instagram (3) (1).png";
function Home(){
    return(
      <section className="Home">
        <Menu />
        <section className="TitleORG">
        <h1 id="title">Olá, sou Everton, um desenvolvedor Back End.</h1>
        <div className="redes"> 

          <a href="https://github.com/EvertnnSantts"><img id="logorede" src = {github}/></a>
          <a href="https://www.instagram.com/evert.nn/"><img id="logorede" src = {instagram} /></a>
          <a href="https://www.linkedin.com/in/everton-ferreira-707b82317/"><img id="logorede" src = {linkedin}/></a>
        </div>
        </section>
      </section>
    );
}

export default Home;