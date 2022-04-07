import * as  actions from '../actions/actionType'

export  const allAlbums=(data)=>{
    return ({
        type:actions.ALL_ALBUMS,
        paylod:data
    })

}