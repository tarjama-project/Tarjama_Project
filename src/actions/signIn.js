import cookie from 'react-cookies';
import * as actions from "./actionType";


export const signIn = (data) => {
    cookie.save('userInfo', JSON.stringify(data));
    return({
        type: actions.SIGN_IN
    })


}
    

    

// export default signIn;