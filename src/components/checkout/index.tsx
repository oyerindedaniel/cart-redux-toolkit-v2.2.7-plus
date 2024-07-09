"use client";

import { ArrowRight } from "lucide-react";
import React, { useEffect } from "react";
import { useNavigate } from "react-router";
import { MasterCard, Visa } from "../../assets";
import useCart from "../../hooks/use-cart";
import CartCard from "../ui/cart-card";
import CartSummary from "../ui/summary";
import styles from "./index.module.scss";

const inputs = [
  { label: "Full name", type: "text", name: "fullName" },
  { label: "Street Address", type: "text", name: "streetAddress" },
  { label: "Town/City", type: "text", name: "townCity" },
  { label: "Country", type: "text", name: "country" },
  { label: "Phone number", type: "tel", name: "phoneNumber" },
  { label: "Email address", type: "email", name: "emailAddress" },
];

const Checkout: React.FC = () => {
  const navigate = useNavigate();

  const {
    cart,
    removeFromCart,
    addToCart,
    getItemCount,
    totalItems,
    clearCart,
    totalCost,
  } = useCart();

  useEffect(() => {
    if (!totalItems) {
      navigate("/cart");
    }
  }, [navigate, totalItems]);

  return (
    <div className={styles.checkout}>
      <div className={styles.checkout__wrapper}>
        <div className={styles.checkout__content}>
          <div className={styles.checkout__header}>
            <span className={styles.checkout__header__icon}>
              <ArrowRight size="2.4rem" />
            </span>
            <h2 className={styles.checkout__header__title}>Checkout</h2>
          </div>
          <div className={styles.checkout__subheader}>
            <h4>Order Summary</h4>
          </div>
          <>
            <div className={styles.checkout__list}>
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
          </>
          <div className={styles.checkout__paymentMethod}>
            <h4>Payment method</h4>
            <div>
              <div className={styles.checkout__paymentMethod__choose}>
                {["Credit Card", "Cash on delivery"].map(
                  (paymentMethod, index) => (
                    <div>
                      <label className="radioLabel" htmlFor={paymentMethod}>
                        {paymentMethod}
                        <input
                          key={index}
                          className="radioInput"
                          type="radio"
                          name="paymentMethod"
                          value={paymentMethod}
                          id={paymentMethod}
                          required
                        />
                        <span className="checkmark"></span>
                      </label>
                      {paymentMethod === "Credit Card" && (
                        <div className={styles.checkout__paymentMethod__logos}>
                          <img src={Visa} alt="Visa card" />
                          <img src={MasterCard} alt="Mastercard" />
                        </div>
                      )}
                    </div>
                  )
                )}
              </div>
            </div>
          </div>
          <form className={styles.checkout__billingDetails}>
            <h4 className={styles.checkout__billingDetails__heading}>
              Billing details
            </h4>
            {inputs.map((input, index) => (
              <div
                key={index}
                className={styles.checkout__billingDetails__field}
              >
                <label
                  htmlFor={input.name}
                  className={styles.checkout__billingDetails__label}
                >
                  {input.label}
                </label>
                <input
                  type={input.type}
                  id={input.name}
                  name={input.name}
                  className={styles.checkout__billingDetails__input}
                />
              </div>
            ))}
            <div className={styles.checkout__billingDetails__save}>
              <input type="checkbox" id="saveInfo" name="saveInfo" />
              <label htmlFor="saveInfo">
                Save this information for future checkouts
              </label>
            </div>
          </form>

          <CartSummary
            clearCart={clearCart}
            totalCost={totalCost}
            mode="checkout"
          />
        </div>
      </div>
    </div>
  );
};

export default Checkout;
