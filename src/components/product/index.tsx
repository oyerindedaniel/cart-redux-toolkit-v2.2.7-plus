import { ArrowRight } from "lucide-react";
import React from "react";
import { useFetchProducts, usePagination } from "../../hooks";
import Button from "../ui/button";
import ProductCard from "../ui/product-card";
import ProductCardSkeleton from "../ui/product-card/skeleton";
import styles from "./index.module.scss";

const Products: React.FC = () => {
  const { page, nextPage, prevPage, goToPage, generatePageNumbers } =
    usePagination();
  const { data, isLoading, isError } = useFetchProducts({
    reverse_sort: false,
    page,
    size: 10,
  });

  const totalPages = 3;
  const pageNumbers = generatePageNumbers(totalPages);
  const { items } = data ?? {};

  return (
    <div className={styles.products}>
      <div className={styles.products__wrapper}>
        <div className={styles.products__content}>
          {isLoading ? (
            <div className={styles.productCard}>
              {Array.from({ length: 10 }).map((_, i) => (
                <ProductCardSkeleton key={i} />
              ))}
            </div>
          ) : isError ? (
            <div className={styles.productCard}>
              <div className={styles.products__error}>
                An error occurred while loading the products.
              </div>
            </div>
          ) : (
            <>
              <div className={styles.products__header}>
                <span className={styles.products__header__icon}>
                  <ArrowRight size="2.4rem" />
                </span>
                <h2 className={styles.products__header__title}>Products</h2>
              </div>
              {items && (
                <div className={styles.products__list}>
                  {items.map((item, index) => (
                    <ProductCard key={index} item={item} index={index} />
                  ))}
                </div>
              )}
              <div className={styles["products__pagination-buttons"]}>
                <Button
                  variant="primary"
                  size="fit"
                  onClick={prevPage}
                  disabled={page === 1}
                >
                  Previous
                </Button>
                {pageNumbers.map((pageNumber) => (
                  <Button
                    variant="primary"
                    size="fit"
                    key={pageNumber}
                    onClick={() => goToPage(pageNumber)}
                    disabled={page === pageNumber}
                  >
                    {pageNumber}
                  </Button>
                ))}
                <Button
                  variant="primary"
                  size="fit"
                  onClick={nextPage}
                  disabled={page === totalPages}
                >
                  Next
                </Button>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Products;
