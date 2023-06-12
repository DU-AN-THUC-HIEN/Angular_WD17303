import mongoose from "mongoose";

const cartSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true
    },
    products: [
      {
        productId: String,
        name: String,
        price: Number,
        image: String,
        quantity: Number
      }
    ],
    name: {
      type: String,
      required: true
    },
    total: {
      type: Number,
    },
    status: {
      type: String,
      default: "Checking"
    },
    address: {
      type: String,
      required: true
    },
    phone: {
      type: String,
      required: true
    },
    notes: {
      type: String,
    }
  },
  { timestamps: true, versionKey: false }
);

export default mongoose.model("Bill", cartSchema);
