import express from "express";

import { getExperience, createExperience } from "../controllers/experience.js";

const router = express.Router();
router.get("/", getExperience);
router.post("/", createExperience);

export default router;