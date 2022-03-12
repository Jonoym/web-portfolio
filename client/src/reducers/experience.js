import { FETCH_EXPERIENCE, CREATE } from "../constants/actionTypes";

export default (experience = [], action) => {
    switch (action.type) {
        case FETCH_EXPERIENCE:
            return action.payload;
        case CREATE:
            return [ ...experience, action.payload];
        default: 
            return experience;
    }
}