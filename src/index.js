import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import ProductContextProvider from "./contexts/ProductContext";
import SideBarProvider from "./contexts/SidebarContext";
import CartProvider from "./contexts/CartContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <CartProvider>
      <SideBarProvider>
        <ProductContextProvider>
          <App />
        </ProductContextProvider>
      </SideBarProvider>
    </CartProvider>
  </React.StrictMode>
);
