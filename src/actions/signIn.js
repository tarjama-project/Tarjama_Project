import cookie from 'react-cookies';
import * as actions from "./actionType";


export const signIn = () => {
    return({
        type: actions.SIGN_IN
    })
}
export const logOut = () => {
    cookie.remove('userInfo');
    return({
        type: actions.SIGN_IN_FALSE
    })
}
export const userInfo = (data) => {
    cookie.save('userInfo', JSON.stringify(data));
    return({
        type: actions.USER_INFO,
        paylod: data
    })
}
export const user_Update_Info = (data) => {
    return({
        type: actions.UPDATA_INFO,
        paylod: data
    })
}
export const user_Delete_Info = () => {
    return({
        type: actions.REMOVE_INFO
    })
}