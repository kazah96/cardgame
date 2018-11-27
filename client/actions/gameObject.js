import { sendMessage } from './connection';

export function changePosition(position) {
  return (dispatch) => {
    dispatch(sendMessage(`SET_MY_POSITION`, position));
  };
}
