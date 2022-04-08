import React, { Fragment } from 'react';
import logo from './logo.svg';
import cookie from 'react-cookies';
// import './App.css';
import { useSelector, useDispatch } from "react-redux";
import SignIn from './components/SignIn';
import { logOut, user_Delete_Info } from "./actions/signIn"
import Posts from './components/Posts';
import Header from './components/Header';
import LeftBar from './components/LeftBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Profile from './components/Profile';
import Users from './components/Users';

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
          <BrowserRouter >
            <Header />
            <div className="flex gap-4">

              <section className="bg-sky-800 relative">
                <div className="sticky top-0 left-0">
                <LeftBar logOutFunc={logOutFunc} />

                </div>
              </section>

              <section className="mb-4">
                <Routes>
                  <Route path="/" element={<Posts />}>

                  </Route>

                  <Route path="/posts" element={<Posts />}>

                  </Route>

                  <Route path="/profile" element={<Profile />}>

                  </Route>

                  <Route path="/users" element={<Users />}>

                  </Route>
                </Routes>
              </section>



            </div>
          </BrowserRouter>


        </>
      }
    </div>
  );
}

export default App;
