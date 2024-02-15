import express from "express";
import authController from "../controllers/auth.controller.js";

const router = express.Router();


router.get("/login", authController.loginUser);
router.get("/signup", authController.loginUser);
router.get("/logout", authController.loginUser);


export default router;