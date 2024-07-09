import {
  Facebook,
  Instagram,
  PendoWhite,
  Pinterest,
  Twitter,
} from "../../../assets";
import styles from "./footer.module.scss";

const socials = [
  { icon: Instagram, name: "Instagram", url: "https://www.instagram.com" },
  { icon: Pinterest, name: "Pinterest", url: "https://www.pinterest.com" },
  { icon: Facebook, name: "Facebook", url: "https://www.facebook.com" },
  { icon: Twitter, name: "X", url: "https://www.twitter.com" },
];

const sections = [
  {
    title: "Shop",
    items: [
      "Bestsellers",
      "Catalog",
      "Cart",
      "Armless chairs",
      "Sofas",
      "Slipper chairs",
    ],
  },
  {
    title: "Company",
    items: ["About", "Contact", "Location"],
  },
  {
    title: "Support",
    items: ["Privacy", "Terms and conditions", "FAQs", "Login"],
  },
];

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footer__wrapper}>
        <div className={styles.footer__content}>
          <div className={styles.footer__left}>
            <div className={styles.footer__left__logo}>
              <img src={PendoWhite} alt="Pendo" />
            </div>
            <p className={styles.footer__left__description}>
              At Pendo, we blend the rich heritage of African craftsmanship with
              modern comfort, creating furniture that tells a story. Each piece
              is thoughtfully designed to bring the warmth and beauty of Africa
              into your home, prioritizing both elegance and sustainability.
            </p>
            <div className={styles.footer__left__socials}>
              {socials.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={social.icon} alt={social.name} />
                </a>
              ))}
            </div>
          </div>
          <div className={styles.footer__right}>
            {sections.map((section, index) => (
              <div key={index} className={styles.footer__right__section}>
                <h3 className={styles.footer__right__section__title}>
                  {section.title}
                </h3>
                <ul className={styles.footer__right__section__list}>
                  {section.items.map((item, idx) => (
                    <li
                      key={idx}
                      className={styles.footer__right__section__item}
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        <div className={styles.footer__copyright}>
          <p>@2024 Pendo Furniture. All Rights Reserved</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
