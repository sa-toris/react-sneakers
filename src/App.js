import React from 'react';

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
import sneaker1 from '../src/assets/img/sneakers/1.jpg';
import sneaker2 from '../src/assets/img/sneakers/2.jpg';
import sneaker3 from '../src/assets/img/sneakers/3.jpg';
import sneaker4 from '../src/assets/img/sneakers/4.jpg';

function App() {
  return (
    <div className="wrapper clear">
      <Drawer />
      <Header />
      <div className="content">
        <div className="d-flex align-center justify-between mb-40">
          <h1>Все кросовки</h1>
          <div className="search-block d-flex">
            <img src={search} alt="Search"></img>
            <input placeholder="Поиск..."></input>
          </div>
        </div>

        <div className="sneakers">
          <Card />
        </div>
      </div>
    </div>
  );
}

export default App;
