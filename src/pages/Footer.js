import "../pages/Footer.css";
import gitfooter from "../assets/placa-do-github (1).png";
import instafooter from "../assets/instagram (3) (1).png";
import linkedinfooter from "../assets/linkedin__1_-removebg-preview 1 (3).png";
function Footer() {
  return (
    <div className="Footer">
      <div className="janela">
        <button id="fechar">X</button>
        <h1 id="titlejanela">QUER SABER MAIS DA MINHA HISTÓRIA?</h1>
        <a href="#contato">
          <button id="buttoncontato">FALE COMIGO</button>
        </a>
      </div>

      <footer className="footer">
         <div className="footer-conteneir">
           <h1 id="namesite">everton.com</h1>
           <h2 id="descricaome">JOVEM, POREM, CHEIO DE QUALIDADE E CRIATIVIDA</h2>
         </div>

         <div className="redesElimks">
           <div className="linksterms">
            <h1 id="namelegal">Legal</h1>
            <a><h1 id="nameterms">terms of services</h1></a>
           </div>
           <div className="redess">
             <h1 id="namesocial">Social</h1>
             <div className="imgorg">
              <a href="https://github.com/EvertnnSantts"><img id="imgsocial" src={gitfooter}/></a>
              <a href="https://www.instagram.com/evert.nn/"><img id="imgsocial" src={instafooter}/></a>
              <a href="https://www.linkedin.com/in/everton-ferreira-707b82317/"><img id="imgsocial" src={linkedinfooter}/></a>
             </div>
           </div>
         </div>

      </footer>

    </div>
  );
}

export default Footer;
