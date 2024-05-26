// routes/propertyRoutes.js
const express = require("express");
const { check } = require("express-validator");
const {
  postProperty,
  getPropertyDetails,
  getAllProperties,
  getSellerProperties,
  deleteProperty,
  updateProperty,
} = require("../controllers/propertyController");

const router = express.Router();

// Validation middleware for posting a property
const validatePropertyPosting = [
  check("seller_id").isNumeric().withMessage("Seller ID must be numeric"),
  check("username").not().isEmpty().withMessage("Username is required"),
  check("address").not().isEmpty().withMessage("Address is required"),
  check("property_type")
    .not()
    .isEmpty()
    .withMessage("Property type is required"),
  check("seller_name").not().isEmpty().withMessage("Seller name is required"),
  check("land_address").not().isEmpty().withMessage("Land address is required"),
];

// Routes
router.post("/properties", validatePropertyPosting, postProperty);
router.get("/properties", getAllProperties);
router.get("/properties/:id", getPropertyDetails); // Fetch property details by ID
router.get("/properties/seller/:sellerId", getSellerProperties); // Fetch properties of a specific seller
router.delete("/properties/:id", deleteProperty); // Delete property by ID
router.put("/properties/:id", updateProperty); // Update property by ID

module.exports = router;
