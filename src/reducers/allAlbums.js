import * as actions from '../actions/actionType'

const allAlbums =(state=[],action)=>{
    switch(action.type){
        case actions.ALL_ALBUMS:
            return action.paylod
            default:
                return state;
    }

}
export default allAlbums;