// import logo from './logo.svg';
import cookie from 'react-cookies';
// import './App.css';
import { useSelector, useDispatch } from "react-redux";
import SignIn from './components/SignIn';
import { logOut, user_Delete_Info } from "./actions/signIn"
import { logInState } from "./actions/checkLogInState"
import Header from './components/Header';
import Posts from './components/Posts';
import LeftBar from './components/LeftBar'
import Profile from './components/Profile'
import Users from  './components/Users'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css'
function App() {
  const logged = useSelector(state => state.isLogged);

  const dispatch = useDispatch();


  const logOutFunc = () => {
    cookie.remove('userInfo');
    dispatch(logOut());
    dispatch(user_Delete_Info());
  }
  return (
    <div className="App">


      
      

      {
        !logged &&
        
        <SignIn />
        
      
      }
      {
        logged &&
        <>
          <BrowserRouter>
            <Header />
            
            <div>
              <LeftBar />
             

              <a onClick={logOutFunc}> Log Out </a>
              


              <Routes>
                <Route path="/" element={<Posts />}> </Route>
                <Route path="/posts" element={<Posts />}> </Route>
                <Route path="/profile" element={<Profile />}></Route>

                <Route path="/users" element={<Users />}></Route>

              </Routes>

            </div>

          </BrowserRouter>
        </>

      }
    </div>
  );
}

export default App;