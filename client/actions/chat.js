import { sendMessage } from './connection';

export function addMessageInChat(name) {
  return {
    type: "ADD_MESSAGE_IN_CHAT",
    name,
  }
}

export function showMessage(message, sender, date) {
  return {
    type: "SHOW_MESSAGE",
    message,
    sender,
    date: new Date(date).toLocaleString()
  }
}

export function sendMessageToUser({ id, message }) {
  return dispatch => {
    dispatch(sendMessage("SEND_MESSAGE_TO_USER", { id, message }));
  }
}