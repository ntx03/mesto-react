import React from "react";
import './Header.css';
import Logo from '../images/Vector.svg';
function Header() {
    return (
        <header className="header">
            <img className='header__logo' src={Logo} alt="Логотип место россия" />
        </header>
    );
}

export default Header;