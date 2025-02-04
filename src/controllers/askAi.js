import OpenAI from "openai";
import dotenv from "dotenv";
import asyncHandler from "../middleware/asyncHandler.js";
import { validationResult } from "express-validator";

dotenv.config();

// Ensure the OpenAI API Key is set in the environment
if (!process.env.OPENAIAPIKEY) {
  console.error("Missing OpenAI API Key in environment variables.");
  process.exit(1);
}

const client = new OpenAI({
  apiKey: process.env.OPENAIAPIKEY,
});

export const askAi = asyncHandler(async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({
      success: false,
      errors: errors.array(),
    });
  }

  const { prompt } = req.body;

  try {
    // Call OpenAI API with the prompt
    const chatCompletion = await client.chat.completions.create({
      messages: [{ role: "user", content: prompt }],
      model: "gpt-4o-mini",
    });

    const aiResponse =
      chatCompletion?.choices?.[0]?.message?.content || "No response from AI";

    return res.status(200).json({ success: true, data: aiResponse });
  } catch (error) {
   

    if(error?.error?.code=='invalid_api_key'){
      if (error?.error?.code === "invalid_api_key") {
        const customError = new Error("Invalid OpenAI credentials");
        customError.statusCode = 401
        throw customError;
      }
    }
 
    
    throw new Error("Failed to communicate with OpenAI API.");
  }
});
