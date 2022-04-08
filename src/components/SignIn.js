import React from 'react'
import { useSelector, useDispatch } from "react-redux";
import * as actions from "../actions/signIn";
import * as actions2 from "../actions/posts";
import * as actions3 from "../actions/allAlbums";
import * as function_Handlers from "../actions/API_Funtions_Handeler";
// import Swal from 'sweetalert2/dist/sweetalert2.js'
// import 'sweetalert2/src/sweetalert2.scss'
import Swal from 'sweetalert2'


export default function SignIn() {

    const logged = useSelector(state => state.isLogged);
    const allUsers = useSelector(state => state.allUsers);

    const dispatch = useDispatch();

    const signInFunc = async (e) => {
        e.preventDefault();
        let name = document.getElementById('name').value;
        let email = document.getElementById('email').value;
        let data = {
            name,
            email
        }
        let logInResult = await function_Handlers.checkUser(data);
        // console.log("LogIn Result -=> ", logInResult);
        if (logInResult) {
            dispatch(actions.signIn());
            dispatch(actions.userInfo(logInResult));
            if (allUsers.length === 0) {
                let allUsers = await function_Handlers.allUsers();
                dispatch(actions.allUsers(allUsers));

                let posts = await function_Handlers.getPosts();
                dispatch(actions2.getPosts(posts));

                let allAlbums = await function_Handlers.allAlbums();
                dispatch(actions3.allAlbums(allAlbums));
            }
        } else {
            Swal.fire({
                icon: 'error',
                title: 'Invalid LogIn',
                text: 'Please check your Name and Email...',
            })
        }

    }

    return (
        <div className="text-center">
            <div>
            <h2 className="mt-16 mb-16"> Log In Form </h2>

            {/*  */}
            <div class="m-auto w-full max-w-xs">
                <form onSubmit={signInFunc} class="bg-gray shadow-md rounded px-8 pt-6 pb-8 mb-4">
                    <div class="mb-4">
                        <label class="block text-gray-700 text-sm font-bold mb-2" for="name">
                            Username
                        </label>
                        <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" required type="text" placeholder='userName' name="name" id="name" />
                    </div>
                    <div class="mb-6">
                        <label class="block text-gray-700 text-sm font-bold mb-2" for="email">
                            Email
                        </label>
                        <input class="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" required type="email" placeholder='email' name="email" id="email" />
                        <p class="text-red-500 text-xs italic">Please choose your email and username.</p>
                    </div>
                    <div class="flex items-center justify-between">
                        <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
                            Sign In
                        </button>

                    </div>
                </form>

            </div>
            </div>
            
            {/*  */}

        </div>
    )
}