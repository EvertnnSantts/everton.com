import React, { useState } from "react";
import "../pages/Personagem.css";
import evertonprime from "../assets/evertonprime.png";
import everton from "../assets/everton11.png";
import evertonbackend from "../assets/evertonbackend.png";
import everton1 from "../assets/everton1.png";

function Personagem() {
  const [imagemAtual, setImagemAtual] = useState(evertonprime);

  const trocarImagem = (novaImagem) => {
    setImagemAtual(novaImagem);
  };

  return (
    <div className="Personagem">
      <div className="Mypersonagem">
        <h1 id="namepersonagem">everton</h1>
        <img
          id="evertonprimeIMG"
          src={imagemAtual}
          alt="Everton Personagem"
          className="imagem-principal"
        />
        <div className="especialORG">
          <button id="especial1"></button>
          <button id="especial2"></button>
          <button id="especial3"></button>
          <button id="especial4"></button>
        </div>
      </div>
      <div className="aboutPER">
        <div className="skills">
          <h2 id="titleskills">SKILLS</h2>
          <h3 id="habilidade">
            JAVASCRIPT, NODEJS, EXPRESS, MYSQL, REACT, C#, .NET, HTML, CSS
          </h3>
        </div>
        <div className="story">
          <h2 id="titlestory">STORY</h2>
          <h3 id="aboutP">
          Everton iniciou sua jornada no vasto mundo da programação em 2021, onde, com determinação e curiosidade, dominou as artes do Front-End utilizando apenas HTML, CSS e JavaScript.Com o passar do tempo, após dois anos de prática e batalhas diárias, desbloqueou uma nova habilidade poderosa: ReactJS, que ampliou sua visão dentro do Reino do Front-End.
          Mas sua sede por conhecimento não se limitava às fronteiras visuais. Movido pelo desejo de explorar novos territórios e encarar desafios mais profundos, aventurou-se além das fronteiras do Front-End, mergulhando no universo do Back-End.
          Nesse novo domínio, Everton conquistou a confiança de aliados e enfrentou criaturas temidas chamadas bugs. Com estratégia e resiliência, foi adquirindo novas ferramentas e magias de alto nível
          </h3>
        </div>
        <div className="visuis">
          <div id="skin1" onClick={() => trocarImagem(everton)}>
            <img id="skin01" src={everton} alt="Everton Skin 1" />
          </div>
          <div id="skin2" onClick={() => trocarImagem(evertonbackend)}>
            <img src={evertonbackend} alt="Everton Skin 2" />
          </div>
          <div id="skin3" onClick={() => trocarImagem(everton1)}>
            <img src={everton1} alt="Everton Skin 3" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Personagem;

