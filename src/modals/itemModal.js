import mongoose from "mongoose";

const itemSchema = new mongoose.Schema(
  {
    name: {
      require: true,
      type: String,
    },
    description: {
      require: true,
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

const Item = mongoose.model("Item", itemSchema);

export default Item;
