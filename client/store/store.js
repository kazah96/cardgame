import { createStore, applyMiddleware, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import reduxThunk from 'redux-thunk';
import reducer from '../reducers/reducer';
import connect from '../reducers/connection';
import gameObject from '../reducers/gameObject';
import modal from '../reducers/modal';
import currentUser from "../reducers/currentUser";

export default createStore(
    combineReducers({
        reducer,
        connect,
        gameObject,
        modal,
        currentUser
    }),
    composeWithDevTools(applyMiddleware(reduxThunk)));
