import { ChevronRight } from "lucide-react";
import { useState } from "react";
import { Item9 } from "../../assets";
import { sofas } from "../../constants";
import { useDisclosure, useFetchProducts } from "../../hooks";
import { type Product } from "../../types";
import Button from "../ui/button";
import Modal from "../ui/modal";
import ProductHomeSkeleton from "../ui/product-card/home";
import ProductDetailCard from "../ui/product-detail";
import styles from "./index.module.scss";

const Home = () => {
  const { data, isLoading, isError } = useFetchProducts({
    reverse_sort: false,
    page: 1,
    size: 12,
  });

  const { items } = data ?? {};

  const { isOpen, onOpen, onClose } = useDisclosure();

  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const handleProductClick = (product: Product) => {
    setSelectedProduct(product);
  };

  const isNew = true;

  return (
    <>
      {selectedProduct && (
        <Modal isOpen={isOpen} onClose={onClose}>
          <ProductDetailCard {...selectedProduct} />
        </Modal>
      )}
      <div className={styles.home}>
        <div className={styles.home__wrapper}>
          <section className={styles.home__hero}>
            <div className={styles.home__hero__detail}>
              <h1 className={styles.home__hero__detail__h1}>Serengeti Chair</h1>
              <p className={styles.home__hero__detail__p}>
                Crafted with premium materials and meticulous design, embrace
                luxury and ergonomic mastery for a seating experience that
                celebrates African heritage sophistication and comfort in your
                home.
              </p>
              <Button
                type="button"
                variant="primary"
                size="large"
                className={styles.home__hero__detail__button}
                rightElement={
                  <ChevronRight
                    size="2.4rem"
                    style={{ marginLeft: "1.6rem" }}
                  />
                }
              >
                Buy now
              </Button>
            </div>
            <div className={styles.home__hero__image__container}>
              <img
                className={styles.home__hero__image}
                src={Item9}
                alt="sofa chair"
              />
            </div>
          </section>
          <section className={styles.home__bestsellers}>
            <div className={styles.home__bestsellers__header}>
              <h2 className={styles.home__bestsellers__header__h2}>
                Bestsellers
              </h2>
              <div className={styles.home__bestsellers__header__span}>
                <span>See all</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  className="lucide lucide-chevron-right"
                >
                  <path d="m9 18 6-6-6-6" />
                </svg>
              </div>
            </div>
            <div className={styles.home__bestsellers__carousel}>
              <div className={styles.home__bestsellers__carousel__wrapper}>
                {sofas.map((sofa, index) => {
                  return (
                    <figure key={index}>
                      <div className="overflow"></div>
                      <img src={sofa.image} alt={sofa.heading} />
                      <figcaption>
                        <div>{sofa.heading}</div>
                        <div>{sofa.content}</div>
                      </figcaption>
                    </figure>
                  );
                })}
              </div>
            </div>
          </section>
          <section className={styles.home__catalog}>
            <div className={styles.home__catalog__header}>
              <h2 className={styles.home__catalog__header__h2}>Catalog</h2>
            </div>
            <div
              className={`${styles.home__catalog__content} ${
                isError ? styles.error : ""
              }`}
            >
              {isLoading ? (
                Array.from({ length: 12 }).map((_, i) => (
                  <ProductHomeSkeleton key={i} />
                ))
              ) : isError ? (
                <div className={styles.home__catalog__content__error}>
                  An error occurred while loading the products.
                </div>
              ) : (
                items &&
                items.map((product, index) => (
                  <div
                    key={index}
                    className="product-card"
                    onClick={() => {
                      handleProductClick(product);
                      onOpen();
                    }}
                  >
                    {isNew && <div className="product-card__badge">New</div>}
                    <div className="product-card__favorite">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="lucide lucide-heart"
                      >
                        <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
                      </svg>
                    </div>
                    <div className="product-card__image__container">
                      {product.photos && product.photos?.length && (
                        <img
                          src={`https://api.timbu.cloud/images/${product.photos[0]?.url}`}
                          alt={product.name}
                          className="product-card__image"
                        />
                      )}
                    </div>
                    <div className="product-card__details">
                      <h2 className="product-card__title">{product.name}</h2>
                      <div className="product-card__rating__container">
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
                              className="lucide lucide-star product-card__rating"
                              style={{
                                display: "inline-block",
                                margin: "0 2px",
                              }}
                            >
                              <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                            </svg>
                          ))}
                      </div>
                      <p className="product-card__description">
                        {product.description}
                      </p>
                      <div className="product-card__price">{`N${product.current_price[0].NGN[0].toLocaleString()}`}</div>
                    </div>
                  </div>
                ))
              )}
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default Home;

// <h1>Hello World</h1>
// <Link to="/about">About Us</Link>
