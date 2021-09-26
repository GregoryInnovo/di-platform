import React from "react";
import Header from "./Header";
import Footer from "./Footer";

const Layout = ({ children }) => (
  <div class="App">
    <Header />
    {children}
    <Footer />
  </div>
);

export default Layout;
