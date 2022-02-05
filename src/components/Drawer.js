import React from 'react';

import arrow from '../assets/img/arrow.svg';
import btnRemove from '../assets/img/btn-remove.svg';
import cartEmpty from '../assets/img/empty-cart.jpg';

function Drawer({ onRemove, onClose, items = [] }) {
  return (
    <div className="overlay">
      <div className="drawer">
        <h2 className=" d-flex justify-between mb-30">
          Корзина <img onClick={onClose} className="removeBtn cu-p" src={btnRemove} alt="Remove" />
        </h2>

        {items.length > 0 ? (
          <div>
            <div className="items">
              {items.map((obj) => (
                <div key={obj.title} className="cartItem d-flex align-center mb-20">
                  <div
                    style={{ backgroundImage: `url(${obj.imageUrl})` }}
                    className="cartItemImg"></div>
                  <div className="mr-20 flex">
                    <p className="mb-5">{obj.title}</p>
                    <b>{obj.price} руб.</b>
                  </div>
                  <img
                    className="removeBtn"
                    onClick={() => onRemove(obj.id)}
                    src={btnRemove}
                    alt="Remove"
                  />
                </div>
              ))}
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
        ) : (
          <div className="cartEmpty d-flex align-center justify-center flex-column flex">
            <img className="mb-20" width="120px" height="120px" src={cartEmpty} alt="Empty" />
            <h2>Корзина пустая</h2>
            <p className="opacity-6">Добавьте товар</p>
            <button onClick={onClose} className="greenButton">
              <img src={arrow} alt="Arrow" />
              Вернуться назад
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default Drawer;
