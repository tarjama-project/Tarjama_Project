import * as actions from "../actions/actionType"

const loggedReducer = (state = false, action) => {
    switch (action.type) {
        case actions.SIGN_IN:
            return true;
            case actions.SIGN_IN_FALSE:
            return false
        default:
            return state;
    }
};


export default loggedReducer;