import React from 'react';

import arrow from '../assets/img/arrow.svg';
import btnRemove from '../assets/img/btn-remove.svg';
import sneaker1 from '../assets/img/sneakers/1.jpg';

function Drawer() {
  return (
    <div style={{ display: 'none' }} className="overlay">
      <div className="drawer">
        <h2 className=" d-flex justify-between mb-30">
          Корзина <img className="removeBtn cu-p" src={btnRemove} alt="Remove" />
        </h2>

        <div className="items">
          <div className="cartItem d-flex align-center mb-20">
            <div style={{ backgroundImage: `url(${sneaker1})` }} className="cartItemImg"></div>
            <div className="mr-20 flex">
              <p className="mb-5">Мужские Кроссовки Nike Blazer Mid Suede</p>
              <b>12 999 руб.</b>
            </div>
            <img className="removeBtn" src={btnRemove} alt="Remove" />
          </div>

          <div className="cartItem d-flex align-center mb-20">
            <div style={{ backgroundImage: `url(${sneaker1})` }} className="cartItemImg"></div>
            <div className="mr-20 flex">
              <p className="mb-5">Мужские Кроссовки Nike Blazer Mid Suede</p>
              <b>12 999 руб.</b>
            </div>
            <img className="removeBtn" src={btnRemove} alt="Remove" />
          </div>

          <div className="cartItem d-flex align-center mb-20">
            <div style={{ backgroundImage: `url(${sneaker1})` }} className="cartItemImg"></div>
            <div className="mr-20 flex">
              <p className="mb-5">Мужские Кроссовки Nike Blazer Mid Suede</p>
              <b>12 999 руб.</b>
            </div>
            <img className="removeBtn" src={btnRemove} alt="Remove" />
          </div>
        </div>
        <div className="cartTotalBlock">
          <ul>
            <li>
              <span>Итого:</span>
              <div></div>
              <b>21 498 руб.</b>
            </li>
            <li>
              <span>Налог 5%:</span>
              <div></div>
              <b>1074 руб.</b>
            </li>
          </ul>
          <button className="greenButton">
            Оформить заказ <img src={arrow} alt="Arrow" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Drawer;
