/* eslint-disable @typescript-eslint/ban-ts-comment */

import { ArrowRight } from "lucide-react";
import React, { useEffect } from "react";
import { useCart } from "../../hooks";
import CartCard from "../ui/cart-card";
import CartSummary from "../ui/summary";
import styles from "./index.module.scss";

const CartPage: React.FC = () => {
  const { cart, clearCart, totalItems, totalCost } = useCart();

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
                  <CartCard key={index} item={item} index={index} />
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
