import React from "react";
import styles from "../styles/singleProduct.module.css";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { removeFromCart, updateQuantity } from "../redux/product/actions";
import { useState } from "react";

const CartItems = (el) => {
  const n = Math.round(el.rating.rate);
  const arr = new Array(n).fill(0);
  const newArr = new Array(5 - n).fill(0);

  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(removeFromCart(el.id));
  };
  const [quantity, setQuantity] = useState(+el.quantity);

  const handleQuantity = () => {
    dispatch(updateQuantity(el, quantity + 1));
  };
  return (
    <div className={styles.containerBox}>
      <div className={styles.imgBox}>
        <img src={el.image} alt="" />
      </div>
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
      <div>
        <button
          disabled={quantity === 1}
          onClick={() => {
            setQuantity(quantity - 1);
            handleQuantity();
          }}
        >
          -
        </button>
        {quantity}
        <button
          disabled={quantity === 5}
          onClick={() => {
            setQuantity(quantity + 1);
            handleQuantity();
          }}
        >
          +
        </button>
      </div>
      <div className={styles.cartButton}>
        <button onClick={handleClick}>{el.label}</button>
      </div>
    </div>
  );
};

export default CartItems;
