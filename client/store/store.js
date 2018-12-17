import { createStore, applyMiddleware, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import reduxThunk from "redux-thunk";
import reducer from "reducers/reducer";
import connect from "reducers/connection";
import gameObject from "reducers/gameObject";
import gameConfig from "reducers/gameConfig";
import modal from "reducers/modal";
import currentUser from "reducers/currentUser";
import stats from "reducers/stats";
import chat from "reducers/chat";
import array from "reducers/array";
import map from "reducers/map";

export default createStore(
  combineReducers({
    game: combineReducers({ objects: gameObject, config: gameConfig }),
    reducer,
    connect,
    modal,
    currentUser,
    stats,
    chat,
    array,
    map,
  }),
  composeWithDevTools(applyMiddleware(reduxThunk)),
);
