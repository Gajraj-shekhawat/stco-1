import React from "react";
import styles from "../styles/product.module.css";
import { useLocation } from "react-router-dom";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/product/actions";
const Product = () => {
  const { state: el } = useLocation();
  const n = Math.round(el.rating.rate);

  const dispatch = useDispatch();

  const arr = new Array(n).fill(0);
  const newArr = new Array(5 - n).fill(0);
  const [quantity, setQuantity] = useState(1);

  const handleClick = () => {
    const payload = { ...el, quantity };
    dispatch(addToCart(payload));
  };
  return (
    <div className={styles.containerBox}>
      <div className={styles.imgBox}>
        <img src={el.image} alt="" />
      </div>
      <div className={styles.desBox}>
        <div className={styles.titleBox}>
          <b>{el.title}</b>
          <div>{el.category}</div>
        </div>
        <div className={styles.description}>
          <p>{el.description}</p>
        </div>
        <div className={styles.priceBox}>
          <b>₹{el.price}</b>
        </div>
        <div className={styles.ratingBox}>
          <div>
            {arr.map((el, i) => (
              <span className={styles.emptyStar} key={i}>
                &#9734;
              </span>
            ))}
            {newArr.map((el, i) => (
              <span key={i}>&#9734;</span>
            ))}
            <span className={styles.emptyStar}>({el.rating.count})</span>
          </div>
        </div>
        <div className={styles.quantity}>
          Quantity :{" "}
          <input
            type="number"
            min={1}
            max={5}
            value={quantity}
            onChange={(e) => {
              setQuantity(() => (e.target.value >= 5 ? 5 : e.target.value));
            }}
          />
        </div>
        <div className={styles.cartButton}>
          <button onClick={handleClick}>{el.label}</button>
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default Product;
