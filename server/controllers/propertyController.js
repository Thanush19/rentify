// controllers/propertyController.js
const { validationResult } = require("express-validator");
const { Pool } = require("pg");
require("dotenv").config();

const pool = new Pool({
  connectionString: `postgresql://${process.env.DB_USER}:${process.env.DB_PASSWORD}@${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_NAME}`,
  ssl: { rejectUnauthorized: false },
});

// Controller for posting a property
exports.postProperty = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const {
    seller_id,
    username,
    address,
    property_type,
    seller_name,
    land_address,
    land_image,
    landmark,
    description,
  } = req.body;

  try {
    await pool.query(
      `INSERT INTO properties (seller_id, username, address, property_type, seller_name, land_address, land_image, landmark, description) 
       VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9)`,
      [
        seller_id,
        username,
        address,
        property_type,
        seller_name,
        land_address,
        land_image,
        landmark,
        description,
      ]
    );
    res.status(201).json({ message: "Property posted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
};

// Controller for getting property details by ID
exports.getPropertyDetails = async (req, res) => {
  const propertyId = req.params.id;

  try {
    const property = await pool.query(
      "SELECT * FROM properties WHERE id = $1",
      [propertyId]
    );
    if (property.rows.length === 0) {
      return res.status(404).json({ message: "Property not found" });
    }
    res.json({ property: property.rows[0] });
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
};

// Controller for fetching all properties
exports.getAllProperties = async (req, res) => {
  try {
    const properties = await pool.query("SELECT * FROM properties");
    res.json({ properties: properties.rows });
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
};

// Controller for fetching properties of a specific seller
exports.getSellerProperties = async (req, res) => {
  const sellerId = req.params.sellerId;

  try {
    const properties = await pool.query(
      "SELECT * FROM properties WHERE seller_id = $1",
      [sellerId]
    );
    res.json({ properties: properties.rows });
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
};

// Controller for deleting a property by ID
exports.deleteProperty = async (req, res) => {
  const propertyId = req.params.id;

  try {
    await pool.query("DELETE FROM properties WHERE id = $1", [propertyId]);
    res.json({ message: "Property deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
};

// Controller for updating a property by ID
exports.updateProperty = async (req, res) => {
  const propertyId = req.params.id;
  const {
    seller_id,
    username,
    address,
    property_type,
    seller_name,
    land_address,
    land_image,
    landmark,
    description,
  } = req.body;

  try {
    await pool.query(
      `UPDATE properties 
       SET seller_id = $1, username = $2, address = $3, property_type = $4, 
           seller_name = $5, land_address = $6, land_image = $7, landmark = $8, description = $9 
       WHERE id = $10`,
      [
        seller_id,
        username,
        address,
        property_type,
        seller_name,
        land_address,
        land_image,
        landmark,
        description,
        propertyId,
      ]
    );
    res.json({ message: "Property updated successfully" });
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
};
