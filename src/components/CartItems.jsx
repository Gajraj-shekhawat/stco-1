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
  const [data,setData]= useState(el)
  // const [quantity, setQuantity] = useState(+el.quantity);

  const handleQuantity = (val) => {
    dispatch(updateQuantity(el, data,val));
  };
  return (
    <div className={styles.containerBox}>
      <div className={styles.imgBox}>
        <img src={data.image} alt="" />
      </div>
      <div className={styles.titleBox}>
        <b>{data.title}</b>
        <div>{data.category}</div>
      </div>
      <div className={styles.description}>
        <p>{data.description}</p>
      </div>
      <div className={styles.priceBox}>
        <b>₹{data.price}</b>
      </div>
      <div className={styles.ratingBox}>
        <div>
          {arr.map((data, i) => (
            <span className={styles.emptyStar} key={i}>
              &#9734;
            </span>
          ))}
          {newArr.map((data, i) => (
            <span key={i}>&#9734;</span>
          ))}
          <span className={styles.emptyStar}>({data.rating.count})</span>
        </div>
      </div>
      <div>
        <button
          disabled={data.quantity === 1}
          onClick={() => {
            // setQuantity(prev=>prev-1)
            setData({...data,quantity:data.quantity-1})

              handleQuantity(-1);
            
          }}
        >
          -
        </button>
        {data.quantity}
        <button
          disabled={data.quantity === 5}
          onClick={() => {
            // setQuantity(quantity + 1);
            setData({...data,quantity:data.quantity+1})
            handleQuantity(+1);
          }}
        >
          +
        </button>
      </div>
      <div className={styles.cartButton}>
        <button onClick={handleClick}>{data.label}</button>
      </div>
    </div>
  );
};

export default CartItems;
