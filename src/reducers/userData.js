import * as actions from "../actions/actionType"

const userInfoState = (state = {}, action) => {
    switch (action.type) {
        case actions.USER_INFO:
            return action.paylod;
        case actions.UPDATA_INFO:
            return action.paylod;
        case actions.REMOVE_INFO:
            return {}
        default:
            return state;
    }
};


export default userInfoState;