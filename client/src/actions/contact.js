import * as api from "../api";
import { CREATE } from "../constants/actionTypes";

export const createMessage = (message) => async (dispatch) => {
    try {
        const { data } = await api.createMessage(message);
        const action = {
            type: CREATE,
            payload: data 
        }
        dispatch(action);
    } catch (error) {
        console.log(error);
    }
}