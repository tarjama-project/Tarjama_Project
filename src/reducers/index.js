import isLogged from "./isLogged";

import userInfoState from './userData';

import { combineReducers } from "redux";

const allReducers = combineReducers({
    isLogged,
    userInfoState,
})

export default allReducers;