const express = require("express");
const router = express.Router();
const CategoryController = require('../controllers/category.controller');

// Create a category
router.post("/", CategoryController.createCategory);

// Get all categories
router.get("/", CategoryController.getAllCategories);

// Get a category by ID
router.get("/:id", CategoryController.getCategoryById);

// Update a category by ID
router.put("/:id", CategoryController.updateCategoryById);

// Delete a category by ID
router.delete("/:id", CategoryController.deleteCategoryById);

module.exports = router;