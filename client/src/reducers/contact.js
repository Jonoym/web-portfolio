import { CREATE } from "../constants/actionTypes";

export default (message = [], action) => {
    switch (action.type) {
        case CREATE:
            return [ ...message, action.payload];
        default: 
            return message;
    }
}