import Item from "../modals/itemModal.js";
import asyncHandler from "../middleware/asyncHandler.js";
import { body, validationResult } from "express-validator";

// Create an item
export const createItem = asyncHandler(async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ success: false, errors: errors.array() });
  }

  const { name, description } = req.body;
  const newItem = new Item({ name, description });
  const savedItem = await newItem.save();
  res.status(201).json({ success: true, data: savedItem });
});

// Get all items
export const getItems = asyncHandler(async (req, res) => {
  const items = await Item.find();
  res.status(200).json({ success: true, data: items });
});

// Get single item by ID
export const getItem = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const item = await Item.findById(id);
  if (!item) {
    res.status(404);
    throw new Error("Item not found");
  }
  res.status(200).json({ success: true, data: item });
});

// Update an item
export const updateItem = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const updatedItem = await Item.findByIdAndUpdate(id, req.body, {
    new: true,
    runValidators: true,
  });
  if (!updatedItem) {
    res.status(404);
    throw new Error("Item not found");
  }
  res.status(200).json({ success: true, data: updatedItem });
});

// Delete an item
export const deleteItem = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const deletedItem = await Item.findByIdAndDelete(id);
  if (!deletedItem) {
    res.status(404);
    throw new Error("Item not found");
  }
  res.status(200).json({ success: true, message: "Item deleted successfully" });
});
