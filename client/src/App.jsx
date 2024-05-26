import { Routes, Route, Navigate } from "react-router-dom";
import Login from "./components/Login";
import Register from "./components/Register";
import SellerHome from "./components/SellerHome";
import BuyerHome from "./components/BuyerHome";
import SellProperty from "./components/SellProperty";
function App() {
  return (
    <>
      <Routes>
        <Route path="/register" element=<Register /> />
        <Route path="/login" element=<Login /> />
        <Route path="/seller-home" element=<SellerHome /> />
        <Route path="/buyer-home" element=<BuyerHome /> />
        <Route path="/sell-property" element=<SellProperty /> />
      </Routes>
    </>
  );
}

export default App;
