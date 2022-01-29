import React from 'react';

import logo from '../assets/img/logo.png';
import cart from '../assets/img/cart.svg';
import user from '../assets/img/user.svg';

function Header() {
  return (
    <header className="header">
      <div className="headerLeft">
        <img width={40} height={40} src={logo} alt="Logo" />
        <div className="headerInfo">
          <h3>REACT SNEAKERS</h3>
          <p>Магазин лучших кросовок</p>
        </div>
      </div>
      <ul className="headeRight">
        <li className="mr-30">
          <img src={cart} alt="Cart" />
          <span>1205 руб.</span>
        </li>
        <li>
          <img src={user} alt="User" />
        </li>
      </ul>
    </header>
  );
}

export default Header;
