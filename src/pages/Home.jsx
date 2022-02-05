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
  isLoading,
}) {
  const renderItems = () => {
    const filtredItems = items.filter((item) =>
      item.title.toString().toLowerCase().includes(searchValue.toString().toLowerCase()),
    );

    return (isLoading ? [...Array(8)] : filtredItems).map((item, index) => (
      <Card
        key={(item, index)}
        onFavorite={(obj) => onAddFavorite(obj)}
        onPlus={(obj) => onAddToCart(obj)}
        loading={isLoading}
        {...item}
      />
    ));
  };
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

      <div className="sneakers">{renderItems()}</div>
    </div>
  );
}

export default Home;
