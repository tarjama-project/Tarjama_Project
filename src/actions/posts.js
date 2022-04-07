
import * as actions from "./actionType";

export const getPosts = (data) => {
    
    return({
            type: actions.GET_POSTS,
            paylod:data 
        })
}
