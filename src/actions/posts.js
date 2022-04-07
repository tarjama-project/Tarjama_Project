
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

