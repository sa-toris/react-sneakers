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
  const [searchValue, setSearchValue] = useState([]);
  const [cartOpened, setCartOpened] = useState(false);

  useEffect(() => {
    axios.get('https://61f908cc783c1d0017c448d4.mockapi.io/items').then((res) => {
      setItems(res.data);
    });
    axios.get('https://61f908cc783c1d0017c448d4.mockapi.io/cart').then((res) => {
      setCartItems(res.data);
    });
  }, []);

  const onAddToCart = (obj) => {
    axios.post('https://61f908cc783c1d0017c448d4.mockapi.io/cart', obj);
    setCartItems((prev) => [...prev, obj]);
  };

  const onRemoveItem = (id) => {
    axios.delete(`https://61f908cc783c1d0017c448d4.mockapi.io/cart/${id}`);
    setCartItems((prev) => prev.filter((item) => Number(item.id) !== Number(id)));
  };

  const onChangeSearchInput = (e) => {
    setSearchValue(e.target.value);
  };

  return (
    <div className="wrapper clear">
      {cartOpened && (
        <Drawer onRemove={onRemoveItem} items={cartItems} onClose={() => setCartOpened(false)} />
      )}
      <Header onClickCart={() => setCartOpened(true)} />
      <div className="content">
        <div className="d-flex align-center justify-between mb-40">
          <h1>{searchValue ? `Поиск по запросу: '${searchValue}'` : 'Все кросовки'}</h1>
          <div className="search-block d-flex">
            <img src={search} alt="Search"></img>
            {searchValue && (
              <img
                onClick={() => setSearchValue('')}
                className=" clear cu-p"
                src={btnRemove}
                alt="Remove"
              />
            )}
            <input
              onChange={onChangeSearchInput}
              value={searchValue}
              placeholder="Поиск..."></input>
          </div>
        </div>

        <div className="sneakers">
          {items
            .filter((item) =>
              item.title.toLowerCase().includes(searchValue.toString().toLowerCase()),
            )
            .map((item) => (
              <Card
                key={item.title}
                onClick={item.onFavorite}
                title={item.title}
                price={item.price}
                imageUrl={item.imageUrl}
                onFavorit={() => console.log('Добавили в закладки')}
                onPlus={(obj) => onAddToCart(obj)}
              />
            ))}
        </div>
      </div>
    </div>
  );
}

export default App;
