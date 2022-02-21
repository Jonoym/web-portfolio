import mongoose from "mongoose";
import ExperienceMessage from "../models/experienceMessage.js";

export const getExperience = async (request, response) => {
    try {
        const experienceMessage = await ExperienceMessage.find();

        response.status(200).json(experienceMessage);
    } catch (error) {
        response.status(404).json({
            message: error.message
        })
    }
}

export const createExperience = async (request, response) => {
    const experience = request.body;

    const newExperience = new ExperienceMessage(experience);

    try {
        await newExperience.save();

        response.status(201).json(newExperience);
    } catch (error) {
        response.status(409).json({
            message: error.message
        })
    }
}