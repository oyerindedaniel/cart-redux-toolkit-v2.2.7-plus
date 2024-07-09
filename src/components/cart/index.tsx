"use client";

import { ArrowRight } from "lucide-react";
import React from "react";
import useCart from "../../hooks/use-cart";
import CartCard from "../ui/cart-card";
import CartSummary from "../ui/summary";
import styles from "./index.module.scss";

const CartPage: React.FC = () => {
  const {
    cart,
    removeFromCart,
    addToCart,
    getItemCount,
    clearCart,
    totalItems,
    totalCost,
  } = useCart();

  return (
    <div className={styles.cartPage}>
      <div className={styles.cartPage__wrapper}>
        <div className={styles.cartPage__content}>
          <div className={styles.cartPage__header}>
            <span className={styles.cartPage__header__icon}>
              <ArrowRight size="2.4rem" />
            </span>
            <h1 className={styles.cartPage__header__title}>Shopping Cart</h1>
          </div>

          {totalItems === 0 ? (
            <div className={styles.cartPage__empty}>
              <h4>Your cart is empty</h4>
              <p>
                Looks like you haven't added anything to your cart yet. Start
                shopping now to see your selections here!
              </p>
            </div>
          ) : (
            <>
              <div className={styles.cartPage__list}>
                {cart.map((item, index) => (
                  <CartCard
                    key={index}
                    item={item}
                    index={index}
                    removeFromCart={removeFromCart}
                    addToCart={addToCart}
                    getItemCount={getItemCount}
                  />
                ))}
              </div>

              <CartSummary
                clearCart={clearCart}
                totalCost={totalCost}
                mode="cart"
              />
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default CartPage;
