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
          <img id="logorede" src = {github} />
          <img id="logorede" src = {linkedin} />
          <img id="logorede" src = {instagram} />
        </div>
        </section>
      </section>
    );
}

export default Home;