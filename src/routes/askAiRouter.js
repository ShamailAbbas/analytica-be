import { Router } from "express";
import { askAi } from "../controllers/askAi.js";
import { body } from "express-validator";
const router = Router();

router.post("/", 
    [
        body("prompt")
          .notEmpty()
          .withMessage("Prompt is required.")
          .isString()
          .withMessage("Prompt must be a string."),
      ]
    ,askAi); // Create a new item

export default router;
