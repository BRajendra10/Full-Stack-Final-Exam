import express from "express";
import {
    addToCart,
    getCart,
    removeFromCart,
} from "../controllers/cart.controller.js";

import { protect } from "../middlewares/auth.middleware.js";

const router = express.Router();

// All cart routes require login
router.post("/add", protect, addToCart);
router.get("/", protect, getCart);
router.delete("/remove", protect, removeFromCart);

export default router;
