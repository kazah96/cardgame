import { handleActions } from "redux-actions";
import chatActions from "actions/chat";

export default handleActions({
  [chatActions.message.show]: (state, action) => ({
    ...state,
    ...action.payload,
  }),
}, { message: {} });
