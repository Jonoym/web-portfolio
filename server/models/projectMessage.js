import mongoose from "mongoose";

const projectSchema = mongoose.Schema({
    project: String,
    date: String,
    text: String,
    tags: String,
    image: String
});

const ProjectMessage = mongoose.model("ProjectMessage", projectSchema)

export default ProjectMessage;