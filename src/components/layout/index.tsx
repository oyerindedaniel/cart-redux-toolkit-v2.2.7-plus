/* eslint-disable @typescript-eslint/ban-ts-comment */
import React, { ReactNode, useEffect } from "react";
import { useCart } from "../../hooks";
import Footer from "./footer";
import Header from "./header";

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const { cart } = useCart();

  useEffect(() => {
    //@ts-ignore
    if (cart && cart.length && cart[0]?.image) {
      localStorage.removeItem("cart-storage");
    }
  }, []);

  return (
    <div>
      <Header />
      <main style={{ display: "block", position: "static" }}>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
