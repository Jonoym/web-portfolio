import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";

import projectRoutes from "./routes/projects.js";
import experienceRoutes from "./routes/experience.js";

const app = express();

app.use(bodyParser.json({ limit: "30mb", extended: true}));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true}));
app.use(cors());

app.use("/projects", projectRoutes);
app.use("/experience", experienceRoutes);

const CONNECTION_URL = "mongodb+srv://jonoym:bIdBbzvUwTztUtAo@webportfolio.8zrd4.mongodb.net/WebPortfolio?retryWrites=true&w=majority";
const PORT = process.env.PORT || 5000;

mongoose.connect(CONNECTION_URL, { useNewURLParser: true, useUnifiedTopology: true})
    .then(() => app.listen(PORT, () => console.log(`Server running on port: ${PORT}`)))
    .catch((error) => console.log(error.message));