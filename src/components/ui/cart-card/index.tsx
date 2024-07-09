import { Trash2 } from "lucide-react";
import React from "react";
import { type CartItem } from "../../../hooks";
import Button from "../button";
import styles from "./index.module.scss";

interface CartCardProps {
  item: CartItem;
  index: number;
  removeFromCart: (name: string) => void;
  addToCart: (item: CartItem) => void;
  getItemCount: (name: string) => number;
  mode?: "order";
}

const CartCard: React.FC<CartCardProps> = ({
  item,
  index,
  removeFromCart,
  mode,
}) => {
  return (
    <div className={styles.cartCard}>
      <div key={index} className={styles.cartCard__item}>
        <div className={styles.cartCard__item__image}>
          <img src={item.image} alt={item.name} />
        </div>
        <div className={styles.cartCard__item__details}>
          <div>
            <h3 className={styles.name}>{item.name}</h3>
            <p className={styles.description}>{item.description}</p>
            <p className={styles.quantity}>{`Qty: ${item.quantity}`}</p>
            {/* Uncomment the below block to enable add/remove functionality */}
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
            <p className={styles.price}>{`N${item.price.toLocaleString()}`}</p>
            {mode !== "order" && (
              <Button
                variant="unstyled"
                leftElement={
                  <Trash2 size="2.4rem" style={{ marginRight: "1.6rem" }} />
                }
                onClick={() => removeFromCart(item.name)}
                className={styles.removeButton} // Uncomment if needed
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
