import * as actions from "../actions/actionType"

const postsState = (state =[], action) => {
    switch (action.type) {
        case actions.GET_POSTS:
            return action.paylod;
            default:
            return state;
    }
};


export default postsState;