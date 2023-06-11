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
    quantity: {
      type: Number,
      required: true
    },
    total: {
      type: Number,
      required: true
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
      required: true
    }
  },
  { timestamps: true, versionKey: false }
);

export default mongoose.model("Bill", cartSchema);
