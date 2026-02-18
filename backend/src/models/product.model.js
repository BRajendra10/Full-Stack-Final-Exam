import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
            trim: true,
        },

        description: {
            type: String,
            required: true,
        },

        price: {
            type: Number,
            required: true,
            min: 0,
        },

        category: {
            type: String,
            required: true,
            index: true,
        },

        image: {
            type: String,
        },

        stock: {
            type: Number,
            required: true,
            min: 0,
        },

        status: {
            type: String,
            enum: ["ACTIVE", "OUT_OF_STOCK", "DISABLED"],
            default: "ACTIVE",
        },

        createdBy: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            required: true,
        },
    },
    { timestamps: true }
);

export const Product = mongoose.model("Product", productSchema);
