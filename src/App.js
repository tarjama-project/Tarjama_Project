// import logo from './logo.svg';
import cookie from 'react-cookies';
// import './App.css';
import {useSelector, useDispatch} from "react-redux";
import SignIn from './components/SignIn';
import { logOut, user_Delete_Info } from "./actions/signIn"
import {logInState} from "./actions/checkLogInState"
import Header from './components/Header';
import Posts from './components/Posts';

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

          <Header />
          <div>
            <section>
              <button onClick={logOutFunc}> Users </button>
              <button onClick={logOutFunc}> Posts </button>

              <button onClick={logOutFunc}> Log Out </button>
            </section>
            <section>
              <Posts />
            </section>
          </div>


        </>
      }
    </div>
  );
}

export default App;