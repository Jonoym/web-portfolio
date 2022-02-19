import mongoose from "mongoose";
import ProjectMessage from "../models/projectMessage.js";

export const getProjects = async (request, response) => {
    try {
        const projectMessages = await ProjectMessage.find()

        response.status(200).json(projectMessages);
    } catch (error) {
        response.status(404).json({
            message: error.message
        })
    }
};

export const createProject = async (request, response) => {
    const project = request.body;

    const newProject = new ProjectMessage(project);

    try {
        await newProject.save();

        response.status(201).json(newProject);
    } catch (error) {
        response.status(409).json({
            message: error.message
        })
    }
};

export const deleteProject = async (request, response) => {

    const { id } = request.params;
    
    if (!mongoose.Types.ObjectId.isValid(id)) return response.status(404).send("No post with that id");
    
    await ProjectMessage.findByIdAndRemove(id);

    console.log("DELETE");

    response.json({
        message: "Post deleted successfully"
    })
};