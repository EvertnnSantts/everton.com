import '../components/MenuPrincipal.css';
function MenuPrincipal(){
    return(
     <div className="MenuORG">
       <div className="MenuLogo"><h1>everton.com</h1></div>
       <div className="MenuOpcoes">
        <ul>
            <li>home</li>
            <li>project</li>
            <li>training</li>
        </ul>
       </div>
     </div>
    );
}

export default MenuPrincipal;