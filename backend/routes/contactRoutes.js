import sendMessage from "../controller/contactController.js";
import express from "express";
const router = express.Router();

router.post("/", sendMessage);
export default router;
