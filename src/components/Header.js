import React from "react";
import Logo from '../images/Vector.svg';
function Header() {
    return (
        <header className="header">
            <img className='header__logo' src={Logo} alt="Логотип место россия" />
        </header>
    );
}

export default Header;