import * as actions from "./actionType"

export const logInState = (data) => {
    console.log(data);
    if(data!== null && data !==undefined){
        return({
            type: actions.SIGN_IN
        })
    }else{
        return({
            type: actions.SIGN_IN_FALSE
        })
    }


}