import { Schema, model } from "mongoose";

const NutritionalSchema = new Schema({
  Calories: Number,
  Protein: Number,
  Carbs: Number,
  Fat: Number,
  Fiber: Number,
});

const FoodSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  image_url: [String],
  price: {
    type: String,
    default: 0,
  },
  description: {
    type: String,
    default: "",
  },
  is_displayed: {
    type: Boolean,
    required: true,
    default: false,
  },
  nutritional_value: NutritionalSchema,
});

export default model("Food", FoodSchema);
