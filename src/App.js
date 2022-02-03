import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Route, Routes } from 'react-router-dom';

import Header from './components/Header';
import Drawer from './components/Drawer';

import Home from './pages/Home.jsx';
import Favorites from './pages/Favorites.jsx';

function App() {
  const [items, setItems] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const [searchValue, setSearchValue] = useState([]);
  const [cartOpened, setCartOpened] = useState(false);

  useEffect(() => {
    axios.get('https://61f908cc783c1d0017c448d4.mockapi.io/items').then((res) => {
      setItems(res.data);
    });
    axios.get('https://61f908cc783c1d0017c448d4.mockapi.io/cart').then((res) => {
      setCartItems(res.data);
    });
    axios.get('https://61f908cc783c1d0017c448d4.mockapi.io/favorites').then((res) => {
      setFavorites(res.data);
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

  const onAddFavorite = async (obj) => {
    try {
      if (favorites.find((favObj) => favObj.id === obj.id)) {
        axios.delete(`https://61f908cc783c1d0017c448d4.mockapi.io/favorites/${obj.id}`);
      } else {
        const { data } = await axios.post(
          'https://61f908cc783c1d0017c448d4.mockapi.io/favorites',
          obj,
        );
        setFavorites((prev) => [...prev, data]);
      }
    } catch (error) {
      alert('Не удалось добавить в фавориты');
    }
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
      <Routes>
        <Route
          path=""
          exact
          element={
            <Home
              items={items}
              searchValue={searchValue}
              setSearchValue={setSearchValue}
              onChangeSearchInput={onChangeSearchInput}
              onAddFavorite={onAddFavorite}
              onAddToCart={onAddToCart}
            />
          }></Route>
        <Route
          path="favorites"
          exact
          element={<Favorites items={favorites} onAddFavorite={onAddFavorite} />}></Route>
      </Routes>
    </div>
  );
}

export default App;
