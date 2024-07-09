import { ChevronLeft, ChevronRight } from "lucide-react";
import React from "react";
import { useNavigate } from "react-router";
import Button from "../button";
import styles from "./index.module.scss";

interface CartSummaryProps {
  totalCost: number;
  clearCart: () => void;
  mode: "checkout" | "cart";
}

const CartSummary: React.FC<CartSummaryProps> = ({
  totalCost,
  clearCart,
  mode,
}) => {
  const navigate = useNavigate();

  return (
    <div className={styles.summary}>
      <div className={styles.summary__tax}>
        <span>Tax</span>
        <p>Free</p>
      </div>
      <div className={styles.summary__shipping}>
        <span>Shipping</span>
        <p>Free</p>
      </div>
      <div className={styles.summary__totalCost}>
        <span>Total</span>
        <p>{`${totalCost.toLocaleString()}`}</p>
      </div>
      {mode === "cart" && (
        <div className={styles.summary__return}>
          <Button
            size="large"
            onClick={clearCart}
            leftElement={<ChevronLeft style={{ marginRight: "1.6rem" }} />}
            className={styles.summary__continueButton}
            variant="unstyled"
          >
            Continue Shopping
          </Button>
          <Button
            size="large"
            rightElement={<ChevronRight style={{ marginLeft: "1.6rem" }} />}
            onClick={() => navigate("/checkout")}
            className={styles.summary__paymentButton}
            variant="primary"
          >
            Continue to Payment
          </Button>
        </div>
      )}
      {mode === "checkout" && (
        <Button
          size="large"
          onClick={clearCart}
          className={styles.summary__pay}
          variant="primary"
        >
          Pay now
        </Button>
      )}
    </div>
  );
};

export default CartSummary;

{
  /* <Button
  size="large"
  onClick={clearCart}
  className={styles.summary__clearButton}
  variant="unstyled"
>
  Clear Cart
</Button>; */
}
