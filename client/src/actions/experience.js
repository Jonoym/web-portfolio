import * as api from "../api";
import { FETCH_EXPERIENCE, CREATE } from "../constants/actionTypes";

export const getExperience = () => async (dispatch) => {
    try {
        const { data } = await api.fetchExperience();
        const action = {
            type: FETCH_EXPERIENCE,
            payload: data 
        }
        dispatch(action);
    } catch (error) {
        console.log(error);
    }
}

export const createExperience = (experience) => async (dispatch) => {
    try {
        const { data } = await api.createExperience(experience);
        const action = {
            type: CREATE,
            payload: data 
        }
        dispatch(action);
    } catch (error) {
        console.log(error);
    }
}