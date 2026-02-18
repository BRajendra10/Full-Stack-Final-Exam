import mongoose from "mongoose";
import { User } from "../models/auth.model.js";

export const seedAdmin = async () => {
    try {
        const existingAdmin = await User.findOne({ role: "ADMIN" });

        if (existingAdmin) {
            console.log("Admin already exists");
            return;
        }

        await User.create({
            name: process.env.SEED_ADMIN_NAME,
            email: process.env.SEED_ADMIN_EMAIL,
            password: process.env.SEED_ADMIN_PASSWORD,
            role: "ADMIN",
        });

        console.log("Admin created successfully");
        return;
    } catch (error) {
        console.error(error);
        process.exit(1);
    }
};