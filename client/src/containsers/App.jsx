import React,{Component, Fragment} from 'react';
import { Provider } from 'react-redux';
import {BrowserRouter as Router} from 'react-router-dom'; 
import decode from 'jwt-decode';
//import api, { setToken } from '../services/api';
import {store} from '../store';
import {setCurrentUser,addError,setToken} from '../store/actions';
import RoutViews from './RouteViews';
import NavBar from './NavBar';

if(localStorage.jwtToken){
    setToken(localStorage.jwtToken);
    try{
        store.dispatch(setCurrentUser(decode(localStorage.jwtToken)));
    }catch(err){
        store.dispatch(setCurrentUser({}));
        store.dispatch(addError(err));
    }
}

const App = () => (
    <Provider store = {store}>
        <Router>
            <Fragment>
                <NavBar />
                <RoutViews />
            </Fragment>
        </Router>
    </Provider>
);

export default App;