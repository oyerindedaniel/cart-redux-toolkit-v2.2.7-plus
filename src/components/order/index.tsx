"use client";

import React from "react";
import { Success } from "../../assets";
import useCart from "../../hooks/use-cart";
import Button from "../ui/button";
import CartCard from "../ui/cart-card";
import CartSummary from "../ui/summary";
import styles from "./index.module.scss";

const OrderConfirmation: React.FC = () => {
  const {
    clearCart,
    totalCost,
    removeFromCart,
    addToCart,
    cart,
    getItemCount,
  } = useCart();

  return (
    <div className={styles.orderConfirmation}>
      <div className={styles.orderConfirmation__wrapper}>
        <div className={styles.orderConfirmation__content}>
          <div className={styles.orderConfirmation__message}>
            <img src={Success} alt="success" />
            <h2>We've got your order</h2>
            <p>We’ll let your know when it ships and headed your way</p>
            <Button
              type="button"
              size="medium"
              className={styles.orderConfirmation__message__button}
            >
              Track your order here
            </Button>
          </div>
          <div className={styles.orderConfirmation__cart}>
            {cart.map((item, index) => (
              <CartCard
                key={index}
                item={item}
                index={index}
                removeFromCart={removeFromCart}
                addToCart={addToCart}
                getItemCount={getItemCount}
                mode="order"
              />
            ))}
          </div>
          <div className={styles.orderConfirmation__summary}>
            <CartSummary
              clearCart={clearCart}
              totalCost={totalCost}
              mode="order"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderConfirmation;
