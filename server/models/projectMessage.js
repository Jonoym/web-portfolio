import mongoose from "mongoose";

const pprojectSchema = mongoose.Schema({
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

const ProjectMessage = mongoose.model("ProjectMessage", pprojectSchema)

export default ProjectMessage;