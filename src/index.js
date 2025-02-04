import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import itemRouter from "./routes/itemRouter.js";
import askAiRouter from "./routes/askAiRouter.js";
import { errorHandler } from "./middleware/errorMiddleware.js";

dotenv.config();

const app = express();

// Middleware
app.use(express.json());

app.use(cors());
app.use(errorHandler);

// Routes
app.use("/items", itemRouter);
app.use("/generate", askAiRouter);
app.get("/health", (_req, res) => {
  res.status(200).send("App is running healthy.");
});

const PORT = process.env.PORT || 4000;
const MONGO_URI = process.env.MONGO_URI;

mongoose
  .connect(MONGO_URI)
  .then(() => {
    console.log("✅ Connected to MongoDB");
    app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
  })
  .catch((error) => {
    console.error("❌ MongoDB connection error:", error);
    process.exit(1); // Exit process with failure
  });
