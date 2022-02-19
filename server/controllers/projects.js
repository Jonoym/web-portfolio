import ProjectMessage from "../models/projectMessage.js";

export const getProjects = async (request, response) => {
    try {
        const projectMessages = await ProjectMessage.find()

        console.log(projectMessages);

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