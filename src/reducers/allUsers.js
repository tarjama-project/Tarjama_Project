import * as actions from "../actions/actionType";

const getAllUsers = (state = [], action) => {
    switch(action.type){
        case actions.ALL_USERS:
            return action.paylod;
        default:
            return state;
    }
}

export default getAllUsers;