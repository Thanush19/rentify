import { motion } from "framer-motion";
import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../context/userContext"; // Adjust the import path as necessary

const Home = () => {
  const { user } = useContext(UserContext);
  const navigate = useNavigate();

  const handleGetStarted = () => {
    const role = user.role;
    if (role === "buyer") {
      navigate("/buyer-home");
    } else {
      navigate("/seller-home");
    }
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <motion.div
        initial={{ opacity: 0, y: -100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="bg-blue-500 text-white p-8 rounded-lg shadow-lg"
      >
        <h1 className="text-4xl font-bold mb-4">Welcome to our Rental App!</h1>
        <p className="text-lg">
          Find the perfect place to rent or list your property for rent.
        </p>
        <div className="mt-8">
          <button
            className="bg-white text-blue-500 px-4 py-2 rounded-lg shadow hover:bg-blue-100 transition duration-300"
            onClick={handleGetStarted}
          >
            Get Started
          </button>
        </div>
      </motion.div>
    </div>
  );
};

export default Home;
