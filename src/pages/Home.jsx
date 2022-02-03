import React from 'react';

import Card from '../components/Card';

import search from '../assets/img/search.svg';
import btnRemove from '../assets/img/btn-remove.svg';

function Home({
  items,
  searchValue,
  setSearchValue,
  onChangeSearchInput,
  onAddFavorite,
  onAddToCart,
}) {
  return (
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
          <input onChange={onChangeSearchInput} value={searchValue} placeholder="Поиск..."></input>
        </div>
      </div>

      <div className="sneakers">
        {items
          .filter((item) => item.title.toLowerCase().includes(searchValue.toString().toLowerCase()))
          .map((item) => (
            <Card
              key={item.title}
              onFavorite={(obj) => onAddFavorite(obj)}
              onPlus={(obj) => onAddToCart(obj)}
              {...item}
            />
          ))}
      </div>
    </div>
  );
}

export default Home;
