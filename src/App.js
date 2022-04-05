// import logo from './logo.svg';
import cookie from 'react-cookies';
// import './App.css';
import {useSelector, useDispatch} from "react-redux";
import SignIn from './components/SignIn';
import {logInState} from "./actions/checkLogInState"


function App() {
  const logged = useSelector(state => state.isLogged);

  const dispatch = useDispatch();

  const logOutFunc = () => {
    cookie.remove('userInfo');
    dispatch(logInState());
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
        <h2> Hello Man !! </h2>
        <button onClick={logOutFunc}> Log Out </button>
        </>
      }
    </div>
  );
}

export default App;