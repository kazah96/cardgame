import { createStore, applyMiddleware, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import reduxThunk from 'redux-thunk';
import reducer from 'reducers/reducer';
import connect from 'reducers/connection';
import gameObject from 'reducers/gameObject';
import modal from 'reducers/modal';
import currentUser from "reducers/currentUser";
import stats from "reducers/stats";
import chat from "reducers/chat";
import array from "reducers/array";
import map from "reducers/map";
import tiles from "reducers/tiles";

export default createStore(
  combineReducers({
    reducer,
    connect,
    gameObject,
    modal,
    currentUser,
    stats,
    chat,
    array,
    map,
    tiles,
  }),
  composeWithDevTools(applyMiddleware(reduxThunk)),
);
