import { ArrowRight, ChevronLeft, ChevronRight, Trash2 } from "lucide-react";
import React from "react";
import { useNavigate } from "react-router";
import useCart from "../../hooks/use-cart";
import Button from "../ui/button";
import styles from "./cart.module.scss";

const CartPage: React.FC = () => {
  const navigate = useNavigate();

  const { cart, removeFromCart, clearCart, totalItems, totalCost } = useCart();

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
                        <p className={styles.quantity}>
                          {`Qty: ${item.quantity}`}
                        </p>
                        {/* <div className={styles.actions}>
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
                        </div> */}
                      </div>
                      <div>
                        <p className={styles.price}>
                          {`N${item.price.toLocaleString()}`}
                        </p>
                        <Button
                          variant="unstyled"
                          leftElement={
                            <Trash2
                              size="2.4rem"
                              style={{ marginRight: "1.6rem" }}
                            />
                          }
                          onClick={() => removeFromCart(item.name)}
                          // className={styles.removeButton}
                        >
                          Delete
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className={styles.cartPage__summary}>
                <div className={styles.cartPage__tax}>
                  <span>Tax</span>
                  <p>Free</p>
                </div>
                <div className={styles.cartPage__shipping}>
                  <span>Shipping</span>
                  <p>Free</p>
                </div>
                <div className={styles.cartPage__totalCost}>
                  <span>Total</span>
                  <p>{`${totalCost.toLocaleString()}`}</p>
                </div>
                <div className={styles.cartPage__return}>
                  <Button
                    size="large"
                    onClick={clearCart}
                    leftElement={
                      <ChevronLeft style={{ marginRight: "1.6rem" }} />
                    }
                    className={styles.cartPage__continueButton}
                    variant="unstyled"
                  >
                    Continue Shopping
                  </Button>
                  <Button
                    size="large"
                    rightElement={
                      <ChevronRight style={{ marginLeft: "1.6rem" }} />
                    }
                    onClick={() => navigate("/checkout")}
                    className={styles.cartPage__paymentButton}
                    variant="primary"
                  >
                    Continue to Payment
                  </Button>
                </div>
                {/* <Button
                  onClick={clearCart}
                  className={styles.cartPage__clearButton}
                  variant="unstyled"
                >
                  Clear Cart
                </Button> */}
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default CartPage;
