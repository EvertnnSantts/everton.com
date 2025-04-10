import React, { useState } from 'react';
import '../components/MenuPrincipal.css';

function MenuPrincipal() {
    const [menuAberto, setMenuAberto] = useState(false);

    const toggleMenu = () => {
        setMenuAberto(!menuAberto);
    };

    return (
        <div className="MenuORG">
            <div className="MenuLogo">
                <h1>everton.com</h1>
            </div>
            <div className="MenuHamburguer" onClick={toggleMenu}>
                <div className="linha"></div>
                <div className="linha"></div>
                <div className="linha"></div>
            </div>
            <div className={`MenuOpcoes ${menuAberto ? 'ativo' : ''}`}>
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
