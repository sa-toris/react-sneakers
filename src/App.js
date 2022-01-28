import React from 'react';

import logo from '../src/assets/img/logo.png';
import cart from '../src/assets/img/cart.svg';
import user from '../src/assets/img/user.svg';
import plus from '../src/assets/img/plus.svg';
import sneaker1 from '../src/assets/img/sneakers/1.jpg';
import sneaker2 from '../src/assets/img/sneakers/2.jpg';
import sneaker3 from '../src/assets/img/sneakers/3.jpg';
import sneaker4 from '../src/assets/img/sneakers/4.jpg';

function App() {
  return (
    <div className="wrapper clear">
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
      <div className="content">
        <h1>Все кросовки</h1>
        <div className="sneakers">
          <div className="card">
            <img width={133} height={122} src={sneaker1} alt="" />
            <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
            <div className="cardBottom">
              <div className="cardPrice">
                <span>Цена:</span>
                <b>12 999 руб.</b>
              </div>
              <button className="button">
                <img src={plus} alt="Plus" />
              </button>
            </div>
          </div>
          <div className="card">
            <img width={133} height={122} src={sneaker2} alt="" />
            <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
            <div className="cardBottom">
              <div className="cardPrice">
                <span>Цена:</span>
                <b>12 999 руб.</b>
              </div>
              <button className="button">
                <img src={plus} alt="Plus" />
              </button>
            </div>
          </div>
          <div className="card">
            <img width={133} height={122} src={sneaker3} alt="" />
            <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
            <div className="cardBottom">
              <div className="cardPrice">
                <span>Цена:</span>
                <b>12 999 руб.</b>
              </div>
              <button className="button">
                <img src={plus} alt="Plus" />
              </button>
            </div>
          </div>
          <div className="card">
            <img width={133} height={122} src={sneaker4} alt="" />
            <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
            <div className="cardBottom">
              <div className="cardPrice">
                <span>Цена:</span>
                <b>12 999 руб.</b>
              </div>
              <button className="button">
                <img src={plus} alt="Plus" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
