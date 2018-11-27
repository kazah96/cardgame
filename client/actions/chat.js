import { createActions } from "redux-actions";
import { sendMessage } from "./connection";

const { chat } = createActions({
  CHAT: {
    MESSAGE: {
      SHOW: (message, sender, date) => ({
        message,
        sender,
        date: new Date(date).toLocaleString(),
      }),
      ADD: undefined,
      SEND: undefined,
    },
  },
});

chat.message.send = ({ id, message }) => dispatch => {
  dispatch(sendMessage(`SEND_MESSAGE_TO_USER`, { id, message }));
};

export default chat;
