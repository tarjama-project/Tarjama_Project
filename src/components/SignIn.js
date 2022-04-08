import React from 'react'
import { useSelector, useDispatch } from "react-redux";
import * as actions from "../actions/signIn";
import * as function_Handlers from "../actions/API_Funtions_Handeler"
import Swal from 'sweetalert2'
import '../index.css'


export default function SignIn() {

    const logged = useSelector(state => state.isLogged);

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
        } else {
            Swal.fire({
                icon: 'error',
                title: 'Invalid LogIn',
                text: 'Please check your Name and Email...',
            })
        }

    }
    return (
        <div >
            
            <h2 className=' flex flex-col justify-center items-center;' > Log In Form </h2>
            {/* <form onSubmit={signInFunc}>
                <div class="md:flex md:items-center mb-6">
               
                    <input required type="text" placeholder='name' name="name" id="name" />
                    <input required type="email" placeholder='email' name="email" id="email" />
                    <input type='submit' value="Sign In" />

                </div>


            </form> */}










<div >
            <form class="w-full max-w-sm flex flex-col justify-center items-center;" onSubmit={signInFunc}>
  <div class="md:flex md:items-center mb-6">
    <div class="md:w-1/3">
      <label class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" for="inline-full-name">
        name
      </label>
    </div>
    <div class="md:w-2/3">
      <input  name="name" id="name" class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"  type="text"/>
    </div>
  </div>
  <div class="md:flex md:items-center mb-6">
    <div class="md:w-1/3">
      <label class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" for="inline-password">
        email
      </label>
    </div>
    <div class="md:w-2/3">
      <input name="email" id="email" class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" type="text"/>
    </div>
  </div>
  <div class="md:flex md:items-center mb-6">
    <div class="md:w-1/3"></div>

  </div>
  <div class="md:flex md:items-center">
    <div class="md:w-1/3"></div>
    <div class="md:w-2/3">
    <input type='submit' value="Sign In" />
      
    </div>
  </div>
</form>
</div>







        </div>









    )
}