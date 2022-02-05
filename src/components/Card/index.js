import React, { useState } from 'react';
import ContentLoader from 'react-content-loader';

import styles from './Card.module.scss';

import plus from '../../assets/img/btn-plus.svg';
import btnChecked from '../../assets/img/btn-checked.svg';
import unliked from '../../assets/img/unliked.svg';
import liked from '../../assets/img/liked.svg';

function Card({
  id,
  onFavorite,
  imageUrl,
  title,
  price,
  onPlus,
  favorited = false,
  added = false,
  loading = false,
}) {
  const [isAdded, setIsAdded] = useState(added);
  const [isFavorite, setIsFavorite] = useState(favorited);

  const onClickPlus = () => {
    onPlus({ id, title, price, imageUrl });
    setIsAdded(!isAdded);
  };

  const onClickFavorite = () => {
    onFavorite({ id, title, price, imageUrl });
    setIsFavorite(!isFavorite);
  };

  return (
    <div className={styles.card}>
      {loading ? (
        <ContentLoader
          speed={2}
          width={155}
          height={250}
          viewBox="0 0 155 265"
          backgroundColor="#f3f3f3"
          foregroundColor="#ecebeb">
          <rect x="1" y="0" rx="10" ry="10" width="155" height="155" />
          <rect x="0" y="167" rx="5" ry="5" width="155" height="15" />
          <rect x="0" y="187" rx="5" ry="5" width="100" height="15" />
          <rect x="1" y="234" rx="5" ry="5" width="80" height="25" />
          <rect x="124" y="230" rx="10" ry="10" width="32" height="32" />
        </ContentLoader>
      ) : (
        <>
          <div className={styles.favorit} onClick={onClickFavorite}>
            <img src={isFavorite ? liked : unliked} alt="Unliked" />
          </div>
          <img width={133} height={122} src={imageUrl} alt="ImageUrl" />
          <h5>{title}</h5>
          <div className={styles.cardBottom}>
            <div className={styles.cardPrice}>
              <span>Цена:</span>
              <b>{price} руб.</b>
            </div>
            <div>
              <img
                className={styles.plus}
                onClick={onClickPlus}
                src={isAdded ? btnChecked : plus}
                alt="Plus"
              />
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default Card;
