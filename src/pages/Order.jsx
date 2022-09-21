import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { emptyCartAll } from "../redux/product/actions";
import styles from "../styles/order.module.css";

const Order = () => {
  const { cart } = useSelector((store) => store.product);

  const totalPrice = cart.reduce((acc, el) => {
    return acc + el.price * el.quantity;
  }, 0);

  let currentDate = new Date();
  let day = currentDate.getDate();
  let month = currentDate.getMonth() + 1;
  let year = currentDate.getFullYear();

  const dispatch = useDispatch()
const navigate= useNavigate()
  return (
    <>
    <div className={styles.conatiner}>
      <div className={styles.items}>
        <h1>List of Products</h1>
        {cart.map((el) => {
          return (
            <div className={styles.singleBox} key={el.id}>
              <h3>Name of Product : {el.title} </h3>
              <p>
                Quantity : {el.quantity} <span>Price : {el.price}</span>
              </p>

              <p>Total Price : {+el.quantity * +el.price}</p>
            </div>
          );
        })}
      </div>
      <div className={styles.overviewBox}>
        <h1>Price and Delivery Date</h1>
        <h2>Total Amount : {totalPrice.toFixed(2)}</h2>
        <p>You will receive your order after 4 Days</p>
        <h2>Delivery date:{day + 4 + "/" + month + "/" + year}</h2>
        
      </div>
    </div>
    <div style={{textAlign:"center",}}><button
    onClick={()=>{
      dispatch(emptyCartAll())
      navigate('/')
      
    }}
    style={{padding:"5px 10px"}}
    >Go to home</button></div>
    </>
  );
};

export default Order;
