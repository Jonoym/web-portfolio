import { FETCH_PROJECTS, CREATE, DELETE } from "../constants/actionTypes";


export default (projects = [], action) => {
    switch (action.type) {
        case FETCH_PROJECTS:
            return action.payload;
        case CREATE:
            return [ ...projects, action.payload];
        case DELETE:
            return projects.filter((project) => project._id != action.payload);
        default:
            return projects;
    }
}