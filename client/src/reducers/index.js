import { combineReducers } from "redux";

import projects from "./projects";
import experience from "./experience";
import theme from "./theme";

export default combineReducers({
    projects,
    experience,
    theme
});