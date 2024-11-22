import React from "react";
import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import ChangePassword from "./pages/ChangePassword/ChangePassword";
import Payment from "./pages/Payment/Payment";
import Cart from "./pages/Cart/Cart";
import News from "./pages/News/News";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/login" replace />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/change-password" element={<ChangePassword />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/news" element={<News />} />
        {/* Các route khác */}
      </Routes>
    </Router>
  );
}

export default App;
