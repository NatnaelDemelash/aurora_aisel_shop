import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Home from "./pages/Home";
import ProductDetail from "./pages/ProductDetails";

import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className="overflow-hidden">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product/:id" element={<ProductDetail />} />
        </Routes>
        <Sidebar />
      </Router>

      <Footer />
    </div>
  );
};

export default App;
