import {sendMessage} from './connection';

export function changePosition(position) {
    console.log(position);

    return dispatch => {
        dispatch(sendMessage("SET_MY_POSITION", position));
    }
}