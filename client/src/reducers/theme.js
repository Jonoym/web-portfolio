import { SWITCH_THEME } from "../constants/actionTypes";


export default (theme = "dark", action) => {
    switch (action.type) {
        case SWITCH_THEME:
            if (action.payload === "dark") {
                return "light";
            } else {
                return "dark";
            }
        default:
            return theme;
    }
}