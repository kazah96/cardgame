import { sendMessage } from "./connection";

export function sendHandshake() {
  return (dispatch) => {
    const token = window.sessionStorage.getItem(`token`);
    dispatch(sendMessage(`HANDSHAKE`, { token }));
  };
}

export function setHandshake(token) {
  return (dispatch) => {
    window.sessionStorage.setItem(`token`, token);
  };
}
