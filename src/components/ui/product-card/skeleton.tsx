import React from "react";
import styles from "./skeleton.module.scss";

const ProductCardSkeleton: React.FC = () => {
  return (
    <div className={styles.productCard}>
      <div className={styles.productCard__item}>
        <div className={styles.productCard__item__image}>
          <div className={styles.skeletonImage}></div>
        </div>
        <div className={styles.productCard__item__details}>
          <div>
            <div
              className={`${styles.skeletonText} ${styles.skeletonName}`}
            ></div>
            <div
              className={`${styles.skeletonText} ${styles.skeletonDescription}`}
            ></div>
            <div
              className={`${styles.skeletonText} ${styles.skeletonQuantity}`}
            ></div>
          </div>
          <div>
            <div
              className={`${styles.skeletonText} ${styles.skeletonPrice}`}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCardSkeleton;
