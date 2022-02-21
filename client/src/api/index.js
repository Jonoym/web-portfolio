import axios from "axios";

const projectsUrl = "http://localhost:5000/projects";

export const fetchProjects = () => axios.get(projectsUrl);
export const createProject = (newProject) => axios.post(projectsUrl, newProject);
export const deleteProject = (id) => {axios.delete(`${projectsUrl}/${id}`)};

const experienceUrl = "http://localhost:5000/experience";

export const fetchExperience = () => axios.get(experienceUrl);
export const createExperience = (newExperience) => axios.post(experienceUrl, newExperience);