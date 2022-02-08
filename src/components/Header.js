import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../hooks/useCart';

import logo from '../assets/img/logo.png';
import cart from '../assets/img/cart.svg';
import user from '../assets/img/user.svg';
import heart from '../assets/img/heart.svg';

function Header(props) {
  const { totalPrice } = useCart();

  return (
    <header className="header">
      <Link to="/">
        <div className="headerLeft">
          <img width={40} height={40} src={logo} alt="Logo" />
          <div className="headerInfo">
            <h3>REACT SNEAKERS</h3>
            <p>Магазин лучших кросовок</p>
          </div>
        </div>
      </Link>
      <ul className="headeRight">
        <li onClick={props.onClickCart} className="mr-30 cu-p">
          <img src={cart} alt="Cart" />
          <span>{totalPrice}</span>
        </li>
        <li className="mr-20 cu-p">
          <Link to="/favorites">
            <img width={18} height={18} src={heart} alt="Heart" />
          </Link>
        </li>
        <li>
          <Link to="/orders">
            <img width={18} height={18} src={user} alt="User" />
          </Link>
        </li>
      </ul>
    </header>
  );
}

export default Header;
