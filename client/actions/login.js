import { sendMessage } from "./connection";
import { removeCurrentUser } from "./currentUser";

export function login({ username, password }) {
    return dispatch => {
        dispatch(sendMessage("LOGIN", { username, password }));
    }

}

export function logout() {
    return dispatch => {
        dispatch(sendMessage("LOGOUT"));
        dispatch(removeCurrentUser());
    }
}

export function registerUser({ username, password, year }) {
    return dispatch => {
        dispatch(sendMessage("USER_REGISTER", {username, password, year}));
    }
}