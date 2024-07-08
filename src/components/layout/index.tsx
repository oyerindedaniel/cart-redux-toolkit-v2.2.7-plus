import React, { ReactNode } from "react";
import Footer from "./footer";
import Header from "./header";

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div>
      <Header />
      <main style={{ display: "block", position: "static" }}>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
