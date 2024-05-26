import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../context/userContext"; // Adjust the import path as necessary

const SellerHome = () => {
  const { logout } = useContext(UserContext);
  const navigate = useNavigate();

  const handleSellProperty = () => {
    navigate("/sell-property"); // Redirect to the Sell Property page
  };

  const handleLogout = () => {
    logout(); // Call the logout function from UserContext
    navigate("/login"); // Redirect to the login page after logout
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md max-w-sm">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-gray-900">Seller Home Page</h2>
          <button
            onClick={handleLogout}
            className="text-sm text-blue-500 hover:text-blue-700 focus:outline-none"
          >
            Logout
          </button>
        </div>
        <div className="space-y-4">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-blue-600">
            See Local Map
          </button>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-blue-600">
            See Previous Sold Properties
          </button>
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-blue-600"
            onClick={handleSellProperty}
          >
            Sell Properties
          </button>
        </div>
      </div>
    </div>
  );
};

export default SellerHome;
