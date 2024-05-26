import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { UserContext } from "../context/userContext";
import { backend } from "../../constant";
import { useNavigate } from "react-router-dom";

const PreviousSold = () => {
  const [properties, setProperties] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [propertiesPerPage] = useState(1);
  const { user } = useContext(UserContext);
  const navigate = useNavigate();

  const userId = user ? user.id : null;

  useEffect(() => {
    const fetchProperties = async () => {
      setLoading(true);
      try {
        const response = await axios.get(
          `${backend}/api/properties/seller/${userId}`
        );
        setProperties(response.data.properties);
      } catch (error) {
        console.error("Error fetching properties:", error);
      }
      setLoading(false);
    };

    fetchProperties();
  }, [userId]);

  const indexOfLastProperty = currentPage * propertiesPerPage;
  const indexOfFirstProperty = indexOfLastProperty - propertiesPerPage;
  const currentProperties = properties.slice(
    indexOfFirstProperty,
    indexOfLastProperty
  );

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="container mx-auto">
      <div className="mb-4 flex justify-between items-center">
        {/* Back Button */}
        <button
          onClick={() => navigate(-1)} // Navigate back in history
          className="text-blue-500"
        >
          &larr; Back
        </button>
        <h2 className="text-2xl font-bold">Previous Sold Properties</h2>
        {/* Placeholder for right-aligned content */}
        <div></div>
      </div>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div>
          {currentProperties.map((property) => (
            <div key={property.id} className="mb-4">
              <h3 className="text-lg font-semibold">
                Property ID: {property.id}
              </h3>
              <p>Seller ID: {property.seller_id}</p>
              <p>Seller Name: {property.seller_name}</p>
              <p>Address: {property.address}</p>
              <p>Property Type: {property.property_type}</p>
              <p>Land Address: {property.land_address}</p>
              <p>Landmark: {property.landmark}</p>
              <p>Description: {property.description}</p>
              {property.land_image && (
                <img src={property.land_image} alt="Land" className="mt-4" />
              )}
            </div>
          ))}
          {/* Pagination */}
          <div className="flex justify-center mt-4">
            <ul className="flex space-x-2">
              {Array.from({
                length: Math.ceil(properties.length / propertiesPerPage),
              }).map((_, index) => (
                <li key={index}>
                  <button
                    onClick={() => paginate(index + 1)}
                    className={`px-4 py-2 rounded-full ${
                      currentPage === index + 1
                        ? "bg-blue-500 text-white"
                        : "bg-gray-200 text-gray-700"
                    }`}
                  >
                    {index + 1}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default PreviousSold;
