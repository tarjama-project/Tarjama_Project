
import * as actions from "./actionType";
//actions to retrive post


export const getPosts = (data) => {
    
    return({
            type: actions.GET_POSTS,
            paylod:data 
        })
}
//action to delete post 
export const deletePosts=(data)=>{
    return({
        type: actions.DELETE_POSTS,
        paylod:data 
    })
}

//action update post 
export const updatePosts = (data) => {
    return({
        type: actions.UPDATE_POST,
        paylod: data
    })
}
//action to add post 
export const addPosts = (data) => {
    return({
        type: actions.ADD_POST,
        paylod: data
    })
}
