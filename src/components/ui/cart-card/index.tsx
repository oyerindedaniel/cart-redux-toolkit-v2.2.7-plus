import { CircleMinus, CirclePlus, Trash2 } from "lucide-react";
import React from "react";
import { useCart, type CartItem } from "../../../hooks";
import Button from "../button";
import styles from "./index.module.scss";

interface CartCardProps {
  item: CartItem;
  index: number;
  mode?: "order";
}

const CartCard: React.FC<CartCardProps> = ({ item, index, mode }) => {
  const { removeFromCart, addToCart, getItemCount, removeEntireProduct } =
    useCart();

  return (
    <div className={styles.cartCard}>
      <div key={index} className={styles.cartCard__item}>
        <div className={styles.cartCard__item__image}>
          {item.photos && item.photos?.length && (
            <img
              src={`https://api.timbu.cloud/images/${item.photos[0]?.url}`}
              alt={item.name}
            />
          )}
        </div>
        <div className={styles.cartCard__item__details}>
          <div>
            <h3 className={styles.name}>{item.name}</h3>
            <p className={styles.description}>{item.description}</p>
            {/* <p className={styles.quantity}>{`Qty: ${item.quantity}`}</p> */}
            {/* Uncomment the below block to enable add/remove functionality */}
            {mode !== "order" && (
              <div className={styles.actions}>
                <Button
                  variant="unstyled"
                  onClick={() => removeFromCart(item.id)}
                  className={styles.removeButton}
                >
                  <CircleMinus size="2.4rem" />
                </Button>
                <span className={styles.itemCount}>
                  {getItemCount(item.id)}
                </span>
                <Button
                  variant="unstyled"
                  onClick={() => addToCart(item)}
                  className={styles.addButton}
                >
                  <CirclePlus size="2.4rem" />
                </Button>
              </div>
            )}
          </div>
          <div>
            <p
              className={styles.price}
            >{`N${item.current_price[0].NGN[0].toLocaleString()}`}</p>
            {mode !== "order" && (
              <Button
                variant="unstyled"
                leftElement={
                  <Trash2 size="2.4rem" style={{ marginRight: "1.6rem" }} />
                }
                onClick={() => removeEntireProduct(item.id)}
                className={styles.removeButton}
              >
                Delete
              </Button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartCard;
