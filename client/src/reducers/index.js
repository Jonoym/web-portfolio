import { combineReducers } from "redux";

import projects from "./projects";
import experience from "./experience";

export default combineReducers({
    projects,
    experience
});