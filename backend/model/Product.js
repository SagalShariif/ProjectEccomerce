const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
  {
    name:     { type: String, required: true, trim: true },
    price:    { type: Number, required: true, min: 0 },
    image:    { type: String, trim: true },
    category: { type: String, trim: true },
    description: String
  },
  { timestamps: true }      // optional: adds createdAt / updatedAt
);

module.exports = mongoose.model("Product", productSchema);
