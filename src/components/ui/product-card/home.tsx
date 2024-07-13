import styles from "./home.module.scss";

const ProductHomeSkeleton = () => {
  return (
    <div className={styles.productHomeSkeleton}>
      <div
        className={`${styles.skeleton} ${styles.productHomeSkeleton__badge}`}
      ></div>
      <div
        className={`${styles.skeleton} ${styles.productHomeSkeleton__favorite}`}
      ></div>
      <div
        className={`${styles.skeleton} ${styles.productHomeSkeleton__image__container}`}
      ></div>
      <div className={styles.productHomeSkeleton__details}>
        <div
          className={`${styles.skeleton} ${styles.productHomeSkeleton__title}`}
        ></div>
        <div
          className={`${styles.skeleton} ${styles.productHomeSkeleton__rating__container}`}
        ></div>
        <div
          className={`${styles.skeleton} ${styles.productHomeSkeleton__description}`}
        ></div>
        <div
          className={`${styles.skeleton} ${styles.productHomeSkeleton__price}`}
        ></div>
      </div>
    </div>
  );
};

export default ProductHomeSkeleton;
