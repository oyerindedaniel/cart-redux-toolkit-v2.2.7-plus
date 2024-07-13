import React, { useState } from "react";
import { useDisclosure } from "../../../hooks";
import { Product } from "../../../types";
import Modal from "../modal";
import ProductDetailCard from "../product-detail";
import styles from "./index.module.scss";

interface ProductCardProps {
  item: Product;
  index: number;
}

const ProductCard: React.FC<ProductCardProps> = ({ item, index }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const handleProductClick = (product: Product) => {
    setSelectedProduct(product);
  };

  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ProductDetailCard {...(selectedProduct as Product)} />
      </Modal>

      <div
        className={styles.productCard}
        onClick={() => {
          handleProductClick(item);
          onOpen();
        }}
      >
        <div key={index} className={styles.productCard__item}>
          {item.photos && item.photos.length && (
            <div className={styles.productCard__item__image}>
              <img src={item.photos[0]} alt={item.name} />
            </div>
          )}
          <div className={styles.productCard__item__details}>
            <div>
              <h3 className={styles.name}>{item.name}</h3>
              <p className={styles.description}>{item.description}</p>
              <p
                className={styles.quantity}
              >{`Qty: ${item.available_quantity}`}</p>
            </div>
            <div>
              <p
                className={styles.price}
              >{`N${item.current_price[0].NGN[0].toLocaleString()}`}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductCard;
