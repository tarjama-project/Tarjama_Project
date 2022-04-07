import postsState from './posts';
import userInfoState from './userData';
import isLogged from './isLogged'
import { combineReducers } from "redux";

const allReducers = combineReducers({
    isLogged,
    userInfoState,
    postsState
})

export default allReducers;