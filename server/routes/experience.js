import express from "express";

import { getExperience, createExperience, deleteExperience } from "../controllers/experience.js";

const router = express.Router();
router.get("/", getExperience);
// router.post("/", createExperience);
// router.delete("/:id", deleteExperience)

export default router;