/* eslint-disable @typescript-eslint/ban-ts-comment */
import React, { useEffect } from "react";
import { Outlet } from "react-router";
import { useCart } from "../../hooks";
import Footer from "./footer";
import Header from "./header";

interface LayoutProps {}

const Layout: React.FC<LayoutProps> = () => {
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
      <main style={{ display: "block", position: "static" }}>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
