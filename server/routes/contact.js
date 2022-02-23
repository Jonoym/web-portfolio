import express from "express";

import { createMessageSubmission } from "../controllers/contact.js";

const router = express.Router();
router.post("/", createMessageSubmission);

export default router;