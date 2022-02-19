import mongoose from "mongoose";

const projectSchema = mongoose.Schema({
    title: String,
    date: String,
    text: String,
    tags: [String],
    selectedFile: String,
    likeCount: {
        type: Number,
        default: 0
    },
    createdAt: {
        type: Date,
        default: new Date()
    }
});

const ProjectMessage = mongoose.model("ProjectMessage", projectSchema)

export default ProjectMessage;