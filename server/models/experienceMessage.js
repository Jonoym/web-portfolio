import mongoose from "mongoose";

const experienceSchema = mongoose.Schema({
    role: String,
    company: String,
    date: String,
    location: String,
    summary: String,
    tags: String,
    image: String,
    tag: String,
});

const ExperienceMessage = mongoose.model("ExperienceMessage", experienceSchema)

export default ExperienceMessage;