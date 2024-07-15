import { ChevronLeft, ChevronRight } from "lucide-react";
import React, { useEffect, useState } from "react";
import { flushSync } from "react-dom";
import { useCart } from "../../../hooks";
import { Product } from "../../../types";
import Button from "../button";
import styles from "./index.module.scss";

type ProductDetailProps = Product;

const ProductDetailCard: React.FC<ProductDetailProps> = (product) => {
  const [isAdded, setIsAdded] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const { addToCart } = useCart();

  useEffect(() => {
    if (isAdded) {
      setTimeout(() => {
        setIsAdded(false);
      }, 250);
    }
  }, [isAdded]);

  const handleNextImage = () => {
    setCurrentImageIndex(
      (prevIndex) => (prevIndex + 1) % product.photos.length
    );
  };

  const handlePrevImage = () => {
    setCurrentImageIndex(
      (prevIndex) =>
        (prevIndex - 1 + product.photos.length) % product.photos.length
    );
  };

  return (
    <div className={styles.productDetailCard}>
      <div className={styles.productDetailCard__wrapper}>
        <div className={styles.productDetailCard__content}>
          <div className={styles.productDetailCard__image}>
            {product.photos && product.photos.length > 0 && (
              <>
                <img
                  src={`https://api.timbu.cloud/images/${product.photos[currentImageIndex]?.url}`}
                  alt={product.name}
                />
                {product.photos.length > 1 && (
                  <>
                    <Button
                      variant="primary"
                      className={`${styles.productDetailCard__galleryButton} ${styles["productDetailCard__galleryButton--left"]}`}
                      onClick={handlePrevImage}
                    >
                      <ChevronLeft />
                    </Button>
                    <Button
                      variant="primary"
                      className={`${styles.productDetailCard__galleryButton} ${styles["productDetailCard__galleryButton--right"]}`}
                      onClick={handleNextImage}
                    >
                      <ChevronRight />
                    </Button>
                  </>
                )}
              </>
            )}
          </div>
          <div className={styles.productDetailCard__hr}></div>
          <div className={styles.productDetailCard__info}>
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
              N{product.current_price[0].NGN[0].toLocaleString()}
            </div>
            <div className={styles.productDetailCard__info__description}>
              {product.description}
            </div>
            <div className={styles.productDetailCard__info__added}>
              <Button
                className={styles.productDetailCard__info__button}
                onClick={() => {
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
