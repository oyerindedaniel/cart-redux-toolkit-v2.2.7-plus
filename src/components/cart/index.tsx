import { ArrowRight, CircleMinus, CirclePlus } from "lucide-react";
import React from "react";
import { useNavigate } from "react-router";
import useCart from "../../hooks/use-cart";
import Button from "../ui/button";
import styles from "./cart.module.scss";

const CartPage: React.FC = () => {
  const navigate = useNavigate();

  const {
    cart,
    addToCart,
    getItemCount,
    removeFromCart,
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
              <ArrowRight />
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
                  <div key={index} className={styles.cartPage__item}>
                    <div className={styles.cartPage__item__image}>
                      <img src={item.image} alt={item.name} />
                    </div>
                    <div className={styles.cartPage__item__details}>
                      <div>
                        <h3 className={styles.name}>{item.name}</h3>
                        <p className={styles.description}>{item.description}</p>
                        <div className={styles.actions}>
                          <Button
                            variant="unstyled"
                            onClick={() => removeFromCart(item.name)}
                            className={styles.removeButton}
                          >
                            <CircleMinus />
                          </Button>
                          <span className={styles.itemCount}>
                            {getItemCount(item.name)}
                          </span>
                          <Button
                            variant="unstyled"
                            onClick={() => addToCart(item)}
                            className={styles.addButton}
                          >
                            <CirclePlus />
                          </Button>
                        </div>
                      </div>
                      <div>
                        <p className={styles.price}>
                          {`Price: N${item.price.toLocaleString()}`}
                        </p>
                        <p className={styles.quantity}>
                          {`Quantity: ${item.quantity}`}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className={styles.cartPage__summary}>
                <p className={styles.cartPage__totalItems}>
                  {`Total Items: ${totalItems}`}
                </p>
                <p className={styles.cartPage__totalCost}>
                  {`Total Cost: N${totalCost.toLocaleString()}`}
                </p>
                <p className={styles.cartPage__shipping}>{`Shipping: Free`}</p>
                <div className={styles.cartPage__return}>
                  <Button
                    size="large"
                    onClick={clearCart}
                    className={styles.cartPage__continueButton}
                    variant="unstyled"
                  >
                    Continue Shopping
                  </Button>
                  <Button
                    size="large"
                    onClick={() => navigate("/checkout")}
                    className={styles.cartPage__paymentButton}
                    variant="primary"
                  >
                    Continue to Payment
                  </Button>
                </div>
                <Button
                  onClick={clearCart}
                  className={styles.cartPage__clearButton}
                  variant="unstyled"
                >
                  Clear Cart
                </Button>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default CartPage;
