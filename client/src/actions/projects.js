import * as api from "../api";

// Action Creators
export const getProjects = () => async (dispatch) => {
    try {
        const { data } = await api.fetchProjects();
        const action = {
            type: "FETCH_ALL",
            payload: data 
        }
        dispatch(action);
    } catch (error) {
        console.log(error.message);
    }

}