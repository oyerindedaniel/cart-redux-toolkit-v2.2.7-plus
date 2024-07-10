import React, { useEffect, useState } from "react";
import { flushSync } from "react-dom";
import useCart from "../../../hooks/use-cart";
import { type Product } from "../../../types";
import Button from "../button";
import styles from "./index.module.scss";

type ProductDetailProps = Product;

const ProductDetailCard: React.FC<ProductDetailProps> = (product) => {
  const [isAdded, setIsAdded] = useState(false);
  const { addToCart } = useCart();

  useEffect(() => {
    if (isAdded) {
      setTimeout(() => {
        setIsAdded(false);
      }, 250);
    }
  }, [isAdded]);

  return (
    <div className={styles.productDetailCard}>
      <div className={styles.productDetailCard__wrapper}>
        <div className={styles.productDetailCard__content}>
          <div className={styles.productDetailCard__image}>
            <img src={product.image} alt={product.name} />
          </div>
          <div className={styles.productDetailCard__hr}></div>
          <div className={styles.productDetailCard__info}>
            {product?.category && (
              <div className={styles.productDetailCard__info__category}>
                {product.category}
              </div>
            )}
            <div className={styles.productDetailCard__info__name}>
              {product.name}
            </div>
            <div className={styles.productDetailCard__info__rating}>
              {Array(5)
                .fill(null)
                .map((_, index) => (
                  <svg
                    key={index}
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-star"
                    style={{
                      display: "inline-block",
                      margin: "0 2px",
                    }}
                  >
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                  </svg>
                ))}
            </div>
            <div className={styles.productDetailCard__info__price}>
              N{product.price.toLocaleString()}
            </div>
            <div className={styles.productDetailCard__info__description}>
              {product.description}
            </div>
            <div className={styles.productDetailCard__info__added}>
              <Button
                className={styles.productDetailCard__info__button}
                onClick={(event: React.MouseEvent<HTMLButtonElement>) => {
                  event.preventDefault();
                  event.stopPropagation();

                  flushSync(() => setIsAdded(true));
                  addToCart(product);
                }}
                type="button"
                variant="primary"
                size="medium"
              >
                Add to cart
              </Button>
              {isAdded && (
                <span className={styles.productDetailCard__isAdded}>
                  New Item Added!
                </span>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailCard;
