import * as api from "../api";
import { FETCH_ALL, CREATE, DELETE } from "../constants/actionTypes";

export const getProjects = () => async (dispatch) => {
    try {
        const { data } = await api.fetchProjects();
        const action = {
            type: FETCH_ALL,
            payload: data 
        }
        dispatch(action);
    } catch (error) {
        console.log(error);
    }
}

export const createProject = (project) => async (dispatch) => {
    try {
        const { data } = await api.createProject(project);
        const action = { 
            type: CREATE,
            payload: data
        }
        dispatch(action);
    } catch (error) {
        console.log(error);
    }
}

export const deleteProject = (id) => async (dispatch) => {

    try {
        await api.deleteProject(id);

        dispatch({ type: DELETE, payload: id });
    } catch (error) {
        console.log(error);
    }
}