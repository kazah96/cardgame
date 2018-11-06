import { emitAction } from './actions';
import { sendHandshake } from './session';

export const webSocketConnectBegin = "WEBSOCKET_CONNECT_BEGIN";
export const webSocketConnected = "WEBSOCKET_CONNECTED";
export const webSocketError = "WEBSOCKET_ERROR";

let socket = undefined;

const callbacks = [];

export function connect(data) {
  return dispatch => {
    if (socket) return;
    console.log(window.location);
    socket = new WebSocket(`ws://${window.location.hostname}:3000`);
    dispatch({ type: webSocketConnectBegin });

    socket.onopen = () => {
      dispatch(sendHandshake());
      dispatch({
        type: webSocketConnected,
        socket
      });

    };

    socket.onerror = (error) => {
      dispatch({
        type: webSocketError,
        error
      })
    };


    socket.onmessage = (msg) => {
      const message = JSON.parse(msg.data);

      callbacks.forEach(callback => {
        callback(message);
      });

      emitAction(dispatch, message);
    }

  }
}

function onMessage(callback) {
  callbacks.push(callback);
}

function sendMessage(type, obj) {
  console.log("sending");
  console.log(type);
  console.log(obj);
  return dispatch => {
    if (!socket) return;
    console.log(socket);
    const message = JSON.stringify({ type, data: obj });
    socket.send(message);
  }

}

export { sendMessage, onMessage };