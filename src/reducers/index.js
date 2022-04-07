import postsState from './posts';
import userInfoState from './userData';
import isLogged from './isLogged'
import allAlbums from './allAlbums';
import getAllUsers from'./allUsers'
import { combineReducers } from "redux";


const allReducers = combineReducers({
    isLogged,
    userInfoState,
    postsState,
    allAlbums,
    getAllUsers
})

export default allReducers;