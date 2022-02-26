import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";

// Replace with your own environment variables, dotenv is not working. 
import { PORT, CONNECTION_URL } from "./environment.js";

import projectRoutes from "./routes/projects.js";
import experienceRoutes from "./routes/experience.js";
import contactRoutes from "./routes/contact.js";

const app = express();

app.use(bodyParser.json({ limit: "30mb", extended: true}));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true}));
app.use(cors());

app.use("/projects", projectRoutes);
app.use("/experience", experienceRoutes);
app.use("/contact", contactRoutes);

mongoose.connect(CONNECTION_URL, { useNewURLParser: true, useUnifiedTopology: true})
    .then(() => app.listen(PORT || 5000, () => console.log(`Server running on port: ${PORT}`)))
    .catch((error) => console.log(error.message));  
