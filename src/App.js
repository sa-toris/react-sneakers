import React, { useState, useContext, useEffect } from 'react';
import axios from 'axios';

import Card from './components/Card';
import Header from './components/Header';
import Drawer from './components/Drawer';

import logo from '../src/assets/img/logo.png';
import cart from '../src/assets/img/cart.svg';
import user from '../src/assets/img/user.svg';
import plus from '../src/assets/img/plus.svg';
import search from '../src/assets/img/search.svg';
import unliked from '../src/assets/img/unliked.svg';
import arrow from '../src/assets/img/arrow.svg';
import btnRemove from '../src/assets/img/btn-remove.svg';

function App() {
  const [items, setItems] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [cartOpened, setCartOpened] = useState(false);

  useEffect(() => {
    fetch('https://61f908cc783c1d0017c448d4.mockapi.io/items')
      .then((res) => {
        return res.json();
      })
      .then((json) => {
        setItems(json);
      });
  }, []);

  const onAddToCart = (obj) => {
    setCartItems((prev) => [...prev, obj]);
  };

  return (
    <div className="wrapper clear">
      {cartOpened && <Drawer items={cartItems} onClose={() => setCartOpened(false)} />}
      <Header onClickCart={() => setCartOpened(true)} />
      <div className="content">
        <div className="d-flex align-center justify-between mb-40">
          <h1>Все кросовки</h1>
          <div className="search-block d-flex">
            <img src={search} alt="Search"></img>
            <input placeholder="Поиск..."></input>
          </div>
        </div>

        <div className="sneakers">
          {items.map((item) => (
            <Card
              onClick={item.onFavorite}
              title={item.title}
              price={item.price}
              imageUrl={item.imageUrl}
              onFavorit={() => console.log('Добавили в закладки')}
              onPlus={(obj) => onAddToCart(item)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
