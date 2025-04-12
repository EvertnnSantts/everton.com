import { useState } from "react";
import "../pages/Projetos.css";
import github from "../assets/placa-do-github (1).png";
import bibliocotrole from "../assets/bibliocotrole.png";
import cadastroapp from "../assets/cadastroapp.png";
import pandherr from "../assets/pandhher.jpeg";

const faqs = [
  {
    question: "Quais são as tecnologias que trabalho?",
    answer: "Trabalho com C#, .NET, JavaScript, Node.js, Express, React, MySQL e outras tecnologias modernas.",
  },
  {
    question: "Quando comecei no mundo da programação?",
    answer: "Comecei em 2021, desde então venho aprimorando constantemente minhas habilidades.",
  },
  {
    question: "Quais são as minhas formações?",
    answer: "Sou formado em Desenvolvimento web e atualmente curso ADS na UNIFACS.",
  },
];

function Projetos() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="projetos">
      <div className="MyProjetos">
        
        <div className="Card">
          <div className="Banner"><a href="https://github.com/EvertnnSantts/BiblioControle" ><img id="imgbanner" src={bibliocotrole}/></a></div>
          <div className="textORG">
            <div className="OrgCabeçalho">
              <h1>BiblioControle</h1> 
              <a href="https://github.com/EvertnnSantts/BiblioControle"><img id="githubIMG" src={github} alt="GitHub" /></a>
            </div>
            <div className="Descricao">
              <h3>
                BiblioControle é um sistema de gerenciamento de bibliotecas desenvolvido com JavaScript, Express.js e MySQL. Ele permite o cadastro de usuários e livros, gerencia empréstimos e devoluções, organiza o acervo, registra dados dos usuários, verifica a disponibilidade dos livros e mantém um histórico de empréstimos.
              </h3>
            </div>
            <div className="Skills">
              <h3>JavaScript, NodeJS, ExpressJS, ElectronJS, HTML, EJS, CSS</h3>
            </div>
          </div>
        </div>

        <div className="Card">
          <div className="Banner"><div className="Banner"><a href="https://github.com/EvertnnSantts/pandherr"><img id="imgbanner" src={pandherr}/></a></div></div>
          <div className="textORG">
            <div className="OrgCabeçalho">
              <h1>Pandherr</h1>
              <a href="https://github.com/EvertnnSantts/pandherr"><img id="githubIMG" src={github} alt="GitHub" /></a>
            </div>
            <div className="Descricao">
              <h3>
                A Pandherr é uma aplicação front-end desenvolvida com tecnologias modernas para oferecer uma experiência interativa e intuitiva. Construída com foco em desempenho e usabilidade, a plataforma utiliza React.js para criar uma interface dinâmica, garantindo uma navegação fluida e responsiva.
              </h3>
            </div>
            <div className="Skills">
              <h3>ReactJs, CSS</h3>
            </div>
          </div>
        </div>

        <div className="Card">
          <div className="Banner"><a href="https://github.com/EvertnnSantts/SistemaLogin"><img id="imgbanner" src={cadastroapp}/></a></div>
          <div className="textORG">
            <div className="OrgCabeçalho">
              <h1>SistemaLogin</h1> 
              <a href="https://github.com/EvertnnSantts/SistemaLogin"><img id="githubIMG" src={github} alt="GitHub" /></a>
            </div>
            <div className="Descricao">
              <h3>
                "SistemaLogin" é um sistema básico de autenticação que utiliza Express.js como backend e React.js como frontend. Ele foi desenvolvido para fornecer uma solução simples e eficiente para gerenciamento de login e autenticação de usuários. O backend, construído com Node.js e Express, gerencia as requisições, autenticação e persistência dos dados.
              </h3>
            </div>
            <div className="Skills">
              <h3>NodeJs, ExpressJs, ReactJs, CSS</h3>
            </div>
          </div>
        </div>
      </div>

      <div className="aboutORG">
        <div className="buttonORG">
          <a><button id="buttoncotantINS">Instagram</button></a>
          <a><button id="buttoncotantLIN">LinkedIn</button></a>
          <a><button id="buttoncotantGMAIL">Gmail</button></a>
          <a><button id="buttoncotantGIT">GitHub</button></a>
        </div>

        <div className="about">
          <h1 id="titleabout">About me</h1>
          <h3 id="textabout">
            Sou Everton, desenvolvedor de Software e Analista de Sistemas, com sólida experiência em desenvolvimento Back End, utilizando principalmente tecnologias como C#, .NET, JavaScript, Node.js, Express.js, React.js e MySQL. Tenho atuado em projetos pessoais e freelances, sempre com o compromisso de entregar soluções de alta qualidade que atendam às necessidades reais dos clientes.
          </h3>
        </div>

        <div className="FAQ">
          <div className="faq-containerQ">
            <h2 className="faq-title">Frequently asked questions</h2>
            {faqs.map((faq, index) => (
              <div key={index} className="faq-item">
                <button className="faq-question" onClick={() => toggle(index)}>
                  {faq.question}
                  <span className="arrow">{openIndex === index ? "▲" : "▼"}</span>
                </button>
                {openIndex === index && (
                  <p className="faq-answer">{faq.answer}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projetos;
