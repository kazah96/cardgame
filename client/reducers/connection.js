import { webSocketConnectBegin, webSocketConnected, webSocketError } from "../actions/connection";

export default function (state = {}, action) {
  switch (action.type) {
    case webSocketConnectBegin:
      return {
        ...state,
        isConnecting: true,
        error: {}
      }
    case webSocketConnected:
      console.log(action.socket);
      return {
        ...state,
        isConnecting: false,
        socket: action.socket,
        error: {}
      }
    case webSocketError:
      return {
        ...state,
        isConnecting: false,
        error: action.error
      }
    default: return state;
  }
}