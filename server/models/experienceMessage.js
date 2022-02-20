import mongoose from "mongoose";

const experienceSchema = mongoose.Schema({
    role: String,
    date: String,
    employer: String,
    location: String,
    text: String,
    tags: [String],
    selectedFile: String,
});

const ExperienceMessage = mongoose.model("ExperienceMessage", experienceSchema)

export default ExperienceMessage;