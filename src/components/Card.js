import React from 'react';

import plus from '../assets/img/plus.svg';
import unliked from '../assets/img/unliked.svg';
import sneaker1 from '../assets/img/sneakers/1.jpg';

function Card() {
  return (
    <div className="card">
      <div className="favorit">
        <img src={unliked} alt="Unliked" />
      </div>
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
  );
}

export default Card;
