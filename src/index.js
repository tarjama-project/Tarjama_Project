import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import reportWebVitals from './reportWebVitals';
import allReducers from './reducers';
import { createStore, applyMiddleware } from 'redux';
import cookie from 'react-cookies';
// import store from "./store/store"
import {logInState} from "./actions/checkLogInState"
import * as signInFunctions from "./actions/signIn"
import storage from 'redux-persist/lib/storage'
import { persistStore, persistReducer } from 'redux-persist'

const persistConfig = {
  key: 'root',
  storage,
}

const persistedReducer = persistReducer(persistConfig, allReducers)

const store = createStore(persistedReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
let persistor = persistStore(store);

const userInfo = cookie.load('userInfo');
// console.log(userInfo);
if(userInfo){
  store.dispatch(logInState(userInfo));
  store.dispatch(signInFunctions.userInfo(userInfo));
}



ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
