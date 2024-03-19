import { Schema, model } from "mongoose";

const CartSchema = new Schema(
  {
    order: [
      {
        food: {
          type: Schema.Types.ObjectId,
          ref: "Food",
        },
        quantity: {
          type: Number,
          required: true,
        },
      },
    ],
    phone_number: String,
    delivery_address: String,
  },
  {
    timestamps: {
      createdAt: "created_at",
      updatedAt: "updated_at",
    },
  }
);

export default model("Cart", CartSchema);
