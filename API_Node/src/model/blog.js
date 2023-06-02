import mongoose from "mongoose";

const blogSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true
    },
    image:{
        type: String
    }

}, { timestamps: true, versionKey: false });

export default mongoose.model("Blog", blogSchema);