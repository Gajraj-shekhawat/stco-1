import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import SingleProduct from "../components/SingleProduct";
import { fetchProducts } from "../redux/product/actions";
import styles from "../styles/homepage.module.css";

const Homepage = () => {
  const dispatch = useDispatch();

  const { data, isLoading, isError, cart, errorMessage, categories } =
    useSelector((store) => store.product);

  const [category, setCategory] = useState(false);

  useEffect(() => {
    dispatch(fetchProducts(category));
  }, [category, dispatch]);
  return (
    <div className={styles.mainContainer}>
      <div className={styles.filterBox}>
        {categories.map((el, i) => {
          return (
            <label key={i}>
              <input
                type="radio"
                checked={category === el}
                onChange={() => {
                  setCategory(el);
                }}
              />
              {el}
            </label>
          );
        })}
        <div>
          <button  disabled={category===false} onClick={()=>{setCategory(false)}}>reset</button>
        </div>
      </div>
      <div className={styles.productBox}>
        {data.map((el) => (
          <SingleProduct {...el} key={el.id} label={"ADD TO CART"} />
        ))}
      </div>
    </div>
  );
};

export default Homepage;
