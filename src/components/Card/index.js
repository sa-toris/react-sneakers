import React, { useState } from 'react';
import styles from './Card.module.scss';
import plus from '../../assets/img/btn-plus.svg';
import btnChecked from '../../assets/img/btn-checked.svg';
import unliked from '../../assets/img/unliked.svg';

function Card({ onFavorite, imageUrl, title, price, onPlus }) {
  const [isAdded, setIsAdded] = useState(false);

  const onClickPlus = () => {
    onPlus({ title, price, imageUrl });
    setIsAdded(!isAdded);
  };

  return (
    <div className={styles.card}>
      <div className={styles.favorit} onClick={onFavorite}>
        <img src={unliked} alt="Unliked" />
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
    </div>
  );
}

export default Card;
