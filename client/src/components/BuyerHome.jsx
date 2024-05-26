import React, { useContext } from "react";
import { UserContext } from "../context/userContext"; // Adjust the import path as necessary
import { useNavigate } from "react-router-dom"; // Import useNavigate hook

const BuyerHome = () => {
  const { logout } = useContext(UserContext);
  const navigate = useNavigate(); // Initialize navigate function

  const handleLogout = () => {
    // Clear authentication token from local storage
    localStorage.removeItem("authToken");

    // Call logout function from user context to update user state
    logout();

    // Redirect to login page
    navigate("/login");
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md max-w-sm">
        <h2 className="text-2xl font-bold mb-6 text-gray-900">Buyers Page</h2>
        <div>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-blue-600">
            Surf Local Properties
          </button>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-blue-600">
            See Previously Bought Properties
          </button>
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-blue-600"
            onClick={handleLogout}
          >
            Logout
          </button>
        </div>
      </div>
    </div>
  );
};

export default BuyerHome;
