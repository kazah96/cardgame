import {sendMessage} from './connection';

export function changePosition(position) {
    console.log(position);

    return dispatch => {
        dispatch({type: "SET_POSITION", data: position});
        dispatch(sendMessage("SET_POSITION", position));
    }
}