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

router.post("/",   [
  body("name").notEmpty().withMessage("Name is required"),
  body("description").notEmpty().withMessage("Description is required"),
],
createItem); // Create a new item
router.get("/", getItems); // Get all items
router.get("/:id", getItem); // Get a single item by ID
router.put("/:id", updateItem); // Update an item
router.delete("/:id", deleteItem); // Delete an item

export default router;
