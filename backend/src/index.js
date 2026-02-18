import 'dotenv/config'
import mongoose from "mongoose";
import connectDB from "./db/database.js";
import { app } from './server.js';
import { seedAdmin } from './seed/seed.admin.js';

connectDB()
    .then(async () => {
        app.on("error", (error) => {
            throw error
        })

        seedAdmin();

        app.listen(process.env.PORT || 8000, () => {
            console.log(`Server is running on PORT: ${process.env.PORT}`)
        })
    })
    .catch((error) => {
        console.log("Mongodb connection failed", error);
        process.exit(1);
    })