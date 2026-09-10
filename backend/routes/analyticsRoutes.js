import express from "express";
import { analyzeBusiness } from "../controllers/analyticsController.js";

const router = express.Router();

router.post("/", analyzeBusiness);

export default router;