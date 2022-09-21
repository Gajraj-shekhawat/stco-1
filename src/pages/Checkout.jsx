import React from "react";
import { useSelector } from "react-redux";
import CartItems from "../components/CartItems";
import { useNavigate } from "react-router-dom";

import styles from "../styles/checkout.module.css";

const Checkout = () => {
  const { cart } = useSelector((store) => store.product);

  const navigate = useNavigate();

  if (cart.length === 0) {
    return <div className={styles.emptyCart}>Cart is Empty</div>;
  }
  return (
    <>
      <div className={styles.cartConatiner}>
        {cart.map((el) => (
          <CartItems {...el} key={el.id} label={"REMOVE FROM CART"} />
        ))}
      </div>
      <div className={styles.paymentBtn}>
        <button
          onClick={() => {
            navigate("/order");
            
          }}
        >
          Make payment
        </button>
      </div>
    </>
  );
};

export default Checkout;
