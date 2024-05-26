import React, { useState, useContext } from "react";
import axios from "axios";
import { UserContext } from "../context/userContext";
import { backend } from "../../constant";
import { toast } from "react-toastify";

import { useNavigate } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";

const SellProperty = () => {
  const { user } = useContext(UserContext);
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    seller_id: user ? user.id : "",
    username: user ? user.username : "",
    address: "",
    property_type: "",
    seller_name: user ? user.first_name + user.last_name : "",
    land_address: "",
    land_image: null,
    landmark: "",
    description: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleFileChange = (e) => {
    setFormData((prevData) => ({
      ...prevData,
      land_image: e.target.files[0],
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formDataToSubmit = new FormData();
    for (const key in formData) {
      formDataToSubmit.append(key, formData[key]);
    }
    try {
      if (formData.land_image instanceof File) {
        const cloudinaryResponse = await axios.post(
          "https://api.cloudinary.com/v1_1/ddxqeeype/image/upload",
          formDataToSubmit,
          {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          }
        );
        const imageUrl = cloudinaryResponse.data.secure_url;
        setFormData((prevData) => ({
          ...prevData,
          land_image: imageUrl,
        }));
      }

      await axios.post(`${backend}/api/properties`, formData);
      // Notify user about successful property post
      toast.success("Property posted successfully");
      // Redirect to seller-home route
      history.push("/seller-home");
    } catch (error) {
      // Notify user about error
      toast.error("Failed to post property");
    }
  };

  return (
    <div className="max-w-md mx-auto mt-8">
      <button
        onClick={() => history(-1)}
        className="p-2 rounded-full bg-gray-200 hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-400"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 text-gray-600"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 19l-7-7 7-7"
          />
        </svg>
      </button>
      <h2 className="text-2xl font-bold mb-4">Sell Property</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block mb-1">Username:</label>
          <input
            type="text"
            name="username"
            value={formData.username}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded focus:outline-none focus:border-blue-500"
          />
        </div>
        <div>
          <label className="block mb-1">Seller's Address:</label>
          <input
            type="text"
            name="address"
            value={formData.address}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded focus:outline-none focus:border-blue-500"
          />
        </div>
        <div>
          <label className="block mb-1">Property Type:</label>
          <input
            type="text"
            name="property_type"
            value={formData.property_type}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded focus:outline-none focus:border-blue-500"
          />
        </div>
        <div>
          <label className="block mb-1">Seller Name:</label>
          <input
            type="text"
            name="seller_name"
            value={formData.seller_name}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded focus:outline-none focus:border-blue-500"
          />
        </div>
        <div>
          <label className="block mb-1">Land Address:</label>
          <input
            type="text"
            name="land_address"
            value={formData.land_address}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded focus:outline-none focus:border-blue-500"
          />
        </div>
        <div>
          <label className="block mb-1">Landmark:</label>
          <input
            type="text"
            name="landmark"
            value={formData.landmark}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded focus:outline-none focus:border-blue-500"
          />
        </div>
        <div>
          <label className="block mb-1">Description:</label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded focus:outline-none focus:border-blue-500"
          ></textarea>
        </div>
        <div>
          <label className="block mb-1">Upload Image:</label>
          <input
            type="file"
            onChange={handleFileChange}
            accept="image/*"
            className="w-full px-4 py-2 border rounded focus
            focus
            "
          />
        </div>
        <div>
          <label className="block mb-1">or Image URL:</label>
          <input
            type="text"
            name="land_image"
            value={formData.land_image}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded focus:outline-none focus:border-blue-500"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-blue-600"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default SellProperty;
