import { emitAction } from "./actions";
import { sendHandshake } from "./session";

export const webSocketConnectBegin = `WEBSOCKET_CONNECT_BEGIN`;
export const webSocketConnected = `WEBSOCKET_CONNECTED`;
export const webSocketError = `WEBSOCKET_ERROR`;

let socket;

const callbacks = [];

export function connect() {
  return dispatch => {
    if (socket) return;

    socket = new WebSocket(`ws://${window.location.hostname}:3000`);
    dispatch({ type: webSocketConnectBegin });

    socket.onopen = () => {
      dispatch(sendHandshake());
      dispatch({
        type: webSocketConnected,
        socket,
      });
    };

    socket.onerror = error => {
      dispatch({
        type: webSocketError,
        error,
      });
    };

    socket.onmessage = msg => {
      const message = JSON.parse(msg.data);

      callbacks.forEach(callback => {
        callback(message);
      });

      emitAction(dispatch, message);
    };
  };
}

function onMessage(callback) {
  callbacks.push(callback);
}

function sendMessage(type, obj) {
  return () => {
    if (!socket) return;
    const message = JSON.stringify({ type, data: obj });
    socket.send(message);
  };
}

window.sendMessage = sendMessage;

export { sendMessage, onMessage };
