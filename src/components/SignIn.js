import React from 'react'
import { useSelector, useDispatch } from "react-redux";
import {signIn} from "../actions/signIn";


export default function SignIn() {

    const logged = useSelector(state => state.isLogged);

    const dispatch = useDispatch();

    const signInFunc = async() => {
        // e.preventDefault();
        let name = document.getElementById('name').value;
        let email = document.getElementById('email').value;
        let data = {
            name,
            email
        }

        await dispatch(signIn(data));

        console.log('logged');

    }

    return (
        <div>
            <h2> Log In Form </h2>
            
            <input required type="text" placeholder='name' name="name" id="name" />
            <input required type="email" placeholder='email' name="email" id="email" />

            <button onClick={() => signInFunc()}> Sign In </button>
        </div>
    )
}