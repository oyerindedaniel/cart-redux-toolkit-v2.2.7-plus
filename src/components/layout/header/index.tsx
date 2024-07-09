import { Link, useNavigate } from "react-router-dom";
import { Cart, PendoPrimary } from "../../../assets";
import useCart from "../../../hooks/use-cart";
import Button from "../../ui/button";
import styles from "./header.module.scss";

const links = [
  { name: "Home", url: "/" },
  { name: "Shop", url: "/shop" },
  { name: "About", url: "/about" },
  { name: "Contact", url: "/contact" },
] as const;

const Header = () => {
  const navigate = useNavigate();

  const { totalItems } = useCart();

  return (
    <div className={styles.header}>
      <div className={styles.header__wrapper}>
        <nav className={styles.header__nav}>
          <Link to={"/"} className={styles.header__logo}>
            <img src={PendoPrimary} alt="Pendo" />
          </Link>
          <div className={styles.header__links}>
            {links.map((link, idx) => (
              <Link key={idx} to={link.url}>
                {link.name}
              </Link>
            ))}
          </div>
          <div className={styles.header__options}>
            <Button
              onClick={() => navigate("/cart")}
              className={styles.header__cart}
              variant="unstyled"
            >
              <img src={Cart} alt="your cart" />
            </Button>
            <span>{totalItems}</span>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Header;
