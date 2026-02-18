import { Product } from "../models/product.model.js";

export const createProduct = async (req, res) => {
    try {
        const { name, description, price, category, stock } = req.body;

        const product = await Product.create({
            name,
            description,
            price,
            category,
            stock,
            createdBy: req.user.id,
        });

        res.status(201).json(product);
    } catch (error) {
        res.status(500).json({ message: "Server error" });
    }
};


export const getProducts = async (req, res) => {
    try {
        const products = await Product.find({ status: "ACTIVE" });
        res.status(200).json(products);
    } catch (error) {
        res.status(500).json({ message: "Server error" });
    }
};

export const updateProduct = async (req, res) => {
    try {
        const { id } = req.params;

        const updated = await Product.findByIdAndUpdate(
            id,
            req.body,
            { new: true }
        );

        res.status(200).json(updated);
    } catch (error) {
        res.status(500).json({ message: "Server error" });
    }
};


export const deleteProduct = async (req, res) => {
    try {
        const { id } = req.params;

        await Product.findByIdAndDelete(id);

        res.status(200).json({ message: "Product deleted" });
    } catch (error) {
        res.status(500).json({ message: "Server error" });
    }
};
