import React from 'react'
import { useSelector, useDispatch } from "react-redux";
import * as actions from "../actions/signIn";
import * as function_Handlers from "../actions/API_Funtions_Handeler"
import Swal from 'sweetalert2'


export default function SignIn() {

    const logged = useSelector(state => state.isLogged);

    const dispatch = useDispatch();

    const signInFunc = async(e) => {
        e.preventDefault();
        let name = document.getElementById('name').value;
        let email = document.getElementById('email').value;
        let data = {
            name,
            email
        }
        let logInResult = await function_Handlers.checkUser(data);
        // console.log("LogIn Result -=> ", logInResult);
        if(logInResult){
            dispatch(actions.signIn());
            dispatch(actions.userInfo(logInResult));
        }else{
            Swal.fire({
                icon: 'error',
                title: 'Invalid LogIn',
                text: 'Please check your Name and Email...',
              })
        }

    }
    return (
        <div>
            <h2> Log In Form </h2>
            <form onSubmit={signInFunc}>
            <input required type="text" placeholder='name' name="name" id="name" />
            <input required type="email" placeholder='email' name="email" id="email" />
            <input type='submit' value="Sign In" />
            </form>
           

          
        </div>
    )
}