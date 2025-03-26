// src/App.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./components/HomePage";
import LoginPage from "./components/LoginPage";
// import ProductDetailPage from "./components/ProductDetailPage";
// import CheckoutPage from "./components/CheckoutPage";
// import SellerDashboard from "./components/SellerDashboard";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        {/* <Route path="/product/:id" element={<ProductDetailPage />} />
        <Route path="/checkout" element={<CheckoutPage />} />
        <Route path="/seller" element={<SellerDashboard />} /> */}
      </Routes>
    </Router>
  );
}
// export default function App() {
//   return <h1 style={{ textAlign: "center", marginTop: "100px" }}>Hello, world 👋</h1>;
// }
