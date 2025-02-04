import { Router } from "express";
import {
  createItem,
  getItems,
  getItem,
  updateItem,
  deleteItem,
} from "../controllers/item.js";
import { body } from "express-validator";

const router = Router();

router.post("/create",   [
  body("name").notEmpty().withMessage("Name is required"),
  body("description").notEmpty().withMessage("Description is required"),
],
createItem); // Create a new item
router.get("/getAll", getItems); // Get all items
router.get("/get/:id", getItem); // Get a single item by ID
router.put("/update/:id", updateItem); // Update an item
router.delete("/delete/:id", deleteItem); // Delete an item

export default router;
