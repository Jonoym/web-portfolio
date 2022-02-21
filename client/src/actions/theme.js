import { SWITCH_THEME } from "../constants/actionTypes";

export const switchTheme = (current) => async (dispatch) => {
    try {
        const action = {
            type: SWITCH_THEME,
            payload: current 
        }
        dispatch(action);
    } catch (error) {
        console.log(error);
    }
}
