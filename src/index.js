import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import ProductContextProvider from "./contexts/ProductContext";
import SideBarProvider from "./contexts/SidebarContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <SideBarProvider>
      <ProductContextProvider>
        <App />
      </ProductContextProvider>
    </SideBarProvider>
  </React.StrictMode>
);
