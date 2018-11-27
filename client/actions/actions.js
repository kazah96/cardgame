import mapActions from "actions/map";
import { showModal } from "./modal";
import { setCurrentUser } from "./currentUser";
import { setHandshake } from "./session";
import { setUsersCount } from "./stats";
import chat from "./chat";

export const actions = {
  SHOW_ALERT: (dispatch, data) => {
    alert(data);
  },
  CONSOLE_LOG: (dispatch, data) => {
    console.log(data);
  },
  SET_POSITION: (dispatch, data) => {
    dispatch({ type: `SET_POSITION`, data });
  },
  UNAUTHORIZED: (dispatch, data) => {
    dispatch(showModal(`loginform`));
  },
  SHOW_MODAL: (dispatch, data) => {
    dispatch(showModal(data.name, data.message));
  },
  LOGIN_SUCCESS: (dispatch, data) => {
    dispatch(setCurrentUser(data));
    dispatch(setHandshake(data.token));
  },
  HANDSHAKE_REJECTED: (dispatch, data) => {
    dispatch(showModal(`loginform`));
  },
  HANDSHAKE_ACCEPTED: (dispatch, data) => {
    dispatch(setCurrentUser(data));
  },
  USERS_COUNT: (dispatch, data) => {
    dispatch(setUsersCount(data.users));
  },
  SHOW_MESSAGE: (dispatch, data) => {
    dispatch(chat.message.show(data.message, data.sender, data.date));
    dispatch(showModal(`showmessage`));
  },
  MAP: (dispatch, data) => {
    dispatch(mapActions.add(data.map));
  },
};

export function emitAction(dispatch, message) {
  const action = actions[message.type];

  if (!action) {
    console.log(message);
    console.log(`No such action`);
    return;
  }

  action(dispatch, message.data);
}
