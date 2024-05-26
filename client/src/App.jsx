import { Routes, Route, Navigate } from "react-router-dom";
import Login from "./components/Login";
import Register from "./components/Register";
import SellerHome from "./components/SellerHome";
import BuyerHome from "./components/BuyerHome";
import SellProperty from "./components/SellProperty";
import Home from "./components/Home";
import { useContext } from "react";
import { UserContext } from "./context/userContext"; // Adjust the import path as necessary
import PreviousSold from "./components/PreviousSold";

function App() {
  return (
    <>
      <Routes>
        <Route path="/register" element=<Register /> />
        <Route path="/login" element=<Login /> />
        <Route path="/seller-home" element=<SellerHome /> />
        <Route path="/buyer-home" element=<BuyerHome /> />
        <Route path="/sell-property" element=<SellProperty /> />
        <Route path="/" element=<Home /> />
        <Route path="prev-sold" element={<PreviousSold />} />
      </Routes>
    </>
  );
}

export default App;
