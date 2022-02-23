import mongoose from "mongoose";

const experienceSchema = mongoose.Schema({
    role: String,
    company: String,
    date: String,
    location: String,
    text: String,
    tags: String,
    image: String
});

const ExperienceMessage = mongoose.model("ExperienceMessage", experienceSchema)

export default ExperienceMessage;