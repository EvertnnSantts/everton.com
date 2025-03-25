import "../pages/home.css";
import MenuPrinciapal from "../components/MenuPrincipal";
function home(){
    return(
      <section className="home">
        <MenuPrinciapal/>
        <div className="redes">
          
        </div>
        <section className="TitleORG">
        <h1 id="title">Olá, sou Everton, um desenvolvedor Back End.</h1>
        <h2 id="subtitle">Hello, I am Everton👋 Sou desenvolvedor de Software e Analista de Sistemas, com uma sólida experiência em desenvolvimento Back End. Tenho trabalhado em projetos pessoais e freelancing, entregando soluções de alta qualidade aos meus clientes.</h2>
        </section>
      </section>
    );
}

export default home;