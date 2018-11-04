import { emitAction } from './actions';

export const webSocketConnectBegin = "WEBSOCKET_CONNECT_BEGIN";
export const webSocketConnected = "WEBSOCKET_CONNECTED";
export const webSocketError = "WEBSOCKET_ERROR";

let socket = undefined;

const callbacks = [];

export function connect(data) {
  return dispatch => {
    if (socket) return;

    socket = new WebSocket("ws://localhost:3000");
    dispatch({ type: webSocketConnectBegin });

    console.log(socket);
    socket.onopen = () => {
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
      console.log(message);

      callbacks.forEach(callback => {
        callback(message);
      });

      emitAction(dispatch, message);
    }

  }
}

export function onMessage(callback) {
  callbacks.push(callback);
}

function sendMessage(type, obj) {
  console.log("sending");
  console.log(type);
  console.log(obj);
  return dispatch => {
    if (!socket) return;
    console.log(socket);
    const message = JSON.stringify({ type, payload: obj });
    socket.send(message);
  }

}

export { sendMessage };