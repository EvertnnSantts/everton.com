import "../pages/home.css";
import MenuPrinciapal from "../components/MenuPrincipal";
//img
import github from "../assets/placa-do-github (1).png";
import linkedin from "../assets/linkedin__1_-removebg-preview 1 (3).png";
import instagram from "../assets/instagram (3) (1).png";
function home(){
    return(
      <section className="home">
        <MenuPrinciapal/>
        <section className="TitleORG">
        <h1 id="title">Olá, sou Everton, um desenvolvedor Back End.</h1>
        <div className="redes"> 
          <img src = {github} />
          <img src = {linkedin} />
          <img src = {instagram} />
        </div>
        </section>
      </section>
    );
}

export default home;